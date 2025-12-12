"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer-section pt-120">
            <div className="footer-bg">
                <img src="/assets/images/bg/bg-4.png" alt="bg" />
            </div>
            <div className="footer-element">
                <img src="/assets/images/element/element-6.png" alt="element" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="footer-top">
                            <div className="footer-logo">
                                <Link href="/" className="site-logo"><img src="/assets/images/logo-white.png" alt="logo" /></Link>
                            </div>
                            <ul className="footer-social">
                                <li><a href="#0"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#0"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#0"><i className="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#0"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="footer-widget">
                            <form className="subscribe-form">
                                <label className="subscribe-icon"><i className="las la-envelope"></i></label>
                                <input type="text" className="form--control" placeholder="Enter Your Email Address" />
                                <button type="submit" className="btn--base">GET ALART</button>
                            </form>
                            <ul className="footer-list">
                                <li><Link href="/">HOME</Link></li>
                                <li><Link href="/about">ABOUT US</Link></li>
                                <li><Link href="/training">TRAINING</Link></li>
                                <li><Link href="/master">MASTER</Link></li>
                                <li><Link href="/blog">NEWS</Link></li>
                                <li><Link href="/event">EVENT</Link></li>
                                <li><Link href="/contact">CONTACT US</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-8 text-center">
                        <div className="copyright-area">
                            <p>Copyright 2024 Sword. Designed By Theme IM</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
