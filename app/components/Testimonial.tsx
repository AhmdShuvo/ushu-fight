"use client";
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Testimonial() {
    return (
        <section id="testimonial" className="client-section ptb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-header-wrapper">
                            <div className="section-header">
                                <h2 className="section-title">WARRIOR <span>TESTIMONIALS</span></h2>
                                <p>Hear from our students who have transformed their lives through the discipline and power of Ushu training.</p>
                            </div>
                            <div className="slider-nav-area">
                                <div className="slider-prev">
                                    <i className="fas fa-chevron-left"></i>
                                </div>
                                <div className="slider-next">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="client-area">
                    <div className="row justify-content-center align-items-end mb-30-none">
                        <div className="col-xl-8 col-lg-8 col-md-6 mb-30">
                            <div className="client-slider-area">
                                <Swiper
                                    modules={[Autoplay, Navigation]}
                                    slidesPerView={2}
                                    spaceBetween={30}
                                    loop={true}
                                    navigation={{
                                        nextEl: '.slider-next',
                                        prevEl: '.slider-prev',
                                    }}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                    }}
                                    speed={1000}
                                    breakpoints={{
                                        991: {
                                            slidesPerView: 1,
                                        },
                                        767: {
                                            slidesPerView: 1,
                                        },
                                        575: {
                                            slidesPerView: 1,
                                        },
                                    }}
                                    className="client-slider"
                                >
                                    <SwiperSlide>
                                        <div className="client-item">
                                            <div className="client-header">
                                                <div className="client-quote">
                                                    <img src="/assets/images/client/quote.png" alt="client" />
                                                </div>
                                                <div className="client-thumb">
                                                    <img src="/assets/images/client/client-1.png" alt="client" />
                                                </div>
                                            </div>
                                            <div className="client-content">
                                                <p>Ushu School has completely changed my perspective on fitness and discipline. The masters are incredibly knowledgeable and supportive.</p>
                                            </div>
                                            <div className="client-footer">
                                                <div className="client-footer-left">
                                                    <h4 className="title"><a href="#0">Sarah Jenkins</a></h4>
                                                    <span className="sub-title">Wushu Student</span>
                                                </div>
                                                <div className="client-footer-right">
                                                    <span className="ratings">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star active"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="client-item">
                                            <div className="client-header">
                                                <div className="client-quote">
                                                    <img src="/assets/images/client/quote.png" alt="client" />
                                                </div>
                                                <div className="client-thumb">
                                                    <img src="/assets/images/client/client-2.png" alt="client" />
                                                </div>
                                            </div>
                                            <div className="client-content">
                                                <p>Learning Sanda here has given me confidence and strength I never knew I had. Highly recommend this school to everyone.</p>
                                            </div>
                                            <div className="client-footer">
                                                <div className="client-footer-left">
                                                    <h4 className="title"><a href="#0">Mike Ross</a></h4>
                                                    <span className="sub-title">Sanda Practitioner</span>
                                                </div>
                                                <div className="client-footer-right">
                                                    <span className="ratings">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star active"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="client-right-thumb">
                                <img src="/assets/images/client/client-big.png" alt="client" />
                                <div className="client-thumb-overlay">
                                    <h4 className="title">MASTER UPPER CUT</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
