'use client';

import Link from 'next/link';
import toast from 'react-hot-toast';
import { useSession, signOut } from 'next-auth/react';

export default function AdminDashboard() {
    const { data: session } = useSession();
    const sections = [
        { name: 'Banner', href: '/admin/banner', icon: 'fa-image' },
        { name: 'About', href: '/admin/about', icon: 'fa-info-circle' },
        { name: 'Training styles', href: '/admin/training', icon: 'fa-fist-raised' },
        { name: 'Trainers', href: '/admin/trainers', icon: 'fa-users' },
        { name: 'Why Choose Us', href: '/admin/features', icon: 'fa-star' },
        { name: 'Training Schedule', href: '/admin/schedule', icon: 'fa-calendar-alt' },
        { name: 'Latest News', href: '/admin/news', icon: 'fa-newspaper' },
        { name: 'Testimonials', href: '/admin/testimonials', icon: 'fa-quote-left' },
        { name: 'Gallery', href: '/admin/gallery', icon: 'fa-images' },
        { name: 'CTA (Join Legacy)', href: '/admin/cta', icon: 'fa-bullhorn' },
    ];

    return (
        <div className="p-5" style={{ background: '#f8f9fa', color: '#212529', minHeight: '100vh' }}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="text-dark m-0">Ushu Console</h1>
                    <div className="d-flex align-items-center">
                        <span className="me-3 text-muted">Signed in as <strong>{session?.user?.name}</strong> ({session?.user?.role})</span>
                        <button onClick={() => signOut()} className="btn btn-dark">Sign Out</button>
                    </div>
                </div>

                <div className="row g-4">
                    {sections.map((section) => (
                        <div key={section.name} className="col-md-3">
                            <Link href={section.href} className="text-decoration-none">
                                <div className="p-4 text-center border border-light shadow-sm rounded hover-bg-light transition bg-white">
                                    <i className={`fas ${section.icon} fa-3x mb-3 text-danger`}></i>
                                    <h3 className="text-dark h5">{section.name}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {session?.user?.role === 'super_admin' && (
                    <div className="mt-5 p-5 border border-danger rounded bg-white shadow-sm">
                        <h2 className="text-danger">System Tools</h2>
                        <p className="text-muted">Use the button below to reset all database content to the original template defaults.</p>
                        <button
                            onClick={async () => {
                                if (window.confirm("This will overwrite all your current changes. Are you sure?")) {
                                    const loading = toast.loading('Seeding database...');
                                    try {
                                        const res = await fetch('/api/seed/banner');
                                        const data = await res.json();
                                        toast.success(data.message, { id: loading });
                                        setTimeout(() => window.location.reload(), 1500);
                                    } catch (error) {
                                        toast.error('Seeding failed', { id: loading });
                                    }
                                }
                            }}
                            className="btn btn-outline-danger btn-lg"
                        >
                            Reset/Seed Entire Database
                        </button>
                    </div>
                )}
            </div>

            <style jsx>{`
                .hover-bg-light:hover {
                    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
                    border-color: #dc3545 !important;
                }
                .transition {
                    transition: all 0.3s ease;
                }
            `}</style>
        </div>
    );
}
