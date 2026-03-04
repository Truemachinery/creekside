import { motion } from 'framer-motion';
import { Bed, Wifi, Car, Utensils, Star, ExternalLink, Footprints, CalendarDays, TreePine, Users } from 'lucide-react';
import ScrollReveal from '../components/animations/ScrollReveal';
import Button from '../components/ui/Button';
import { siteContent } from '../data/siteContent';
import './Stay.css';

const amenities = [
    { icon: Bed, label: 'Beds' },
    { icon: Wifi, label: 'WiFi' },
    { icon: Car, label: 'Parking' },
    { icon: Utensils, label: 'Kitchen' },
    { icon: Star, label: 'Top Rated' },
];

const reasons = [
    {
        icon: Footprints,
        title: 'Steps from the Track',
        description: 'Roll out of bed and onto the track. No early morning drives required.',
    },
    {
        icon: CalendarDays,
        title: 'Weekend Getaway',
        description: 'Turn a day of riding into a full weekend adventure for the whole family.',
    },
    {
        icon: TreePine,
        title: 'Peaceful Setting',
        description: 'Surrounded by 50+ acres of Texas countryside — stars, creek, and wide open space.',
    },
    {
        icon: Users,
        title: 'Family Friendly',
        description: 'Safe, welcoming atmosphere for riders and families of all ages.',
    },
];

export default function Stay() {
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
                        Stay With Us
                    </motion.h1>
                    <motion.p
                        className="page-hero__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Rest up for tomorrow's ride
                    </motion.p>
                </div>
            </section>

            {/* Property Details */}
            <section className="section">
                <div className="container">
                    <div className="stay-grid">
                        {/* Gallery */}
                        <ScrollReveal direction="left" className="stay-gallery">
                            <svg className="stay-gallery__main" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="600" height="400" rx="12" fill="var(--color-charcoal)" />
                                <text x="300" y="200" textAnchor="middle" fill="var(--color-gray)" fontFamily="var(--font-body)" fontSize="16">Property Photo</text>
                            </svg>
                            <div className="stay-gallery__thumbs">
                                {[1, 2, 3, 4].map((n) => (
                                    <svg key={n} viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="stay-gallery__thumb">
                                        <rect width="140" height="100" rx="8" fill="var(--color-charcoal)" />
                                        <text x="70" y="55" textAnchor="middle" fill="var(--color-gray)" fontFamily="var(--font-body)" fontSize="10">Photo {n}</text>
                                    </svg>
                                ))}
                            </div>
                        </ScrollReveal>

                        {/* Details */}
                        <div className="stay-details">
                            <ScrollReveal>
                                <span className="stay-details__label">Our Airbnb</span>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <h2 className="stay-details__heading">Your Home at the Track</h2>
                            </ScrollReveal>
                            <ScrollReveal delay={0.2}>
                                <p className="stay-details__text">
                                    Stay right at Creekside MX in our cozy on-site Airbnb. Perfect for families
                                    and groups who want to maximize their track time without the commute.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3}>
                                <p className="stay-details__text">
                                    Wake up to the sound of nature, enjoy morning coffee on the porch, and be
                                    first on the track every day. Our property is fully furnished with everything
                                    you need for a comfortable stay.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4}>
                                <div className="stay-amenities">
                                    {amenities.map((a) => (
                                        <div key={a.label} className="stay-amenities__item">
                                            <a.icon size={20} />
                                            <span>{a.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>

                            <ScrollReveal delay={0.5}>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    href={siteContent.airbnbUrl}
                                    icon={<ExternalLink size={16} />}
                                >
                                    Book on Airbnb
                                </Button>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Stay */}
            <section className="section" style={{ background: 'var(--color-dark)' }}>
                <div className="container">
                    <h2 className="stay-why__title">Why Stay at Creekside?</h2>
                    <div className="stay-reasons">
                        {reasons.map((reason, i) => (
                            <ScrollReveal key={reason.title} delay={i * 0.1}>
                                <div className="stay-reason">
                                    <div className="stay-reason__icon">
                                        <reason.icon size={24} />
                                    </div>
                                    <h3 className="stay-reason__title">{reason.title}</h3>
                                    <p className="stay-reason__desc">{reason.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
