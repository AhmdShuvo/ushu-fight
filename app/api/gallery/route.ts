import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Gallery from '@/models/Gallery';
import { adminProtectedRoute } from '@/lib/auth';
import { writeFile, unlink } from 'fs/promises';
import path from 'path';

export async function GET() {
    await dbConnect();
    try {
        const images = await Gallery.find().sort({ order: 1 });
        return NextResponse.json({ images });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const authError = await adminProtectedRoute();
    if (authError) return authError;

    await dbConnect();
    try {
        const formData = await request.formData();
        const file = formData.get('file') as File | null;
        const title = formData.get('title') as string;
        const category = formData.get('category') as string;
        const order = formData.get('order') as string;
        const id = formData.get('id') as string;

        let imageUrl = formData.get('imageUrl') as string;

        if (file && typeof file !== 'string') {
            const bytes = await file.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const filename = Date.now() + '-' + file.name.replaceAll(' ', '_');
            const filePath = path.join(process.cwd(), 'public', 'assets', 'images', 'gallery', filename);
            await writeFile(filePath, buffer);
            imageUrl = filename;
        }

        if (id) {
            const updateData: any = {
                title,
                category,
                order: parseInt(order) || 0,
                imageUrl
            };
            const updated = await Gallery.findByIdAndUpdate(id, updateData, { new: true });
            return NextResponse.json({ message: "Updated successfully", item: updated });
        } else {
            if (!imageUrl) {
                return NextResponse.json({ error: "Image is required" }, { status: 400 });
            }
            const newItem = await Gallery.create({
                title,
                category,
                order: parseInt(order) || 0,
                imageUrl
            });
            return NextResponse.json({ message: "Created successfully", item: newItem });
        }
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    const authError = await adminProtectedRoute();
    if (authError) return authError;

    await dbConnect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    try {
        const item = await Gallery.findById(id);
        if (item && item.imageUrl) {
            const filePath = path.join(process.cwd(), 'public', 'assets', 'images', 'gallery', item.imageUrl);
            try {
                await unlink(filePath);
            } catch (err) {
                console.error("Failed to delete local file:", err);
            }
        }
        await Gallery.findByIdAndDelete(id);
        return NextResponse.json({ message: "Deleted successfully" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
