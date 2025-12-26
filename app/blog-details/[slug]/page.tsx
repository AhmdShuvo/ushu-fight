import React from 'react';
import dbConnect from '@/lib/db';
import News from '@/models/News';
import InnerBanner from '../../components/InnerBanner';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    await dbConnect();

    let blog;
    try {
        // Try searching by ID if it's a valid ObjectId, otherwise search by slug
        if (slug.match(/^[0-9a-fA-F]{24}$/)) {
            blog = await News.findById(slug).lean();
        }

        if (!blog) {
            blog = await News.findOne({ slug }).lean();
        }
    } catch (err) {
        console.error("Error fetching blog:", err);
        return notFound();
    }

    if (!blog) {
        return notFound();
    }

    // Convert potential non-serializable fields if needed (lean handles most, but _id is an object)
    const blogData = JSON.parse(JSON.stringify(blog));

    return (
        <>
            <InnerBanner
                title={blogData.title}
                subtitle="DETAILS"
                bgImage="/assets/images/bg/bg-12.png"
                activePage="Blog Details"
            />

            <section className="blog-section blog-classic blog-details ptb-120">
                <div className="container">
                    <div className="row justify-content-center mb-30-none">
                        <div className="col-xl-8 col-lg-8 mb-30">
                            <div className="row justify-content-center mb-30-none">
                                <div className="col-xl-12 mb-30">
                                    <div className="blog-item">
                                        <div className="blog-thumb">
                                            <img src={`/assets/images/blog/${blogData.img}`} alt="blog" />
                                            <div className="blog-date">
                                                <span>{blogData.date}</span>
                                            </div>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-post-meta">
                                                <span className="user">By : {blogData.author}</span>
                                                <span className="category"><Link href="/">{blogData.category}</Link></span>
                                            </div>
                                            <h3 className="title">{blogData.title}</h3>
                                            <div className="blog-details-text text-white">
                                                {(blogData.content || '').split('\n').map((para: string, i: number) => (
                                                    <p key={i}>{para}</p>
                                                ))}
                                            </div>

                                            <div className="blog-tag-wrapper">
                                                <span>Tags:</span>
                                                <ul className="blog-footer-tag">
                                                    <li><Link href="/">Martial Arts</Link></li>
                                                    <li><Link href="/">Ushu</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 mb-30">
                            <div className="sidebar">
                                <div className="widget-box mb-30">
                                    <h4 className="widget-title">Search</h4>
                                    <div className="search-widget-box">
                                        <form className="search-form">
                                            <input type="text" name="search" className="form--control" placeholder="Search" />
                                            <button type="submit"><i className="fas fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="widget-box mb-30">
                                    <h4 className="widget-title">Categories</h4>
                                    <div className="category-widget-box">
                                        <ul className="category-list text-white">
                                            <li><Link href="/"><i className="fas fa-chevron-right"></i> Philosophy <span>(1)</span></Link></li>
                                            <li><Link href="/"><i className="fas fa-chevron-right"></i> Combat <span>(1)</span></Link></li>
                                            <li><Link href="/"><i className="fas fa-chevron-right"></i> Health <span>(1)</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget-box">
                                    <h4 className="widget-title">Tags</h4>
                                    <div className="tag-widget-box">
                                        <ul className="tag-list">
                                            <li><Link href="/">Wushu</Link></li>
                                            <li><Link href="/">Kung Fu</Link></li>
                                            <li><Link href="/">Training</Link></li>
                                            <li><Link href="/">Master</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
