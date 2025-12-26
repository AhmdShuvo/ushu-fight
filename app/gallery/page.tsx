'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import InnerBanner from '../components/InnerBanner';

export default function GalleryPage() {

    useEffect(() => {
        // Initialize Isotope when component mounts
        const initIsotope = () => {
            if (typeof window !== 'undefined' && (window as any).jQuery && (window as any).jQuery.fn.isotope) {
                const $ = (window as any).jQuery;
                var $grid = $('.grid').isotope({
                    itemSelector: '.grid-item',
                    masonry: {
                        columnWidth: '.grid-item'
                    }
                });
                // filter items on button click
                $('.filter-btn-group').off('click', 'button').on('click', 'button', function (this: HTMLElement) {
                    var filterValue = $(this).attr('data-filter');
                    $grid.isotope({ filter: filterValue });
                    $(this).addClass('active').siblings().removeClass('active');
                });
            } else {
                // Retry if jQuery or Isotope not ready yet (e.g. initial load race condition)
                setTimeout(initIsotope, 100);
            }
        };

        // Delay slightly to ensure DOM is ready and scripts might be loading
        const timer = setTimeout(initIsotope, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <InnerBanner title="SEE OUR" subtitle="GALLERY" bgImage="/assets/images/bg/bg-12.png" activePage="Gallery" />
            <section className="gallery-section ptb-120">
                <div className="container-fluid p-0">
                    <div className="row justify-content-center">
                        <div className="col-xl-4 col-lg-8 col-md-6 col-sm-8 text-center">
                            <div className="section-header" data-aos="fade-up" data-aos-duration="1200">
                                <h2 className="section-title">SEE OUR <span>GALLERY</span></h2>
                                <p>Fight Federation has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-filter-wrapper">
                        <div className="button-group filter-btn-group">
                            <button className="active" data-filter="*">All</button>
                            <button data-filter=".running">Running</button>
                            <button data-filter=".ushu">Shadow ushu</button>
                            <button data-filter=".trainer">Strength Trainer</button>
                            <button data-filter=".others">Others</button>
                        </div>
                        <div className="grid">
                            <div className="grid-item running trainer">
                                <div className="gallery-item">
                                    <div className="gallery-thumb">
                                        <img src="/assets/images/gallery/gallery-big-1.png" alt="gallery" />
                                        <div className="gallery-overlay">
                                            <div className="gallery-content">
                                                <h4 className="title">Developing your mind to focus yourself</h4>
                                                <div className="gallery-icon">
                                                    <a className="img-popup" data-rel="lightcase:myCollection" href="/assets/images/gallery/gallery-big-1.png">
                                                        <img src="/assets/images/icon/icon-47.png" alt="gallery" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item ushu trainer">
                                <div className="gallery-item">
                                    <div className="gallery-thumb">
                                        <img src="/assets/images/gallery/gallery-big-2.png" alt="gallery" />
                                        <div className="gallery-overlay">
                                            <div className="gallery-content">
                                                <h4 className="title">Developing your mind to focus yourself</h4>
                                                <div className="gallery-icon">
                                                    <a className="img-popup" data-rel="lightcase:myCollection" href="/assets/images/gallery/gallery-big-2.png">
                                                        <img src="/assets/images/icon/icon-47.png" alt="gallery" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item others running">
                                <div className="gallery-item">
                                    <div className="gallery-thumb">
                                        <img src="/assets/images/gallery/gallery-big-3.png" alt="gallery" />
                                        <div className="gallery-overlay">
                                            <div className="gallery-content">
                                                <h4 className="title">Developing your mind to focus yourself</h4>
                                                <div className="gallery-icon">
                                                    <a className="img-popup" data-rel="lightcase:myCollection" href="/assets/images/gallery/gallery-big-3.png">
                                                        <img src="/assets/images/icon/icon-47.png" alt="gallery" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item ushu">
                                <div className="gallery-item">
                                    <div className="gallery-thumb">
                                        <img src="/assets/images/gallery/gallery-big-6.png" alt="gallery" />
                                        <div className="gallery-overlay">
                                            <div className="gallery-content">
                                                <h4 className="title">Developing your mind to focus yourself</h4>
                                                <div className="gallery-icon">
                                                    <a className="img-popup" data-rel="lightcase:myCollection" href="/assets/images/gallery/gallery-big-6.png">
                                                        <img src="/assets/images/icon/icon-47.png" alt="gallery" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item trainer">
                                <div className="gallery-item">
                                    <div className="gallery-thumb">
                                        <img src="/assets/images/gallery/gallery-big-4.png" alt="gallery" />
                                        <div className="gallery-overlay">
                                            <div className="gallery-content">
                                                <h4 className="title">Developing your mind to focus yourself</h4>
                                                <div className="gallery-icon">
                                                    <a className="img-popup" data-rel="lightcase:myCollection" href="/assets/images/gallery/gallery-big-4.png">
                                                        <img src="/assets/images/icon/icon-47.png" alt="gallery" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item running">
                                <div className="gallery-item">
                                    <div className="gallery-thumb">
                                        <img src="/assets/images/gallery/gallery-big-5.png" alt="gallery" />
                                        <div className="gallery-overlay">
                                            <div className="gallery-content">
                                                <h4 className="title">Developing your mind to focus yourself</h4>
                                                <div className="gallery-icon">
                                                    <a className="img-popup" data-rel="lightcase:myCollection" href="/assets/images/gallery/gallery-big-5.png">
                                                        <img src="/assets/images/icon/icon-47.png" alt="gallery" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className="page-item prev">
                                <a className="page-link" href="#" rel="prev" aria-label="Prev &raquo;">PREV</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">01</a></li>
                            <li className="page-item active" aria-current="page"><span className="page-link">02</span></li>
                            <li className="page-item"><a className="page-link" href="#">03</a></li>
                            <li className="page-item"><a className="page-link" href="#">04</a></li>
                            <li className="page-item"><a className="page-link" href="#">05</a></li>
                            <li className="page-item next">
                                <a className="page-link" href="#" rel="next" aria-label="Next &raquo;">NEXT</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    );
}
