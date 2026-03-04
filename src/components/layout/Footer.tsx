import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { siteContent, navLinks } from '../../data/siteContent';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__col">
                        <div className="footer__logo">
                            <img src="/logo.png" alt="Creekside MX" className="footer__logo-img" />
                        </div>
                        <p className="footer__tagline">{siteContent.tagline}</p>
                        <div className="footer__social">
                            <a
                                href={siteContent.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="footer__social-link"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href={siteContent.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="footer__social-link"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href={siteContent.social.youtube}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="footer__social-link"
                            >
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Quick Links</h4>
                        <ul className="footer__links">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link to={link.path} className="footer__link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Hours */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Track Hours</h4>
                        <p className="footer__hours-days">{siteContent.hours.days}</p>
                        <p className="footer__hours-time">{siteContent.hours.time}</p>
                        <p className="footer__hours-note">{siteContent.hours.note}</p>
                        <div className="footer__pricing">
                            <span className="footer__price">
                                ${siteContent.pricing.rider}
                            </span>
                            <span className="footer__price-label">Rider</span>
                            <span className="footer__price-sep">|</span>
                            <span className="footer__price">
                                ${siteContent.pricing.spectator}
                            </span>
                            <span className="footer__price-label">Spectator</span>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="footer__col">
                        <h4 className="footer__heading">Contact</h4>
                        <div className="footer__contact-item">
                            <MapPin size={16} />
                            <span>{siteContent.address}</span>
                        </div>
                        <div className="footer__contact-item">
                            <Phone size={16} />
                            <span>{siteContent.phone}</span>
                        </div>
                        <div className="footer__contact-item">
                            <Mail size={16} />
                            <span>{siteContent.email}</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer__bottom">
                    <p>© {new Date().getFullYear()} Creekside MX. All rights reserved.</p>
                    <p className="footer__location">Marion, Texas</p>
                </div>
            </div>
        </footer>
    );
}
