import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Bike, Shield, Clock, Users, Wrench, Gauge } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import './BikeRentals.css';

const rentalBikes = [
    {
        name: 'Youth 50cc–65cc',
        price: 75,
        duration: 'Half Day',
        description: 'Perfect for young riders ages 4–8. Automatic clutch, low seat height, and easy-to-handle power.',
        features: ['Helmet Included', 'Chest Protector', 'Goggles'],
        color: '#4ade80',
    },
    {
        name: '85cc–110cc',
        price: 100,
        duration: 'Half Day',
        description: 'Ideal for intermediate youth riders ages 8–14. Manual clutch, great suspension, and real track capability.',
        features: ['Full Gear Package', 'Track Access', 'Safety Briefing'],
        color: '#f5a623',
    },
    {
        name: 'Full Size 250cc',
        price: 150,
        duration: 'Half Day',
        description: 'The real deal for adult riders. Full-size motocross bikes ready to rip. Maintenance-fresh and race-prepped.',
        features: ['Premium Gear', 'All Tracks', 'Insurance Available'],
        color: '#ff6b00',
    },
];

const perks = [
    { icon: Shield, title: 'Safety First', desc: 'Full gear included with every rental — helmet, boots, chest protector, and goggles.' },
    { icon: Clock, title: 'Flexible Sessions', desc: 'Half-day and full-day rentals available. Ride at your own pace.' },
    { icon: Users, title: 'All Skill Levels', desc: 'From first-timers to experienced riders, we have the right bike for you.' },
    { icon: Wrench, title: 'Race-Ready Bikes', desc: 'Every rental bike is professionally maintained and prepped before each session.' },
    { icon: Gauge, title: 'Track Included', desc: 'Your rental includes full access to the track matching your skill level.' },
    { icon: Bike, title: 'No Bike? No Problem', desc: 'Don\'t own a bike? No worries. Show up and we\'ll get you riding.' },
];

export default function BikeRentals() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section className="rentals section" ref={ref}>
            <div className="container">
                <SectionHeading
                    title="Bike Rentals"
                    subtitle="Don't own a bike? We've got you covered. Premium motocross bikes ready to ride."
                />

                {/* Rental Cards */}
                <div className="rentals__grid">
                    {rentalBikes.map((bike, i) => (
                        <motion.div
                            key={bike.name}
                            className="rentals__card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.15,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <div className="rentals__card-glow" style={{ background: bike.color }} />
                            <div className="rentals__card-header">
                                <div className="rentals__card-icon" style={{ borderColor: bike.color }}>
                                    <Bike size={24} style={{ color: bike.color }} />
                                </div>
                                <div className="rentals__card-price">
                                    <span className="rentals__card-amount" style={{ color: bike.color }}>
                                        ${bike.price}
                                    </span>
                                    <span className="rentals__card-duration">/ {bike.duration}</span>
                                </div>
                            </div>

                            <h3 className="rentals__card-title">{bike.name}</h3>
                            <p className="rentals__card-desc">{bike.description}</p>

                            <div className="rentals__card-features">
                                {bike.features.map((f) => (
                                    <span
                                        key={f}
                                        className="rentals__card-tag"
                                        style={{ borderColor: `${bike.color}40`, color: bike.color }}
                                    >
                                        {f}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Perks Grid */}
                <div className="rentals__perks">
                    {perks.map((perk, i) => (
                        <motion.div
                            key={perk.title}
                            className="rentals__perk"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: 0.6 + i * 0.08,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <perk.icon size={20} className="rentals__perk-icon" />
                            <div>
                                <h4 className="rentals__perk-title">{perk.title}</h4>
                                <p className="rentals__perk-desc">{perk.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    className="rentals__cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Button variant="primary" size="lg" to="/rentals">
                        View All Rentals
                    </Button>
                    <Button variant="outline" size="lg" to="/contact">
                        Reserve a Bike
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
