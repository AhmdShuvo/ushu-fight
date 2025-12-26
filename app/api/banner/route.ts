import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Banner from '@/models/Banner';
import { adminProtectedRoute } from '@/lib/auth';

export async function GET() {
    await dbConnect();
    try {
        const banner = await Banner.findOne();
        return NextResponse.json({ banner });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const authError = await adminProtectedRoute();
    if (authError) return authError;

    await dbConnect();
    try {
        const body = await request.json();
        const banner = await Banner.findOneAndUpdate({}, body, { new: true, upsert: true });
        return NextResponse.json({ message: "Updated successfully", banner });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
