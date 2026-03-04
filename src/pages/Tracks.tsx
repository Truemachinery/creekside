import { motion } from 'framer-motion';
import ScrollReveal from '../components/animations/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import TrackCard from '../components/ui/TrackCard';
import Button from '../components/ui/Button';
import { tracks } from '../data/tracks';
import './Tracks.css';

const features = [
    {
        num: '01',
        title: 'Professional Grading',
        description: 'Every track is professionally graded and maintained to ensure optimal riding conditions year-round.',
    },
    {
        num: '02',
        title: 'Watered Daily',
        description: 'Tracks are watered before every session to keep dust down and provide the best traction possible.',
    },
    {
        num: '03',
        title: 'AMA-Style Obstacles',
        description: 'Our jump designs and rhythm sections are modeled after AMA national-level tracks.',
    },
    {
        num: '04',
        title: 'All Skill Levels',
        description: 'From peewee to pro, we have a track suited for exactly your skill level and goals.',
    },
    {
        num: '05',
        title: 'Safety First',
        description: 'Flaggers, medical kit on-site, and track marshals ensure a safe riding environment.',
    },
    {
        num: '06',
        title: 'Open 7 Days',
        description: 'Ride any day of the week. We\'re open Monday through Sunday, weather permitting.',
    },
];

export default function TracksPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero Banner */}
            <section className="page-hero">
                <div className="page-hero__bg" />
                <div className="container page-hero__content">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Our Tracks
                    </motion.h1>
                    <motion.p
                        className="page-hero__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Three purpose-built tracks for every skill level
                    </motion.p>
                </div>
            </section>

            {/* Track Grid */}
            <section className="section">
                <div className="container">
                    <div className="tracks-grid">
                        {tracks.map((track, i) => (
                            <TrackCard key={track.id} track={track} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="section" style={{ background: 'var(--color-dark)' }}>
                <div className="container">
                    <SectionHeading
                        title="What Sets Us Apart"
                        subtitle="Every detail is designed to deliver the best ride of your life."
                    />
                    <div className="features-grid">
                        {features.map((f, i) => (
                            <ScrollReveal key={f.num} delay={i * 0.08}>
                                <div className="feature-item">
                                    <span className="feature-item__num">{f.num}</span>
                                    <h3 className="feature-item__title">{f.title}</h3>
                                    <p className="feature-item__desc">{f.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section tracks-cta">
                <div className="container" style={{ textAlign: 'center' }}>
                    <ScrollReveal>
                        <h2 style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-lg)' }}>
                            Ready to Hit the Dirt?
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.15}>
                        <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button variant="primary" size="lg" to="/schedule">
                                View Schedule
                            </Button>
                            <Button variant="outline" size="lg" to="/contact">
                                Get Directions
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </motion.div>
    );
}
