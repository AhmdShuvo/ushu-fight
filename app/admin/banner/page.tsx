'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useSession } from 'next-auth/react';

export default function BannerAdmin() {
    const { data: session } = useSession();
    const [formData, setFormData] = useState({
        subTitle: '',
        title: '',
        innerTitle: '',
        description: '',
        widgetTextCount: '',
        buttonText: '',
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/banner')
            .then(res => res.json())
            .then(data => {
                if (data.banner) {
                    setFormData({
                        subTitle: data.banner.subTitle,
                        title: data.banner.title,
                        innerTitle: data.banner.innerTitle,
                        description: data.banner.description,
                        widgetTextCount: data.banner.widgetTextCount,
                        buttonText: data.banner.buttonText,
                    });
                }
                setLoading(false);
            });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const loadToast = toast.loading('Saving...');
        const res = await fetch('/api/banner', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (res.ok) {
            toast.success('Saved successfully!', { id: loadToast });
        } else {
            toast.error('Error saving content.', { id: loadToast });
        }
    };

    if (loading) return <div className="p-5 text-dark">Loading...</div>;

    return (
        <div className="p-5" style={{ background: '#f8f9fa', color: '#212529', minHeight: '100vh' }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="text-dark">Edit Banner Content</h1>
                <Link href="/admin" className="btn btn-outline-secondary">Back to Dashboard</Link>
            </div>

            <form onSubmit={handleSubmit} className="row g-3 bg-white p-4 rounded shadow-sm">
                <div className="col-md-6">
                    <label className="form-label text-dark">Sub Title</label>
                    <input type="text" name="subTitle" className="form-control" value={formData.subTitle} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label text-dark">Main Title</label>
                    <input type="text" name="title" className="form-control" value={formData.title} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label text-dark">Inner Title</label>
                    <input type="text" name="innerTitle" className="form-control" value={formData.innerTitle} onChange={handleChange} />
                </div>
                <div className="col-md-6">
                    <label className="form-label text-dark">Warrior Count</label>
                    <input type="text" name="widgetTextCount" className="form-control" value={formData.widgetTextCount} onChange={handleChange} />
                </div>
                <div className="col-12">
                    <label className="form-label text-dark">Description</label>
                    <textarea name="description" className="form-control" rows={4} value={formData.description} onChange={handleChange}></textarea>
                </div>
                <div className="col-md-6">
                    <label className="form-label text-dark">Button Text</label>
                    <input type="text" name="buttonText" className="form-control" value={formData.buttonText} onChange={handleChange} />
                </div>
                <div className="col-12 mt-4">
                    <button type="submit" className="btn btn-danger btn-lg">Save Changes</button>
                    <Link href="/admin" className="btn btn-link text-secondary ml-3">Cancel</Link>
                </div>
            </form>

            {session?.user?.role === 'super_admin' && (
                <div className="mt-5 p-4 border rounded bg-white shadow-sm">
                    <h3 className="text-danger">Initial Setup</h3>
                    <p className="text-muted">If you haven't seeded the data yet, click the button below:</p>
                    <button
                        onClick={async () => {
                            const loadToast = toast.loading('Seeding data...');
                            try {
                                const res = await fetch('/api/seed/banner');
                                const data = await res.json();
                                toast.success(data.message, { id: loadToast });
                                setTimeout(() => window.location.reload(), 1500);
                            } catch (err) {
                                toast.error('Seeding failed', { id: loadToast });
                            }
                        }}
                        className="btn btn-warning"
                    >
                        Seed Initial Data
                    </button>
                </div>
            )}
        </div>
    );
}
