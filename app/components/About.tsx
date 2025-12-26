import React from 'react';
import Link from 'next/link';

export default function About() {
    return (
        <section id="about" className="about-section pt-120 bg-overlay-black bg_img" style={{ backgroundImage: "url('/assets/images/bg/bg-1.png')" }}>
            <div className="section-logo-text">
                <span className="title">USHU</span>
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
                                    <a className="video-icon" data-rel="lightcase:myCollection" href="https://www.youtube.com/embed/YDErI8Lphho">
                                        <i className="fas fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 mb-30">
                        <div className="about-content-area">
                            <div className="section-header white">
                                <h2 className="section-title">ABOUT <span>ushu</span> Federation</h2>
                                <p>Fight Federation has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.</p>
                            </div>
                            <div className="about-item-area">
                                <div className="about-item mb-30">
                                    <div className="about-icon">
                                        <img src="/assets/images/icon/icon-1.png" alt="icon" />
                                    </div>
                                    <div className="about-content">
                                        <h3 className="title">FREE FITNESS TRAINING</h3>
                                        <p>We teach martial arts because we love it — not because we want to make money on you. Unlike other martial arts Federations.</p>
                                    </div>
                                </div>
                                <div className="about-item mb-30">
                                    <div className="about-icon">
                                        <img src="/assets/images/icon/icon-2.png" alt="icon" />
                                    </div>
                                    <div className="about-content">
                                        <h3 className="title">CARDIO AND STRENGTH</h3>
                                        <p>We teach martial arts because we love it — not because we want to make money on you. Unlike other martial arts Federations.</p>
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
    );
}
