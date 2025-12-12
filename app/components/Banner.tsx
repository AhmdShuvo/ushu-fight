import React from 'react';
import Link from 'next/link';

export default function Banner() {
    return (
        <section id="home" className="banner-section bg_img" style={{ backgroundImage: "url('/assets/images/bg/bg-5.png')" }}>
            <div className="banner-element">
                <img src="/assets/images/element/element-7.png" alt="element" />
            </div>
            <div className="banner-element-two">
                <img src="/assets/images/element/element-26.png" alt="element" />
            </div>
            <div className="banner-thumb-area">
                <div className="banner-thumb-element-one">
                    <img src="/assets/images/element/element-11.png" alt="element" />
                </div>
                <div className="banner-thumb-element-two">
                    <img src="/assets/images/element/element-12.png" alt="element" />
                </div>
                <div className="banner-thumb-element-three">
                    <img src="/assets/images/element/element-13.png" alt="element" />
                </div>
                <div className="banner-thumb" data-aos="fade-up" data-aos-duration="2500">
                    <img src="/assets/images/element/element-8.png" alt="element" />
                </div>
            </div>
            <div className="container-fluid">
                <div className="row align-items-end mb-30-none">
                    <div className="col-xl-6 col-lg-12 mb-30">
                        <div className="banner-content" data-aos="fade-right" data-aos-duration="1800">
                            <span className="sub-title">WELCOME TO USHU</span>
                            <h1 className="title">MASTER THE ART OF</h1>
                            <h3 className="inner-title">WUSHU FIGHTING</h3>
                            <p>Embark on a journey of discipline and strength. Our Ushu school combines traditional Kung Fu wisdom with modern combat techniques. Discover your inner warrior and achieve physical and mental excellence.</p>
                            <div className="banner-arrow">
                                <img src="/assets/images/element/element-10.png" alt="element" />
                            </div>
                            <div className="banner-widget">
                                <div className="banner-widget-wrapper">
                                    <div className="banner-widget-left">
                                        <div className="banner-widget-thumb">
                                            <img src="/assets/images/element/element-9.png" alt="element" />
                                        </div>
                                    </div>
                                    <div className="banner-widget-middle">
                                        <div className="banner-widget-content">
                                            <p className="text-white">Join over <span>4,000+</span> warriors</p>
                                        </div>
                                    </div>
                                    <div className="banner-widget-right">
                                        <div className="banner-widget-btn">
                                            <Link href="#contact" className="btn--base">Apply Now <i className="fas fa-arrow-right ml-2"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
