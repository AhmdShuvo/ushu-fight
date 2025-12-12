"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubMenus, setActiveSubMenus] = useState<Record<string, boolean>>({});
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 500) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleSubMenu = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        // Only toggle on mobile or if needed. On desktop, hover usually handles it via CSS.
        // But if strictly following HTML structure and JS:
        setActiveSubMenus((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <header className={`header-section ${isSticky ? 'animated fadeInDown header-fixed' : ''}`}>
            <div className="header">
                <div className="header-bottom-area">
                    <div className="container-fluid">
                        <div className="header-menu-content">
                            <nav className="navbar navbar-expand-xl p-0">
                                <Link className="site-logo site-title d-flex align-items-center" href="/">
                                    <img src="/assets/images/logo-removebg-preview.png" alt="site-logo" style={{ maxHeight: '50px' }} />
                                    <span className="ml-2 font-weight-bold ml-2" style={{ color: '#000', fontSize: '24px', fontWeight: 'bold' }}>USHU</span>
                                </Link>
                                <button
                                    className="navbar-toggler ml-auto"
                                    type="button"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                >
                                    <span className="fas fa-bars"></span>
                                </button>
                                <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                                    <ul className="navbar-nav main-menu mr-auto">
                                        <li className={`menu_has_children ${activeSubMenus['menu'] ? 'show' : ''}`}>
                                            <a href="#" onClick={(e) => toggleSubMenu(e, 'menu')}>
                                                <div className="toggle-menu">
                                                    <div className="toggle-wrapper">
                                                        <div className="toggle-bar">
                                                            <div className="toggle">
                                                                <div className="element section--bg"></div>
                                                            </div>
                                                            <div className="toggle">
                                                                <div className="element"></div>
                                                            </div>
                                                        </div>
                                                        <div className="toggle-bar">
                                                            <div className="toggle">
                                                                <div className="element"></div>
                                                            </div>
                                                            <div className="toggle">
                                                                <div className="element"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    MENU
                                                </div>
                                            </a>
                                            <ul className="sub-menu" style={{ display: activeSubMenus['menu'] ? 'block' : '' }}>
                                                <li><Link href="#home">HOME</Link></li>
                                                <li><Link href="#about">ABOUT US</Link></li>
                                                <li><Link href="#training">TRAINING</Link></li>
                                                <li><Link href="#trainer">MASTERS</Link></li>
                                                <li><Link href="#schedule">SCHEDULE</Link></li>
                                                <li><Link href="#feature">FEATURES</Link></li>
                                                <li><Link href="#blog">NEWS</Link></li>
                                                <li><Link href="#contact">CONTACT US</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="#training">TRAINING</Link></li>
                                    </ul>
                                    <div className="header-right">
                                        <div className="header-links-area">
                                            <ul className="header-links">
                                                <li>
                                                    <h5 className="title">Call Us Free</h5>
                                                    <span className="sub-title"><a href="tel:+65325936523">+65 3259 36523</a></span>
                                                </li>
                                                <li>
                                                    <h5 className="title">Address</h5>
                                                    <span className="sub-title">123, New Lenox Chicago, IL 60606</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="header-action-area">
                                            <div className="header-action">
                                                <Link href="#contact" className="btn--base">GET IN TOUCH <i className="fas fa-arrow-right ml-2"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
