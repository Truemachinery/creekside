import { motion } from 'framer-motion';
import { Clock, DollarSign, AlertTriangle, Sun } from 'lucide-react';
import ScrollReveal from '../components/animations/ScrollReveal';
import { siteContent } from '../data/siteContent';
import './Schedule.css';

const rules = [
    'All riders must sign a waiver before riding.',
    'Helmets and boots are required at all times on the track.',
    'No alcohol or drugs on the property.',
    'Riders under 18 must have a parent or guardian present.',
    'Respect other riders — no aggressive or reckless riding.',
    'Follow all flaggers\' signals and track marshal instructions.',
];

export default function Schedule() {
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
                        Schedule & Pricing
                    </motion.h1>
                    <motion.p
                        className="page-hero__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Plan your visit to Creekside MX
                    </motion.p>
                </div>
            </section>

            {/* Info Cards */}
            <section className="section">
                <div className="container">
                    <div className="schedule-cards">
                        {/* Track Hours */}
                        <ScrollReveal>
                            <div className="schedule-card">
                                <div className="schedule-card__icon">
                                    <Clock size={28} />
                                </div>
                                <h3 className="schedule-card__title">Track Hours</h3>
                                <p className="schedule-card__days">{siteContent.hours.days}</p>
                                <p className="schedule-card__time">{siteContent.hours.time}</p>
                                <div className="schedule-card__note">
                                    <Sun size={14} />
                                    <span>{siteContent.hours.note}</span>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Pricing (highlighted) */}
                        <ScrollReveal delay={0.1}>
                            <div className="schedule-card schedule-card--highlight">
                                <div className="schedule-card__icon">
                                    <DollarSign size={28} />
                                </div>
                                <h3 className="schedule-card__title">Pricing</h3>
                                <div className="schedule-card__prices">
                                    <div className="schedule-card__price-row">
                                        <span className="schedule-card__price-label">Rider</span>
                                        <span className="schedule-card__price-value">
                                            ${siteContent.pricing.rider}
                                        </span>
                                    </div>
                                    <div className="schedule-card__price-row">
                                        <span className="schedule-card__price-label">Spectator</span>
                                        <span className="schedule-card__price-value">
                                            ${siteContent.pricing.spectator}
                                        </span>
                                    </div>
                                </div>
                                <p className="schedule-card__price-note">All tracks included</p>
                            </div>
                        </ScrollReveal>

                        {/* Weather Policy */}
                        <ScrollReveal delay={0.2}>
                            <div className="schedule-card">
                                <div className="schedule-card__icon">
                                    <AlertTriangle size={28} />
                                </div>
                                <h3 className="schedule-card__title">Weather Policy</h3>
                                <p className="schedule-card__text">
                                    Track conditions are weather dependent. We may close during or
                                    after heavy rain to protect track integrity. Check our social
                                    media for same-day updates before heading out.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Track Rules */}
            <section className="section" style={{ background: 'var(--color-dark)' }}>
                <div className="container">
                    <div className="schedule-rules">
                        <h2 className="schedule-rules__title">Track Rules</h2>
                        <div className="schedule-rules__list">
                            {rules.map((rule, i) => (
                                <ScrollReveal key={i} delay={i * 0.06}>
                                    <div className="schedule-rules__item">
                                        <span className="schedule-rules__num">{String(i + 1).padStart(2, '0')}</span>
                                        <p>{rule}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
