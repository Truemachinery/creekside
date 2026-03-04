import ScrollReveal from '../animations/ScrollReveal';
import AnimatedCounter from '../ui/AnimatedCounter';
import { siteContent } from '../../data/siteContent';
import './About.css';

export default function About() {
    return (
        <section className="about section">
            <div className="about__line" />
            <div className="container">
                <div className="about__grid">
                    {/* Image Placeholder */}
                    <ScrollReveal direction="left" className="about__image-wrap">
                        <div className="about__image-decor" />
                        <img
                            src="/images/Riding photos/DSC_6787.jpg"
                            alt="Motocross action at Creekside MX"
                            className="about__image"
                        />
                    </ScrollReveal>

                    {/* Content */}
                    <div className="about__content">
                        <ScrollReveal>
                            <span className="about__label">About Creekside</span>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <h2 className="about__heading">
                                Where South Texas{' '}
                                <span className="text-gradient">Comes to Ride</span>
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="about__text">
                                Nestled on 50+ acres of prime Texas terrain, Creekside MX is more
                                than a motocross track — it's a destination. Whether you're a
                                seasoned pro or a first-time rider, our facility offers three
                                purpose-built tracks to challenge and inspire.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.3}>
                            <p className="about__text">
                                Beyond the tracks, enjoy camping under the stars, kayaking on the
                                creek, and fishing with the family. Creekside MX is where memories
                                are made, seven days a week.
                            </p>
                        </ScrollReveal>

                        <div className="about__stats">
                            {siteContent.stats.map((stat, i) => (
                                <ScrollReveal key={stat.label} delay={0.1 * i}>
                                    <AnimatedCounter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        label={stat.label}
                                    />
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
