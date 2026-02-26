import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="contact" className="footer-section footer-section-two pt-80 pb-30" style={{ backgroundColor: '#fff', color: '#333', borderTop: '1px solid #eee' }}>
            <div className="container">
                <div className="row">
                    {/* Left Side - Socials & Quick Links */}
                    <div className="col-lg-6 col-md-12 mb-30 d-flex flex-column justify-content-center">
                        <div className="footer-widget mb-4">
                            <ul className="footer-social" style={{ display: 'flex', gap: '15px', padding: 0, margin: '0 0 20px 0', listStyle: 'none' }}>
                                <li><a href="#0" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#3b5998', color: '#fff' }}><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#0" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: '#fff' }}><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#0" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#1da1f2', color: '#fff' }}><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#0" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#ff0000', color: '#fff' }}><i className="fab fa-youtube"></i></a></li>
                                <li><a href="#0" style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#25d366', color: '#fff' }}><i className="fab fa-whatsapp"></i></a></li>
                            </ul>
                        </div>

                        <div className="footer-widget d-flex align-items-center">
                            <h5 style={{ margin: '0 20px 0 0', fontWeight: 'bold' }}>Quick Links:</h5>
                            <div className="quick-links-logos d-flex flex-wrap" style={{ gap: '15px', alignItems: 'center' }}>
                                <Link href="#" style={{ display: 'inline-block' }} title="Quick Link">
                                    <img src="/assets/images/quicklinks/Picture4.png" alt="Quick Link" style={{ width: '40px', height: 'auto', objectFit: 'contain' }} />
                                </Link>
                                <Link href="#" style={{ display: 'inline-block' }} title="Quick Link">
                                    <img src="/assets/images/quicklinks/Picture5.png" alt="Quick Link" style={{ width: '40px', height: 'auto', objectFit: 'contain' }} />
                                </Link>
                                <Link href="#" style={{ display: 'inline-block' }} title="Quick Link">
                                    <img src="/assets/images/quicklinks/Picture6.png" alt="Quick Link" style={{ width: '40px', height: 'auto', objectFit: 'contain' }} />
                                </Link>
                                <Link href="#" style={{ display: 'inline-block' }} title="Quick Link">
                                    <img src="/assets/images/quicklinks/Picture7.png" alt="Quick Link" style={{ width: '40px', height: 'auto', objectFit: 'contain' }} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact US */}
                    <div className="col-lg-6 col-md-12 mb-30" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className="footer-widget text-lg-right">
                            <h5 className="title" style={{ fontWeight: 'bold', fontStyle: 'italic', marginBottom: '10px', color: '#000' }}>CONTACT US</h5>
                            <div className="contact-details" style={{ lineHeight: '1.8', color: '#000', fontSize: '18px' }}>
                                <p style={{ margin: 0, color: '#000' }}>Room: 32 (2nd Floor), National Stadium,</p>
                                <p style={{ margin: 0, color: '#000' }}>Purana Paltan, Dhaka-1000, Bangladesh</p>
                                <p style={{ margin: 0, color: '#000' }}>Email : wushubd@gmail.com</p>
                                <p style={{ margin: 0, color: '#000' }}>Telephone : +88 02 9565503</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright area could be optional based on wireframe, but keeping it simple */}
        </footer>
    );
}
