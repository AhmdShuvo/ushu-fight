"use client";
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Training() {
    return (
        <section id="training" className="training-section ptb-120">
            <div className="training-element-one my-paroller" data-paroller-factor="0.08" data-paroller-type="foreground" data-paroller-direction="horizontal">
                <img src="/assets/images/element/element-1.png" alt="element" />
            </div>
            <div className="training-element-two my-paroller" data-paroller-factor="0.08" data-paroller-type="foreground" data-paroller-direction="horizontal">
                <img src="/assets/images/element/element-2.png" alt="element" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-header-wrapper">
                            <div className="section-header">
                                <h2 className="section-title">OUR <span>WUSHU</span> STYLES</h2>
                                <p>Discover the diverse world of Wushu. From explosive Sanda sparring to elegant Taolu forms, we have a specialized program for every aspiring warrior.</p>
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
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="training-slider-area">
                            <Swiper
                                modules={[Autoplay, Navigation, Pagination]}
                                slidesPerView={3}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
                                }}
                                speed={1000}
                                navigation={{
                                    nextEl: '.slider-next',
                                    prevEl: '.slider-prev',
                                }}
                                breakpoints={{
                                    991: {
                                        slidesPerView: 2,
                                    },
                                    767: {
                                        slidesPerView: 2,
                                    },
                                    575: {
                                        slidesPerView: 1,
                                    },
                                }}
                                className="training-slider"
                            >
                                {['Sanda Combat', 'Shaolin Styles', 'Taolu Forms'].map((title, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="training-item text-center">
                                            <div className="training-icon">
                                                <img src={`/assets/images/icon/icon-${3 + index}.png`} alt="icon" />
                                            </div>
                                            <div className="training-content">
                                                <h3 className="title"><Link href="#training">{title.toUpperCase()}</Link></h3>
                                                <p>Master the ancient techniques and internal power cultivation of {title}.</p>
                                            </div>
                                            <div className="training-overlay bg-overlay-base bg_img" style={{ backgroundImage: "url('/assets/images/training/training-1.png')" }}>
                                                <div className="training-overlay-content">
                                                    <h3 className="title"><Link href="/training-details">{title.toUpperCase()} TRAINING</Link></h3>
                                                    <div className="training-btn">
                                                        <Link href="/training-details" className="btn--base active">Training Details <i className="fas fa-arrow-right ml-2"></i></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
