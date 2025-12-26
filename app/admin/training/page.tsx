'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function TrainingAdmin() {
    const [styles, setStyles] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingStyle, setEditingStyle] = useState<any>(null);

    useEffect(() => {
        fetchStyles();
    }, []);

    const fetchStyles = () => {
        fetch('/api/training')
            .then(res => res.json())
            .then(data => {
                setStyles(data.styles || []);
                setLoading(false);
            });
    };

    const handleEdit = (style: any) => {
        setEditingStyle(style);
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure?")) return;
        const res = await fetch(`/api/training?id=${id}`, { method: 'DELETE' });
        if (res.ok) {
            fetchStyles();
            toast.success('Deleted successfully');
        } else {
            toast.error('Failed to delete');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const loadToast = toast.loading('Saving...');
        const res = await fetch('/api/training', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(editingStyle),
        });
        if (res.ok) {
            setEditingStyle(null);
            fetchStyles();
            toast.success('Saved successfully!', { id: loadToast });
        } else {
            toast.error('Error saving training style', { id: loadToast });
        }
    };

    if (loading) return <div className="p-5 text-dark">Loading...</div>;

    return (
        <div className="p-5" style={{ background: '#f8f9fa', color: '#212529', minHeight: '100vh' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="text-dark">Manage Training Styles</h1>
                <Link href="/admin" className="btn btn-outline-secondary">Back to Dashboard</Link>
            </div>

            {editingStyle ? (
                <div className="p-4 border rounded mb-5 bg-white shadow-sm">
                    <h2 className="text-dark mb-4">{editingStyle._id ? 'Edit Style' : 'Add New Style'}</h2>
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label text-dark">Title</label>
                            <input type="text" className="form-control" value={editingStyle.title} onChange={(e) => setEditingStyle({ ...editingStyle, title: e.target.value })} required />
                        </div>
                        <div className="col-md-3">
                            <label className="form-label text-dark">Order</label>
                            <input type="number" className="form-control" value={editingStyle.order} onChange={(e) => setEditingStyle({ ...editingStyle, order: parseInt(e.target.value) })} />
                        </div>
                        <div className="col-12">
                            <label className="form-label text-dark">Description</label>
                            <textarea className="form-control" rows={2} value={editingStyle.description} onChange={(e) => setEditingStyle({ ...editingStyle, description: e.target.value })} required></textarea>
                        </div>
                        <div className="col-12 mt-3">
                            <button type="submit" className="btn btn-success me-2">Save</button>
                            <button type="button" className="btn btn-secondary" onClick={() => setEditingStyle(null)}>Cancel</button>
                        </div>
                    </form>
                </div>
            ) : (
                <button className="btn btn-danger mb-4" onClick={() => setEditingStyle({ title: '', description: '', icon: '/assets/images/icon/icon-3.png', bgImage: '/assets/images/training/training-1.png', order: 0 })}>
                    Add New Style
                </button>
            )}

            <div className="row g-4">
                {styles.map((style) => (
                    <div key={style._id} className="col-md-4">
                        <div className="card shadow-sm h-100 p-3">
                            <div className="d-flex align-items-center mb-3 mt-1">
                                <img src={style.icon} alt="icon" width="40" className="me-3" />
                                <h3 className="h5 text-dark mb-0">{style.title}</h3>
                            </div>
                            <p className="card-text text-muted small flex-grow-1">{style.description}</p>
                            <div className="mt-3">
                                <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(style)}>Edit</button>
                                <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(style._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
