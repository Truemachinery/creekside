import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    light?: boolean;
}

export default function SectionHeading({
    title,
    subtitle,
    align = 'center',
    light = false,
}: SectionHeadingProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <div
            ref={ref}
            style={{ textAlign: align, marginBottom: 'var(--space-xl)' }}
        >
            <motion.h2
                style={{
                    fontSize: 'var(--text-5xl)',
                    color: light ? 'var(--color-white)' : 'var(--color-white)',
                    marginBottom: 'var(--space-md)',
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                {title}
            </motion.h2>

            <motion.div
                style={{
                    width: '80px',
                    height: '3px',
                    background: 'var(--gradient-orange)',
                    borderRadius: 'var(--radius-full)',
                    margin: align === 'center' ? '0 auto' : '0',
                    marginBottom: subtitle ? 'var(--space-md)' : '0',
                    transformOrigin: align === 'center' ? 'center' : 'left',
                }}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            />

            {subtitle && (
                <motion.p
                    style={{
                        fontSize: 'var(--text-lg)',
                        color: 'var(--color-gray-light)',
                        maxWidth: '600px',
                        margin: align === 'center' ? '0 auto' : '0',
                    }}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
