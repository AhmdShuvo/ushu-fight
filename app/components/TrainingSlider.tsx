'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function TrainingSlider({ styles }: { styles: any[] }) {
    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
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
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 1,
                },
            }}
            className="training-slider"
        >
            {styles.map((style, index) => (
                <SwiperSlide key={index}>
                    <div className="training-item text-center">
                        <div className="training-icon">
                            <img src={style.icon} alt="icon" />
                        </div>
                        <div className="training-content">
                            <h3 className="title"><Link href="#training">{style.title.toUpperCase()}</Link></h3>
                            <p>{style.description}</p>
                        </div>
                        <div className="training-overlay bg-overlay-base bg_img" style={{ backgroundImage: `url('${style.bgImage}')` }}>
                            <div className="training-overlay-content">
                                <h3 className="title"><Link href="/training-details">{style.title.toUpperCase()} TRAINING</Link></h3>
                                <div className="training-btn">
                                    <Link href="/training-details" className="btn--base active">Training Details <i className="fas fa-arrow-right ml-2"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
