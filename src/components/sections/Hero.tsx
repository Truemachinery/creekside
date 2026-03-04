import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { siteContent } from '../../data/siteContent';
import Button from '../ui/Button';
import './Hero.css';

export default function Hero() {
    const ref = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 1000], [0, 400]);

    const particles = useMemo(() => {
        return Array.from({ length: 20 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 4 + 2,
            delay: Math.random() * 8,
            duration: Math.random() * 6 + 8,
            opacity: Math.random() * 0.4 + 0.1,
        }));
    }, []);

    const words = siteContent.tagline.split(' ');

    return (
        <section className="hero" ref={ref}>
            <img
                src="/images/Riding photos/DSC_5453.jpg"
                alt=""
                className="hero__bg-image hero__bg-image--desktop"
            />
            <img
                src="/images/Riding photos/mobile heropng.png"
                alt=""
                className="hero__bg-image hero__bg-image--mobile"
            />
            <motion.div className="hero__bg" style={{ y: bgY }} />
            <div className="hero__gradient" />

            {/* Dirt Particles */}
            <div className="hero__particles">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="hero__particle"
                        style={{
                            left: p.left,
                            top: p.top,
                            width: p.size,
                            height: p.size,
                            animationDelay: `${p.delay}s`,
                            animationDuration: `${p.duration}s`,
                            opacity: p.opacity,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="hero__content container">
                <motion.div
                    className="hero__subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="hero__subtitle-line" />
                    <span>Marion, Texas</span>
                    <div className="hero__subtitle-line" />
                </motion.div>

                <h1 className="hero__title" style={{ perspective: '800px' }}>
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            className="hero__word"
                            initial={{ opacity: 0, y: 80, rotateX: 40 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3 + i * 0.08,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                <motion.p
                    className="hero__desc"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {siteContent.description}
                </motion.p>

                <motion.div
                    className="hero__actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Button variant="primary" size="lg" to="/schedule">
                        Ride Today
                    </Button>
                    <Button variant="outline" size="lg" to="/tracks">
                        View Tracks
                    </Button>
                </motion.div>

                <motion.div
                    className="hero__scroll"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.6 }}
                >
                    <span className="hero__scroll-label">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    >
                        <ChevronDown size={20} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
