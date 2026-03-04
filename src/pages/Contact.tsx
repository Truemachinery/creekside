import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import ScrollReveal from '../components/animations/ScrollReveal';
import Button from '../components/ui/Button';
import { siteContent } from '../data/siteContent';
import './Contact.css';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert('Message sent!');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero */}
            <section className="page-hero">
                <div className="page-hero__bg" />
                <div className="container page-hero__content">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        className="page-hero__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Get in touch or find your way to the track
                    </motion.p>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Form */}
                        <ScrollReveal direction="left">
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="contact-form__group">
                                    <label htmlFor="contact-name">Name</label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        required
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="contact-form__group">
                                    <label htmlFor="contact-email">Email</label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        required
                                        placeholder="you@example.com"
                                    />
                                </div>
                                <div className="contact-form__group">
                                    <label htmlFor="contact-message">Message</label>
                                    <textarea
                                        id="contact-message"
                                        value={form.message}
                                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        required
                                        placeholder="How can we help?"
                                        rows={5}
                                    />
                                </div>
                                <Button variant="primary" size="lg" onClick={() => handleSubmit({ preventDefault: () => { } } as FormEvent)} icon={<Send size={16} />}>
                                    Send Message
                                </Button>
                            </form>
                        </ScrollReveal>

                        {/* Info */}
                        <ScrollReveal direction="right">
                            <div className="contact-info">
                                <div className="contact-info__section">
                                    <div className="contact-info__icon">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="contact-info__title">Location</h4>
                                        <p>{siteContent.address}</p>
                                        <p className="contact-info__note">Near San Antonio off I-10</p>
                                    </div>
                                </div>
                                <div className="contact-info__section">
                                    <div className="contact-info__icon">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <h4 className="contact-info__title">Phone</h4>
                                        <p>{siteContent.phone}</p>
                                    </div>
                                </div>
                                <div className="contact-info__section">
                                    <div className="contact-info__icon">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="contact-info__title">Email</h4>
                                        <p>{siteContent.email}</p>
                                    </div>
                                </div>
                                <div className="contact-info__section">
                                    <div className="contact-info__icon">
                                        <Clock size={20} />
                                    </div>
                                    <div>
                                        <h4 className="contact-info__title">Hours</h4>
                                        <p>{siteContent.hours.days}</p>
                                        <p>{siteContent.hours.time}</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Map */}
                    <ScrollReveal>
                        <div className="contact-map">
                            <iframe
                                title="Creekside MX Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55584.94752817569!2d-98.14!3d29.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c8c5c7b0f33e7%3A0x1234567890abcdef!2sMarion%2C%20TX!5e0!3m2!1sen!2sus!4v1234567890"
                                width="100%"
                                height="400"
                                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </motion.div>
    );
}
