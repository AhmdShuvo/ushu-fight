import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="contact" className="footer-section footer-section-two pt-120">
            <div className="footer-bg">
                <img src="/assets/images/bg/bg-4.png" alt="bg" />
            </div>
            <div className="container">
                <div className="row mb-30-none">
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link className="site-logo site-title d-flex align-items-center" href="/">
                                    <img src="/assets/images/logo-removebg-preview.png" alt="site-logo" style={{ maxWidth: '100px' }} />
                                    <span className="logo-text text-white font-weight-bold ml-2" style={{ fontSize: '24px' }}>USHU</span>
                                </Link>
                            </div>
                            <p>Fight Federation has specialized in martial arts since 1986 and has one of the most innovative programs in the nation. Fight Federation has specialized in martial arts since 1986 and has one of the most</p>
                            <ul className="footer-social">
                                <li><a href="#0"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#0"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#0"><i className="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#0"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                        <div className="footer-widget">
                            <h4 className="title">Opening Hours</h4>
                            <ul className="footer-list">
                                <li>Monday : 11am-7pm</li>
                                <li>Tuesday-Friday : 11am-8pm</li>
                                <li>Saturday : 10am-6pm</li>
                                <li>Sunday : 11am-6pm</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
                        <div className="footer-widget">
                            <h4 className="title">Contact us</h4>
                            <ul className="footer-list">
                                <li>350 5th Ave, New York, NY 10118350</li>
                                <li>5th Ave, New York, NY 10118</li>
                                <li><span>Email :</span> example@email.com</li>
                                <li><span>Telephone :</span> +1 (800)-123-4567</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 mb-30">
                        <div className="footer-widget">
                            <h4 className="title">Gallery</h4>
                            <div className="footer-gallery-area">
                                <div className="footer-gallery-wrapper">
                                    <div className="footer-gallery-thumb">
                                        <img src="/assets/images/gallery/gallery-small-1.png" alt="gallery" />
                                        <div className="footer-gallery-overlay">
                                            <a href="#0"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="footer-gallery-thumb">
                                        <img src="/assets/images/gallery/gallery-small-2.png" alt="gallery" />
                                        <div className="footer-gallery-overlay">
                                            <a href="#0"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="footer-gallery-thumb">
                                        <img src="/assets/images/gallery/gallery-small-2.png" alt="gallery" />
                                        <div className="footer-gallery-overlay">
                                            <a href="#0"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                    <div className="footer-gallery-thumb">
                                        <img src="/assets/images/gallery/gallery-small-3.png" alt="gallery" />
                                        <div className="footer-gallery-overlay">
                                            <a href="#0"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrapper">
                <div className="row justify-content-center">
                    <div className="col-xl-12 text-center">
                        <div className="copyright-area">
                            <p>Copyright {new Date().getFullYear()} USHU. Developed By Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
