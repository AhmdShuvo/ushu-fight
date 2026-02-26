'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {
    const [isMounted, setIsMounted] = useState(false);
    const [bannersData, setBannersData] = useState<any[]>([]);

    useEffect(() => {
        setIsMounted(true);
        fetch('/api/banner')
            .then(res => res.json())
            .then(data => {
                if (data.banners) {
                    setBannersData(data.banners);
                }
            })
            .catch(err => console.error("Could not load banner", err));
    }, []);

    useEffect(() => {
        if (isMounted && bannersData.length > 0) {
            const initBannerSwiper = () => {
                // @ts-ignore
                if (typeof window !== 'undefined' && window.Swiper) {
                    // @ts-ignore
                    new window.Swiper('.banner-slider', {
                        effect: 'coverflow',
                        grabCursor: true,
                        centeredSlides: true,
                        slidesPerView: 3,
                        loop: true,
                        coverflowEffect: {
                            rotate: 20,
                            stretch: 0,
                            depth: 200,
                            modifier: 1,
                            slideShadows: true,
                        },
                        navigation: {
                            nextEl: '.slider-next',
                            prevEl: '.slider-prev',
                        },
                        autoplay: {
                            speeds: 3000,
                            delay: 4000,
                        },
                        speed: 1000,
                        breakpoints: {
                            991: { slidesPerView: 2, effect: 'coverflow' },
                            767: { slidesPerView: 1, effect: 'slide' },
                            575: { slidesPerView: 1, effect: 'slide' },
                        }
                    });
                } else {
                    setTimeout(initBannerSwiper, 100);
                }
            };
            setTimeout(initBannerSwiper, 100); // initial delay for DOM render
        }
    }, [bannersData, isMounted]);

    if (!isMounted || bannersData.length === 0) {
        return <section id="home" className="banner ptb-120 text-center text-white" style={{ minHeight: '400px', backgroundColor: '#000' }}></section>;
    }

    return (
        <section id="home" className="banner" style={{ position: 'relative', zIndex: 1, backgroundColor: '#080808', overflow: 'hidden', padding: '40px 0' }}>
            <div className="slider-prev">
                <i className="fas fa-chevron-left"></i>
            </div>
            <div className="slider-next">
                <i className="fas fa-chevron-right"></i>
            </div>
            <div className="banner-slider">
                <div className="swiper-wrapper">
                    {bannersData.map((banner, index) => (
                        <div className="swiper-slide" key={index}>
                            <div className="banner-section banner-section-two" style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', minHeight: '400px' }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)' }} />
                                    {banner.backgroundImage && (
                                        <Image src={banner.backgroundImage} alt="banner-bg" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority={index === 0} />
                                    )}
                                </div>
                                <div className="container-fluid h-100">
                                    <div className="row justify-content-center align-items-center h-100 mb-30-none">
                                        <div className="col-xl-12 col-lg-12 text-center mb-30 px-4 pt-4">
                                            <div className="banner-content" data-aos="fade-up" data-aos-duration="1800">
                                                <span className="sub-title" style={{ fontSize: '14px', letterSpacing: '1px' }}>{banner.subTitle}</span>
                                                <h1 className="title" style={{ fontSize: '32px', marginBottom: '15px' }}>{banner.title}</h1>
                                                <h3 className="inner-title" style={{ fontSize: '20px', marginBottom: '20px' }}>{banner.innerTitle}</h3>
                                                <p style={{ fontSize: '14px', marginBottom: '30px' }}>{banner.description}</p>
                                                <div className="banner-btn" style={{ gap: '10px' }}>
                                                    <Link href={banner.buttonLink || "/apply"} className="btn--base" style={{ padding: '8px 20px', fontSize: '12px' }}>{banner.buttonText || "Apply Now"} <i className="fas fa-arrow-right ml-1"></i></Link>
                                                    <Link href="/training" className="btn--base active" style={{ padding: '8px 20px', fontSize: '12px' }}>Training Classes <i className="fas fa-arrow-right ml-1"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
