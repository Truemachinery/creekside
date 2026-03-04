import { motion } from 'framer-motion';
import { Bike, Shield, Clock, Users, Wrench, Gauge, AlertTriangle, CheckCircle, HelpCircle, Phone } from 'lucide-react';
import ScrollReveal from '../components/animations/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { siteContent } from '../data/siteContent';
import './Rentals.css';

const rentalBikes = [
    {
        name: 'Youth 50cc–65cc',
        price: 75,
        fullDayPrice: 125,
        duration: 'Half Day',
        description: 'Perfect for young riders ages 4–8. Automatic clutch, low seat height, and easy-to-handle power. Includes a full safety orientation before riding.',
        features: ['Helmet Included', 'Chest Protector', 'Goggles', 'Peewee Track Access', 'Safety Orientation'],
        color: '#4ade80',
        audience: 'Ages 4–8',
    },
    {
        name: '85cc–110cc',
        price: 100,
        fullDayPrice: 175,
        duration: 'Half Day',
        description: 'Ideal for intermediate youth riders ages 8–14. Manual clutch bikes with great suspension and real track capability. Rental includes a track walkthrough.',
        features: ['Full Gear Package', 'Vet & Peewee Track Access', 'Safety Briefing', 'Track Walkthrough', 'Parent Waiver'],
        color: '#f5a623',
        audience: 'Ages 8–14',
    },
    {
        name: 'Full Size 250cc',
        price: 150,
        fullDayPrice: 250,
        duration: 'Half Day',
        description: 'The real deal for adult riders. Full-size motocross bikes that are maintenance-fresh and race-prepped. All three tracks included.',
        features: ['Premium Gear', 'All Track Access', 'Insurance Available', 'Race-Prepped', 'Maintenance Guarantee'],
        color: '#ff6b00',
        audience: 'Ages 16+',
    },
];

const whyRent = [
    { icon: Shield, title: 'Full Gear Included', desc: 'Helmet, boots, chest protector, goggles — everything you need to ride safely comes with your rental.' },
    { icon: Clock, title: 'Flexible Sessions', desc: 'Choose half-day or full-day rentals. Ride at your pace, take breaks, and enjoy the entire Creekside experience.' },
    { icon: Users, title: 'All Skill Levels', desc: 'Whether it\'s your first ride or your thousandth, we match you with the right bike for your ability.' },
    { icon: Wrench, title: 'Race-Ready Bikes', desc: 'Every rental bike is professionally maintained, inspected, and prepped before each session. No surprises.' },
    { icon: Gauge, title: 'Track Access Included', desc: 'Your rental includes full access to the tracks matching your skill level. No additional fees.' },
    { icon: Bike, title: 'No Bike Required', desc: 'Don\'t own a bike? No problem. Show up with nothing and leave as a rider. We handle the rest.' },
];

const faqs = [
    { q: 'Do I need experience to rent a bike?', a: 'No! We offer bikes for complete beginners. Our staff will give you a safety orientation and track walkthrough before you ride.' },
    { q: 'What do I need to bring?', a: 'Just yourself and closed-toe shoes. We provide all riding gear, the bike, and fuel.' },
    { q: 'Can I rent for a full day?', a: 'Yes! We offer both half-day and full-day rates. Full-day rentals are available at a discounted rate.' },
    { q: 'Is there a damage deposit?', a: 'A $200 refundable deposit is required for all rentals. Optional damage insurance is available for $25.' },
    { q: 'Can kids ride?', a: 'Absolutely. We have 50cc–65cc bikes specifically for young riders ages 4–8, with adult supervision required.' },
];

export default function RentalsPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero */}
            <section className="page-hero rentals-hero">
                <div className="page-hero__bg rentals-hero__bg" />
                <div className="container page-hero__content">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Bike Rentals
                    </motion.h1>
                    <motion.p
                        className="page-hero__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Premium motocross bikes ready to ride — gear included
                    </motion.p>
                </div>
            </section>

            {/* Rental Tiers */}
            <section className="section">
                <div className="container">
                    <SectionHeading
                        title="Choose Your Ride"
                        subtitle="We've got a bike for every age and skill level. All rentals include full gear and track access."
                    />
                    <div className="rentals-page__tiers">
                        {rentalBikes.map((bike, i) => (
                            <ScrollReveal key={bike.name} delay={i * 0.12}>
                                <div className="rentals-page__tier">
                                    <div className="rentals-page__tier-badge" style={{ backgroundColor: `${bike.color}18`, color: bike.color, borderColor: `${bike.color}40` }}>
                                        {bike.audience}
                                    </div>

                                    <div className="rentals-page__tier-icon" style={{ borderColor: bike.color }}>
                                        <Bike size={28} style={{ color: bike.color }} />
                                    </div>

                                    <h3 className="rentals-page__tier-name">{bike.name}</h3>
                                    <p className="rentals-page__tier-desc">{bike.description}</p>

                                    <div className="rentals-page__tier-pricing">
                                        <div className="rentals-page__tier-price-block">
                                            <span className="rentals-page__tier-price" style={{ color: bike.color }}>${bike.price}</span>
                                            <span className="rentals-page__tier-label">Half Day</span>
                                        </div>
                                        <div className="rentals-page__tier-divider" />
                                        <div className="rentals-page__tier-price-block">
                                            <span className="rentals-page__tier-price" style={{ color: bike.color }}>${bike.fullDayPrice}</span>
                                            <span className="rentals-page__tier-label">Full Day</span>
                                        </div>
                                    </div>

                                    <ul className="rentals-page__tier-features">
                                        {bike.features.map((f) => (
                                            <li key={f}>
                                                <CheckCircle size={14} style={{ color: bike.color }} />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button variant="primary" size="md" to="/contact">
                                        Reserve Now
                                    </Button>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Rent */}
            <section className="section" style={{ background: 'var(--color-dark)' }}>
                <div className="container">
                    <SectionHeading
                        title="Why Rent With Us"
                        subtitle="Everything you need for the perfect ride day — we handle the details."
                    />
                    <div className="rentals-page__why-grid">
                        {whyRent.map((item, i) => (
                            <ScrollReveal key={item.title} delay={i * 0.08}>
                                <div className="rentals-page__why-item">
                                    <item.icon size={22} className="rentals-page__why-icon" />
                                    <h4 className="rentals-page__why-title">{item.title}</h4>
                                    <p className="rentals-page__why-desc">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Important Notes */}
            <section className="section">
                <div className="container">
                    <div className="rentals-page__notes">
                        <div className="rentals-page__note rentals-page__note--warning">
                            <AlertTriangle size={20} />
                            <div>
                                <h4>Important</h4>
                                <p>Riders under 18 must have a parent or legal guardian present to sign the waiver. All riders must complete a safety orientation.</p>
                            </div>
                        </div>
                        <div className="rentals-page__note">
                            <HelpCircle size={20} />
                            <div>
                                <h4>Reservations Recommended</h4>
                                <p>Walk-ins are welcome, but bikes are limited. We recommend reserving ahead — especially on weekends.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section" style={{ background: 'var(--color-dark)' }}>
                <div className="container">
                    <SectionHeading title="Frequently Asked Questions" />
                    <div className="rentals-page__faq">
                        {faqs.map((faq, i) => (
                            <ScrollReveal key={i} delay={i * 0.06}>
                                <div className="rentals-page__faq-item">
                                    <h4 className="rentals-page__faq-q">{faq.q}</h4>
                                    <p className="rentals-page__faq-a">{faq.a}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section rentals-page__cta-section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <ScrollReveal>
                        <h2 style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-md)' }}>
                            Ready to <span className="text-gradient">Ride?</span>
                        </h2>
                        <p style={{ color: 'var(--color-gray-light)', maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
                            Call us to reserve your bike or just show up — we'll get you on the track.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button variant="primary" size="lg" to="/contact">
                                Reserve a Bike
                            </Button>
                            <Button variant="outline" size="lg" href={`tel:${siteContent.phone}`} icon={<Phone size={16} />}>
                                Call Now
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </motion.div>
    );
}
