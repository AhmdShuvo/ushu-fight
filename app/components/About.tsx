"use client";
import React, { useState } from 'react';
import Link from 'next/link';
// We will simply link for now, or implement a modal later if needed.
// Since we don't have lightcase, we can maybe leave the href as is or use a simple state to show an iframe.

export default function About() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className="about-section pt-120 bg-overlay-black bg_img" style={{ backgroundImage: "url('/assets/images/bg/bg-1.png')" }}>
                <div className="section-logo-text">
                    <span className="title">SWORD</span>
                </div>
                <div className="container">
                    <div className="row justify-content-center mb-30-none">
                        <div className="col-xl-6 col-lg-12 mb-30">
                            <div className="about-thumb">
                                <img src="/assets/images/about.png" alt="about" />
                                <div className="about-thumb-content">
                                    <div className="signature-thumb">
                                        <img src="/assets/images/signature.png" alt="signature" />
                                    </div>
                                    <div className="signature-content">
                                        <span className="title">DIRECTOR / INSTRUCTOR</span>
                                    </div>
                                </div>
                                <div className="about-thumb-video">
                                    <div className="video-main">
                                        <div className="promo-video">
                                            <div className="waves-block">
                                                <div className="waves wave-1"></div>
                                                <div className="waves wave-2"></div>
                                                <div className="waves wave-3"></div>
                                            </div>
                                        </div>
                                        <a className="video-icon" onClick={(e) => { e.preventDefault(); setIsVideoOpen(true); }} href="#">
                                            <i className="fas fa-play"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 mb-30">
                            <div className="about-content-area">
                                <div className="section-header white">
                                    <h2 className="section-title">ABOUT <span>BOXING</span> SCHOOL</h2>
                                    <p>Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.</p>
                                </div>
                                <div className="about-item-area">
                                    <div className="about-item mb-30">
                                        <div className="about-icon">
                                            <img src="/assets/images/icon/icon-1.png" alt="icon" />
                                        </div>
                                        <div className="about-content">
                                            <h3 className="title">FREE FITNESS TRAINING</h3>
                                            <p>We teach martial arts because we love it — not because we want to make money on you. Unlike other martial arts schools.</p>
                                        </div>
                                    </div>
                                    <div className="about-item mb-30">
                                        <div className="about-icon">
                                            <img src="/assets/images/icon/icon-2.png" alt="icon" />
                                        </div>
                                        <div className="about-content">
                                            <h3 className="title">CARDIO AND STRENGTH</h3>
                                            <p>We teach martial arts because we love it — not because we want to make money on you. Unlike other martial arts schools.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-btn">
                                    <Link href="/about" className="btn--base">Read More <i className="fas fa-arrow-right ml-2"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isVideoOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={() => setIsVideoOpen(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999 }}>
                    <div className="relative w-full max-w-4xl" style={{ position: 'relative', margin: 'auto' }}>
                        <button className="absolute top-0 right-0 text-white text-2xl p-2" onClick={() => setIsVideoOpen(false)} style={{ position: 'absolute', top: '-40px', right: '0', color: '#fff', fontSize: '30px', background: 'none', border: 'none', cursor: 'pointer' }}>&times;</button>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                width="100%"
                                height="500px"
                                src="https://www.youtube.com/embed/YDErI8Lphho?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
