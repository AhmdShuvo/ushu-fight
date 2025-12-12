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
                                <Link className="site-logo site-title" href="/">
                                    <img src="/assets/images/logo.png" alt="site-logo" />
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
                                                <li className={`menu_has_children ${activeSubMenus['home'] ? 'show' : ''}`}>
                                                    <a href="#" onClick={(e) => toggleSubMenu(e, 'home')}>HOME</a>
                                                    <ul className="sub-menu" style={{ display: activeSubMenus['home'] ? 'block' : '' }}>
                                                        <li><Link href="/">HOME ONE</Link></li>
                                                        <li><Link href="/index-two">HOME TWO</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/about">ABOUT US</Link></li>
                                                <li className={`menu_has_children ${activeSubMenus['training'] ? 'show' : ''}`}>
                                                    <a href="#" onClick={(e) => toggleSubMenu(e, 'training')}>TRAINING</a>
                                                    <ul className="sub-menu" style={{ display: activeSubMenus['training'] ? 'block' : '' }}>
                                                        <li><Link href="/training">TRAINING</Link></li>
                                                        <li><Link href="/training-details">TRAINING DETAILS</Link></li>
                                                    </ul>
                                                </li>
                                                <li className={`menu_has_children ${activeSubMenus['pages'] ? 'show' : ''}`}>
                                                    <a href="#" onClick={(e) => toggleSubMenu(e, 'pages')}>PAGES</a>
                                                    <ul className="sub-menu" style={{ display: activeSubMenus['pages'] ? 'block' : '' }}>
                                                        <li><Link href="/event">EVENTS</Link></li>
                                                        <li><Link href="/event-details">EVENT DETAILS</Link></li>
                                                        <li><Link href="/plan">PRICING PLAN</Link></li>
                                                        <li><Link href="/faq">FAQ</Link></li>
                                                        <li><Link href="/gallery">GALLERY</Link></li>
                                                        <li><Link href="/apply">APPLY</Link></li>
                                                        <li><Link href="/register">SIGN UP</Link></li>
                                                        <li><Link href="/login">SIGN IN</Link></li>
                                                        <li><Link href="/404">404 PAGE</Link></li>
                                                    </ul>
                                                </li>
                                                <li className={`menu_has_children ${activeSubMenus['masters'] ? 'show' : ''}`}>
                                                    <a href="#" onClick={(e) => toggleSubMenu(e, 'masters')}>MASTERS</a>
                                                    <ul className="sub-menu" style={{ display: activeSubMenus['masters'] ? 'block' : '' }}>
                                                        <li><Link href="/master">MASTERS</Link></li>
                                                        <li><Link href="/master-details">MASTERS DETAILS</Link></li>
                                                    </ul>
                                                </li>
                                                <li className={`menu_has_children ${activeSubMenus['news'] ? 'show' : ''}`}>
                                                    <a href="#" onClick={(e) => toggleSubMenu(e, 'news')}>NEWS</a>
                                                    <ul className="sub-menu" style={{ display: activeSubMenus['news'] ? 'block' : '' }}>
                                                        <li><Link href="/blog">NEWS</Link></li>
                                                        <li><Link href="/blog-classic">NEWS CLASSIC</Link></li>
                                                        <li><Link href="/blog-details">NEWS DETAILS</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/contact">CONTACT US</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/training">TRAINING</Link></li>
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
                                                <Link href="/contact" className="btn--base">GET IN TOUCH <i className="fas fa-arrow-right ml-2"></i></Link>
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
