import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Star, ShieldCheck, Timer, UserCheck, TrendingUp } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import './LearnToRide.css';

const programs = [
    {
        icon: Star,
        title: 'First Ride Experience',
        ages: 'Ages 4+',
        duration: '1 Hour',
        price: 85,
        description: 'Never been on a dirt bike? Start here. We cover the fundamentals — balance, throttle, braking — in a safe, one-on-one environment.',
        color: '#4ade80',
    },
    {
        icon: TrendingUp,
        title: 'Skills & Drills',
        ages: 'Ages 8+',
        duration: '2 Hours',
        price: 125,
        description: 'Ready to level up? This session focuses on cornering, body position, jumping technique, and track flow. Small group or private.',
        color: '#f5a623',
    },
    {
        icon: GraduationCap,
        title: 'Race Prep Academy',
        ages: 'Ages 12+',
        duration: '3 Hours',
        price: 200,
        description: 'For riders who want to compete. Gate starts, race strategy, line selection, and advanced techniques from experienced coaches.',
        color: '#ff6b00',
    },
];

const guarantees = [
    { icon: ShieldCheck, text: 'Certified, experienced instructors' },
    { icon: Timer, text: 'Bikes & gear included with every lesson' },
    { icon: UserCheck, text: 'Max 4 students per group session' },
];

export default function LearnToRide() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section className="learn section" ref={ref}>
            <div className="learn__glow" />
            <div className="container">
                <SectionHeading
                    title="Learn to Ride"
                    subtitle="Professional motocross lessons for beginners and experienced riders alike. All ages welcome."
                />

                {/* Program Cards */}
                <div className="learn__grid">
                    {programs.map((program, i) => (
                        <motion.div
                            key={program.title}
                            className="learn__card"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.7,
                                delay: i * 0.15,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            whileHover={{
                                y: -8,
                                borderColor: program.color,
                                transition: { type: 'spring', stiffness: 300, damping: 20 },
                            }}
                        >
                            <div className="learn__card-top">
                                <div className="learn__card-icon" style={{ borderColor: program.color }}>
                                    <program.icon size={24} style={{ color: program.color }} />
                                </div>
                                <div className="learn__card-meta">
                                    <span className="learn__card-badge" style={{ color: program.color, borderColor: `${program.color}40` }}>
                                        {program.ages}
                                    </span>
                                    <span className="learn__card-badge" style={{ color: program.color, borderColor: `${program.color}40` }}>
                                        {program.duration}
                                    </span>
                                </div>
                            </div>

                            <h3 className="learn__card-title">{program.title}</h3>
                            <p className="learn__card-desc">{program.description}</p>

                            <div className="learn__card-footer">
                                <span className="learn__card-price" style={{ color: program.color }}>
                                    ${program.price}
                                </span>
                                <span className="learn__card-per">per session</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Guarantees */}
                <motion.div
                    className="learn__guarantees"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    {guarantees.map((g) => (
                        <div key={g.text} className="learn__guarantee">
                            <g.icon size={18} className="learn__guarantee-icon" />
                            <span>{g.text}</span>
                        </div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    className="learn__cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Button variant="primary" size="lg" to="/lessons">
                        View All Lessons
                    </Button>
                    <Button variant="outline" size="lg" to="/contact">
                        Book a Lesson
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
