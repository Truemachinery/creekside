import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../ui/Button';
import './CallToAction.css';

export default function CallToAction() {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="cta section" ref={ref}>
            <div className="cta__glow" />
            <div className="cta__grid-pattern" />
            <div className="container cta__inner">
                <motion.span
                    className="cta__label"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    Ready?
                </motion.span>

                <motion.h2
                    className="cta__title"
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                    Come <span className="text-gradient">Ride With Us</span>
                </motion.h2>

                <motion.p
                    className="cta__desc"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    Three tracks, 50+ acres, and the best dirt in Texas. Plan your visit
                    today and see why riders call Creekside MX home.
                </motion.p>

                <motion.div
                    className="cta__actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Button variant="primary" size="lg" to="/schedule">
                        View Schedule
                    </Button>
                    <Button variant="outline" size="lg" to="/contact">
                        Get Directions
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
