import React from 'react';
import Link from 'next/link';

export default function CallToAction() {
    return (
        <section id="cta" className="call-to-action-section ptb-120 bg-overlay-black bg_img" style={{ backgroundImage: "url('/assets/images/bg/bg-3.png')" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 text-center">
                        <div className="call-to-action-content" data-aos="fade-up" data-aos-duration="1200">
                            <h2 className="title">JOIN THE LEGACY</h2>
                            <h2 className="sub-title">#UNLEASH YOUR POWER</h2>
                            <p>Whether you aim to compete, learn self-defense, or simply improve your health, Ushu Fighting School is your destination.</p>
                            <div className="call-to-action-btn">
                                <Link href="#contact" className="btn--base">Start Training <i className="fas fa-arrow-right ml-2"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
