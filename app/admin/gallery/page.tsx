'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';

export default function GalleryAdmin() {
    const { data: session } = useSession();
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingImage, setEditingImage] = useState<any>(null);
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = () => {
        fetch('/api/gallery')
            .then(res => res.json())
            .then(data => {
                setImages(data.images || []);
                setLoading(false);
            });
    };

    const handleEdit = (item: any) => {
        setEditingImage(item);
        setFile(null);
    };

    const handleDelete = async (id: string | undefined) => {
        if (!id) return;
        if (!window.confirm("Are you sure? This will also delete the image file.")) return;
        const res = await fetch(`/api/gallery?id=${id}`, { method: 'DELETE' });
        if (res.ok) {
            fetchImages();
            toast.success('Deleted successfully');
        } else {
            toast.error('Failed to delete');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const loadToast = toast.loading('Saving...');

        const formData = new FormData();
        if (editingImage._id) formData.append('id', editingImage._id);
        formData.append('title', editingImage.title || '');
        formData.append('category', editingImage.category || '');
        formData.append('order', editingImage.order?.toString() || '0');
        formData.append('imageUrl', editingImage.imageUrl || '');
        if (file) {
            formData.append('file', file);
        }

        const res = await fetch('/api/gallery', {
            method: 'POST',
            body: formData,
        });

        if (res.ok) {
            setEditingImage(null);
            setFile(null);
            fetchImages();
            toast.success('Saved successfully!', { id: loadToast });
        } else {
            const data = await res.json();
            toast.error(data.error || 'Error saving image', { id: loadToast });
        }
    };

    if (loading) return <div className="p-5 text-dark">Loading...</div>;

    return (
        <div className="p-5" style={{ background: '#f8f9fa', color: '#212529', minHeight: '100vh' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="text-dark">Manage Heroic Gallery</h1>
                <Link href="/admin" className="btn btn-outline-secondary">Back to Dashboard</Link>
            </div>

            {editingImage ? (
                <div className="p-4 border rounded mb-5 bg-white shadow-sm">
                    <h2 className="text-dark mb-4">{editingImage._id ? 'Edit Image' : 'Add New Image'}</h2>
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label text-dark">Title</label>
                            <input type="text" className="form-control" value={editingImage.title || ''} onChange={(e) => setEditingImage({ ...editingImage, title: e.target.value })} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label text-dark">Category / Alt Text</label>
                            <input type="text" className="form-control" value={editingImage.category || ''} onChange={(e) => setEditingImage({ ...editingImage, category: e.target.value })} />
                        </div>
                        <div className="col-md-2">
                            <label className="form-label text-dark">Sort Order</label>
                            <input type="number" className="form-control" value={editingImage.order || 0} onChange={(e) => setEditingImage({ ...editingImage, order: parseInt(e.target.value) })} />
                        </div>
                        <div className="col-12">
                            <label className="form-label text-dark">Upload Image</label>
                            <input
                                type="file"
                                className="form-control"
                                accept="image/*"
                                onChange={(e) => setFile(e.target.files?.[0] || null)}
                                required={!editingImage._id}
                            />
                            {editingImage.imageUrl && !file && (
                                <div className="mt-2">
                                    <small className="text-muted d-block mb-1">Current Image:</small>
                                    <img src={`/assets/images/gallery/${editingImage.imageUrl}`} alt="preview" style={{ height: '80px', borderRadius: '4px' }} />
                                </div>
                            )}
                        </div>
                        <div className="col-12 mt-4">
                            <button type="submit" className="btn btn-success me-2">Save Image</button>
                            <button type="button" className="btn btn-secondary" onClick={() => setEditingImage(null)}>Cancel</button>
                        </div>
                    </form>
                </div>
            ) : (
                <button className="btn btn-danger mb-4" onClick={() => setEditingImage({ title: '', category: '', order: 0 })}>
                    Add New Gallery Image
                </button>
            )}

            <div className="row g-4">
                {images.length === 0 && <div className="col-12 text-center py-5 text-muted">No images found in gallery.</div>}
                {images.map((item) => (
                    <div key={item._id} className="col-md-3">
                        <div className="card shadow-sm h-100 overflow-hidden">
                            <div style={{ height: '200px', overflow: 'hidden', background: '#eee' }}>
                                <img
                                    src={`/assets/images/gallery/${item.imageUrl}`}
                                    alt={item.title}
                                    className="w-100 h-100 object-fit-cover"
                                />
                            </div>
                            <div className="card-body p-3">
                                <h3 className="h6 text-dark text-truncate mb-1">{item.title || 'Untitled'}</h3>
                                <p className="text-danger small mb-2">{item.category || 'No Category'}</p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-sm btn-outline-primary" onClick={() => handleEdit(item)}>Edit</button>
                                    <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(item._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {session?.user?.role === 'super_admin' && (
                <div className="mt-5 p-4 border rounded bg-white shadow-sm">
                    <h3 className="text-danger">Initial Setup</h3>
                    <p className="text-muted">Seed initial dummy images into the DB (using existing files in public folder):</p>
                    <button
                        onClick={async () => {
                            const loadToast = toast.loading('Seeding gallery data...');
                            try {
                                const res = await fetch('/api/seed/gallery');
                                const data = await res.json();
                                toast.success(data.message, { id: loadToast });
                                setTimeout(() => window.location.reload(), 1500);
                            } catch (err) {
                                toast.error('Seeding failed', { id: loadToast });
                            }
                        }}
                        className="btn btn-warning"
                    >
                        Seed Initial Gallery
                    </button>
                </div>
            )}
        </div>
    );
}
