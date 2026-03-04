import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    label: string;
}

export default function AnimatedCounter({
    value,
    suffix = '',
    prefix = '',
    duration = 2,
    label,
}: AnimatedCounterProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const stepTime = (duration * 1000) / value;
        const interval = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= value) {
                clearInterval(interval);
            }
        }, stepTime);

        return () => clearInterval(interval);
    }, [isInView, value, duration]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center' }}
        >
            <div
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    color: 'var(--color-orange)',
                    lineHeight: 1,
                }}
            >
                {prefix}
                {count}
                {suffix}
            </div>
            <div
                style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-gray-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginTop: 'var(--space-sm)',
                }}
            >
                {label}
            </div>
        </motion.div>
    );
}
