'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import InnerBanner from '../components/InnerBanner';

export default function Contact() {

    useEffect(() => {
        // Initialize Paroller when component mounts
        const initParoller = () => {
            if (typeof window !== 'undefined' && (window as any).jQuery && (window as any).jQuery.fn.paroller) {
                const $ = (window as any).jQuery;
                $('.my-paroller').paroller();
            } else {
                setTimeout(initParoller, 100);
            }
        };
        const timer = setTimeout(initParoller, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <InnerBanner title="CONTACT" subtitle="US" bgImage="/assets/images/bg/bg-12.png" activePage="Contact Us" />

            <section className="contact-item-section ptb-120">
                <div className="contact-element-one my-paroller" data-paroller-factor="0.2" data-paroller-type="foreground" data-paroller-direction="vertical">
                    <img src="/assets/images/element/element-1.png" alt="element" />
                </div>
                <div className="contact-element-two my-paroller" data-paroller-factor="0.2" data-paroller-type="foreground" data-paroller-direction="vertical">
                    <img src="/assets/images/element/element-2.png" alt="element" />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 text-center">
                            <div className="section-header" data-aos="fade-up" data-aos-duration="1200">
                                <h2 className="section-title">Ready to Get More <span>Information</span></h2>
                                <p>There were twelve rules in all, and they specified that fights should be "a fair stand-up ushu match" in a 24-foot-square or similar ring. Rounds were three minutes with one-minute rest.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mb-30-none">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="contact-item">
                                <div className="contact-icon-area">
                                    <div className="contact-icon">
                                        <img src="/assets/images/icon/icon-64.png" alt="icon" />
                                    </div>
                                </div>
                                <div className="contact-content">
                                    <h4 className="title">OFFICE ADRESS</h4>
                                    <p>350 5th Ave, New York, NY 10118350 <br /> <a href="https://www.google.com/maps/@23.7745978,90.4219535,15z" target="_blank">view map</a> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="contact-item">
                                <div className="contact-icon-area">
                                    <div className="contact-icon">
                                        <img src="/assets/images/icon/icon-65.png" alt="icon" />
                                    </div>
                                </div>
                                <div className="contact-content">
                                    <h4 className="title">TELEPHONE NUMBER</h4>
                                    <p>+1 (800)-123-4567 <br /> <a href="tel:11234567">call now</a> </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="contact-item">
                                <div className="contact-icon-area">
                                    <div className="contact-icon">
                                        <img src="/assets/images/icon/icon-66.png" alt="icon" />
                                    </div>
                                </div>
                                <div className="contact-content">
                                    <h4 className="title">SEND MAIL</h4>
                                    <p>example@email.com <br /> <a href="mailto:">send now</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="account-widget-section account-widget-section-two account-widget-section--style ptb-120">
                <div className="container">
                    <div className="row justify-content-center align-items-center mb-60-none">
                        <div className="col-xl-6 col-lg-6 mb-60">
                            <div className="account-widget-left">
                                <div className="section-header">
                                    <h2 className="section-title">Any Question? Feel
                                        Free to <span>Contact</span> with Us!</h2>
                                    <p>If you have any questions or need more information, please use the form below to send us a message There were twelve rules in all, and they specified that fights should be "a fair stand-up ushu match" in a 24-foot-square or similar ring. </p>
                                </div>
                                <div className="banner-widget">
                                    <div className="banner-widget-wrapper">
                                        <div className="banner-widget-left">
                                            <div className="banner-widget-thumb">
                                                <img src="/assets/images/element/element-9.png" alt="element" />
                                            </div>
                                        </div>
                                        {/* <div className="banner-widget-middle">
                                            <div className="banner-widget-content">
                                                <p>Join over <span>4,000+</span> students</p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="contact-social-area">
                                    <span>FOLLOW US -</span>
                                    <ul className="contact-social">
                                        <li><a href="#0"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#0"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#0"><i className="fab fa-google-plus-g"></i></a></li>
                                        <li><a href="#0"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-60">
                            <div className="account-widget-form-area">
                                <form className="account-widget-form">
                                    <div className="row justify-content-center mb-25-none">
                                        <div className="col-xl-12 form-group">
                                            <input type="text" className="form--control" placeholder="Your Name*" />
                                        </div>
                                        <div className="col-xl-12 form-group">
                                            <input type="email" className="form--control" placeholder="Your Email*" />
                                        </div>
                                        <div className="col-xl-12 form-group">
                                            <input type="text" className="form--control" placeholder="Your Phone*" />
                                        </div>
                                        <div className="col-xl-12 form-group">
                                            <textarea className="form--control" placeholder="Your Message*"></textarea>
                                        </div>
                                        <div className="col-xl-12 form-group">
                                            <button type="submit" className="btn--base">Send Now <i className="fas fa-arrow-right ml-2"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-section ptb-120">
                <div className="container">
                    <div className="row justify-content-center mb-5-none">
                        <div className="col-xl-12">
                            <div className="map-area">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.1899657893728!2d90.42380431666383!3d23.779746865573756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7499f257eab%3A0xe6b4b9eacea70f4a!2sManama+Tower!5e0!3m2!1sen!2sbd!4v1561542597668!5m2!1sen!2sbd" style={{ border: 0 }} allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
