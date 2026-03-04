import { motion } from 'framer-motion';
import {
    GraduationCap, Star, TrendingUp, ShieldCheck,
    CheckCircle, Phone, Target, Zap, Heart, Award, Users,
} from 'lucide-react';
import ScrollReveal from '../components/animations/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { siteContent } from '../data/siteContent';
import './Lessons.css';

const programs = [
    {
        icon: Star,
        title: 'First Ride Experience',
        tagline: 'Your very first time on a dirt bike',
        ages: 'Ages 4+',
        duration: '1 Hour',
        groupSize: '1-on-1',
        price: 85,
        description: 'Never been on a dirt bike? Start here. We cover the fundamentals — balance, throttle control, braking, and basic steering — in a safe, one-on-one environment on our peewee track.',
        includes: ['Bike & full gear included', 'Private instructor', 'Safety orientation', 'Peewee track session', 'Take-home certificate'],
        color: '#4ade80',
    },
    {
        icon: TrendingUp,
        title: 'Skills & Drills',
        tagline: 'Level up your riding technique',
        ages: 'Ages 8+',
        duration: '2 Hours',
        groupSize: 'Up to 4',
        price: 125,
        description: 'Ready to level up? This session focuses on cornering technique, proper body position, jumping fundamentals, and reading track flow. Available as small group or private.',
        includes: ['Bike available to rent', 'Video analysis', 'Cornering drills', 'Jump progression', 'Customized feedback'],
        color: '#f5a623',
    },
    {
        icon: GraduationCap,
        title: 'Race Prep Academy',
        tagline: 'Train like a pro racer',
        ages: 'Ages 12+',
        duration: '3 Hours',
        groupSize: 'Up to 4',
        price: 200,
        description: 'For riders who want to compete. Gate starts, race strategy, line selection, passing technique, and advanced skills from coaches with real racing experience.',
        includes: ['Gate start practice', 'Race strategy session', 'Line selection analysis', 'Fitness conditioning', 'Competition readiness eval'],
        color: '#ff6b00',
    },
];

const whyLearn = [
    { icon: ShieldCheck, title: 'Safety Certified', desc: 'All instructors are safety certified with years of racing and coaching experience.' },
    { icon: Target, title: 'Goal-Oriented', desc: 'Every lesson is structured around clear goals. You\'ll see measurable improvement every session.' },
    { icon: Zap, title: 'Bikes & Gear Included', desc: 'No equipment? No problem. We provide bikes, helmets, boots, and full protective gear.' },
    { icon: Heart, title: 'Patient Instructors', desc: 'Our coaches are patient and encouraging. They specialize in helping nervous first-timers feel confident.' },
    { icon: Award, title: 'Small Groups Only', desc: 'Maximum 4 riders per group session ensures you get the personal attention you deserve.' },
    { icon: Users, title: 'Family Friendly', desc: 'Parents can ride too! We offer family packages so the whole crew can learn together.' },
];

const testimonials = [
    { quote: 'My 6-year-old went from scared to confident in one session. The instructor was incredible.', name: 'Sarah M.', role: 'Parent' },
    { quote: 'I\'d never been on a dirt bike before. Now I\'m out here every weekend. Best decision ever.', name: 'Jake R.', role: 'Adult Beginner' },
    { quote: 'The Race Prep Academy took my son\'s racing to the next level. Podium finishes ever since.', name: 'Carlos D.', role: 'MX Dad' },
];

export default function LessonsPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero */}
            <section className="page-hero lessons-hero">
                <div className="page-hero__bg lessons-hero__bg" />
                <div className="container page-hero__content">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Learn to Ride
                    </motion.h1>
                    <motion.p
                        className="page-hero__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Professional motocross lessons for every age and skill level
                    </motion.p>
                </div>
            </section>

            {/* Programs */}
            <section className="section">
                <div className="container">
                    <SectionHeading
                        title="Our Programs"
                        subtitle="From first-timers to future racers — we have the right lesson for you."
                    />
                    <div className="lessons-page__programs">
                        {programs.map((program, i) => (
                            <ScrollReveal key={program.title} delay={i * 0.12}>
                                <div className="lessons-page__program">
                                    <div className="lessons-page__program-header">
                                        <div className="lessons-page__program-icon" style={{ borderColor: program.color }}>
                                            <program.icon size={28} style={{ color: program.color }} />
                                        </div>
                                        <div className="lessons-page__program-badges">
                                            <span className="lessons-page__program-badge" style={{ color: program.color, borderColor: `${program.color}40` }}>{program.ages}</span>
                                            <span className="lessons-page__program-badge" style={{ color: program.color, borderColor: `${program.color}40` }}>{program.duration}</span>
                                            <span className="lessons-page__program-badge" style={{ color: program.color, borderColor: `${program.color}40` }}>{program.groupSize}</span>
                                        </div>
                                    </div>

                                    <h3 className="lessons-page__program-title">{program.title}</h3>
                                    <p className="lessons-page__program-tagline" style={{ color: program.color }}>{program.tagline}</p>
                                    <p className="lessons-page__program-desc">{program.description}</p>

                                    <ul className="lessons-page__program-includes">
                                        {program.includes.map((item) => (
                                            <li key={item}>
                                                <CheckCircle size={14} style={{ color: program.color }} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="lessons-page__program-footer">
                                        <div>
                                            <span className="lessons-page__program-price" style={{ color: program.color }}>${program.price}</span>
                                            <span className="lessons-page__program-per">per session</span>
                                        </div>
                                        <Button variant="primary" size="md" to="/contact">
                                            Book Now
                                        </Button>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Learn With Us */}
            <section className="section" style={{ background: 'var(--color-dark)' }}>
                <div className="container">
                    <SectionHeading
                        title="Why Learn With Us"
                        subtitle="Creekside MX provides the safest, most supportive environment to learn motocross."
                    />
                    <div className="lessons-page__why-grid">
                        {whyLearn.map((item, i) => (
                            <ScrollReveal key={item.title} delay={i * 0.08}>
                                <div className="lessons-page__why-item">
                                    <item.icon size={22} className="lessons-page__why-icon" />
                                    <h4 className="lessons-page__why-title">{item.title}</h4>
                                    <p className="lessons-page__why-desc">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section">
                <div className="container">
                    <SectionHeading title="What Riders Say" />
                    <div className="lessons-page__testimonials">
                        {testimonials.map((t, i) => (
                            <ScrollReveal key={i} delay={i * 0.12}>
                                <div className="lessons-page__testimonial">
                                    <p className="lessons-page__testimonial-quote">"{t.quote}"</p>
                                    <div className="lessons-page__testimonial-author">
                                        <strong>{t.name}</strong>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section" style={{ background: 'var(--color-dark)' }}>
                <div className="container">
                    <SectionHeading title="How It Works" subtitle="Getting started is easy — here's the process." />
                    <div className="lessons-page__steps">
                        {['Choose your program & book online or by phone', 'Show up — we provide the bike and all gear', 'Learn from certified instructors in a safe environment', 'Leave with new skills and a huge smile'].map((step, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="lessons-page__step">
                                    <span className="lessons-page__step-num">{String(i + 1).padStart(2, '0')}</span>
                                    <p>{step}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section lessons-page__cta-section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <ScrollReveal>
                        <h2 style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-md)' }}>
                            Start Your <span className="text-gradient">Riding Journey</span>
                        </h2>
                        <p style={{ color: 'var(--color-gray-light)', maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>
                            No experience needed. No bike needed. Just bring yourself — we'll handle the rest.
                        </p>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button variant="primary" size="lg" to="/contact">
                                Book a Lesson
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
