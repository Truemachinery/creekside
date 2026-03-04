import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../data/siteContent';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--open' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="navbar__inner container">
                {/* Spacer to balance the toggle on the right */}
                <div className="navbar__spacer" />

                {/* Centered Logo */}
                <Link to="/" className="navbar__logo">
                    <img src="/logo.png" alt="Creekside MX" className="navbar__logo-img" />
                </Link>

                {/* Custom Menu Toggle - Right side */}
                <button
                    className={`navbar__toggle ${menuOpen ? 'navbar__toggle--active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    <div className="navbar__toggle-icon">
                        <span className="navbar__toggle-bar navbar__toggle-bar--1" />
                        <span className="navbar__toggle-bar navbar__toggle-bar--2" />
                        <span className="navbar__toggle-bar navbar__toggle-bar--3" />
                        <span className="navbar__toggle-dot" />
                    </div>
                </button>
            </div>

            {/* Fullscreen Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="navbar__overlay"
                        initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
                        animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
                        exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="navbar__menu">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <Link
                                        to={link.path}
                                        className={`navbar__menu-link ${location.pathname === link.path ? 'navbar__menu-link--active' : ''}`}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
