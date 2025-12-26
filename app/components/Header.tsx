"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const { data: session } = useSession();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubMenus, setActiveSubMenus] = useState<Record<string, boolean>>({});
    const [isSticky, setIsSticky] = useState(false);
    const pathname = usePathname();

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
        setActiveSubMenus((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const isActive = (path: string) => pathname === path ? 'active' : '';

    const getHeaderClass = () => {
        let className = "header-section header-section-two";
        if (pathname === '/contact') {
            className += " header-section-three";
        }
        if (isSticky) {
            className += " animated fadeInDown header-fixed";
        }
        return className;
    };

    return (
        <header className={getHeaderClass()}>
            <div className="header">
                <div className="header-bottom-area">
                    <div className="container-fluid">
                        <div className="header-menu-content">
                            <nav className="navbar navbar-expand-xl p-0">
                                <Link className="site-logo site-title d-block d-xl-none" href="/">
                                    <img src="/assets/images/logo-removebg-preview.png" alt="site-logo" />
                                </Link>
                                <button className="navbar-toggler ml-auto" type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="fas fa-bars"></span>
                                </button>
                                <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                                    <ul className="navbar-nav main-menu ml-auto mr-auto">
                                        <li className={isActive('/')}><Link href="/">HOME</Link></li>
                                        <li className={isActive('/about')}><Link href="/about">ABOUT US</Link></li>
                                        <li className={isActive('/training')}><Link href="/training">OUR EXPERT TRAINING</Link></li>
                                        <li>
                                            <Link className="site-logo site-title d-none d-xl-flex align-items-center" href="/">
                                                <img src="/assets/images/logo-removebg-preview.png" alt="site-logo" style={{ maxWidth: '100px' }} />
                                                <span className="logo-text text-white font-weight-bold ml-2" style={{ fontSize: '24px' }}>USHU</span>
                                            </Link>
                                        </li>
                                        <li className={pathname.startsWith('/events') || pathname.startsWith('/event-details') ? 'active' : ''}><Link href="/events">EVENTS</Link></li>
                                        <li className={isActive('/gallery')}><Link href="/gallery">GALLERY</Link></li>
                                        <li className={isActive('/contact')}><Link href="/contact">CONTACT US</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
