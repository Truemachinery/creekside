import { motion } from 'framer-motion';
import { Tent, Waves, Fish, Bike, TreePine } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import './Activities.css';

// Custom Tipi icon (lucide doesn't have one)
function TipiIcon({ size = 28 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2 L4 22 H20 Z" />
            <path d="M12 2 L8 22" />
            <path d="M12 2 L16 22" />
            <path d="M12 2 L12 8" />
            <path d="M10 22 Q12 17 14 22" />
        </svg>
    );
}

const activities = [
    {
        icon: Tent,
        title: 'Camping',
        description: 'Pitch a tent or park your RV under the Texas stars. Full hookups available.',
        color: '#f5a623',
    },
    {
        icon: Waves,
        title: 'Kayaking',
        description: 'Paddle the creek that gives our track its name. Kayaks available on-site.',
        color: '#38bdf8',
    },
    {
        icon: Fish,
        title: 'Fishing',
        description: 'Cast a line in our stocked pond. Bring your own gear or borrow ours.',
        color: '#4ade80',
    },
    {
        icon: Bike,
        title: 'Trail Riding',
        description: 'Explore miles of scenic trails winding through the Texas hill country.',
        color: '#e87a1e',
    },
    {
        icon: TreePine,
        title: 'Playground',
        description: 'A safe, fun area for the kids to play while the adults hit the track.',
        color: '#a78bfa',
    },
    {
        icon: TipiIcon,
        title: 'Events',
        description: '3 giant Nordic tipis for weddings, corporate events, and private parties.',
        color: '#f472b6',
        link: 'https://evergreencreek.com',
    },
];

export default function Activities() {
    return (
        <section className="activities section">
            <div className="container">
                <SectionHeading
                    title="More Than Just a Track"
                    subtitle="Creekside MX is your complete outdoor destination — ride, relax, and explore."
                />
                <div className="activities__grid">
                    {activities.map((activity, i) => {
                        const card = (
                            <motion.div
                                key={activity.title}
                                className={`activities__card ${'link' in activity ? 'activities__card--link' : ''}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-60px' }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                whileHover={{
                                    y: -6,
                                    borderColor: activity.color,
                                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                                }}
                            >
                                <div
                                    className="activities__icon"
                                    style={{ color: activity.color }}
                                >
                                    <activity.icon size={28} />
                                </div>
                                <h3 className="activities__title">{activity.title}</h3>
                                <p className="activities__desc">{activity.description}</p>
                                {'link' in activity && (
                                    <span className="activities__link-hint" style={{ color: activity.color }}>
                                        Learn More →
                                    </span>
                                )}
                            </motion.div>
                        );

                        if ('link' in activity) {
                            return (
                                <a
                                    key={activity.title}
                                    href={(activity as any).link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="activities__card-link"
                                >
                                    {card}
                                </a>
                            );
                        }

                        return card;
                    })}
                </div>
            </div>
        </section>
    );
}
