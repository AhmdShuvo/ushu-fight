import React from 'react';

export default function Banner() {
    return (
        <section id="home" className="banner">
            <div className="slider-prev">
                <i className="fas fa-chevron-left"></i>
            </div>
            <div className="slider-next">
                <i className="fas fa-chevron-right"></i>
            </div>
            <div className="banner-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="banner-section banner-section-two">
                            <div className="banner-bg bg-overlay-black bg_img" data-background="/assets/images/bg/bg-22.png" style={{ backgroundImage: "url('/assets/images/bg/bg-22.png')" }}></div>
                            <div className="container-fluid">
                                <div className="row justify-content-center align-items-end mb-30-none">
                                    <div className="col-xl-12 col-lg-12 text-center mb-30">
                                        <div className="banner-content" data-aos="fade-up" data-aos-duration="1800">
                                            <span className="sub-title">#1 USHU SCHOOL IN BANGLADESH</span>
                                            <h1 className="title">BE A WORRIOR IN LIFE</h1>
                                            <h3 className="inner-title">MIND.BODY & SPIRIT IMPROVED</h3>
                                            <p>USHU SCHOOL IN BANGLADESH</p>
                                            <div className="banner-btn">
                                                <a href="apply.html" className="btn--base">Apply Now <i className="fas fa-arrow-right ml-2"></i></a>
                                                <a href="training.html" className="btn--base active">Training Classes <i className="fas fa-arrow-right ml-2"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="banner-section banner-section-two">
                            <div className="banner-bg bg-overlay-black bg_img" data-background="/assets/images/bg/bg-23.png" style={{ backgroundImage: "url('/assets/images/bg/bg-23.png')" }}></div>
                            <div className="container-fluid">
                                <div className="row justify-content-center align-items-end mb-30-none">
                                    <div className="col-xl-12 col-lg-12 text-center mb-30">
                                        <div className="banner-content" data-aos="fade-up" data-aos-duration="1800">
                                            <span className="sub-title">#1 USHU SCHOOL IN BANGLADESH</span>
                                            <h1 className="title">BE A WORRIOR IN LIFE</h1>
                                            <h3 className="inner-title">MIND.BODY & SPIRIT IMPROVED</h3>
                                            <p>USHU SCHOOL IN BANGLADESH</p>
                                            <div className="banner-btn">
                                                <a href="apply.html" className="btn--base">Apply Now <i className="fas fa-arrow-right ml-2"></i></a>
                                                <a href="training.html" className="btn--base active">Training Classes <i className="fas fa-arrow-right ml-2"></i></a>
                                            </div>
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
