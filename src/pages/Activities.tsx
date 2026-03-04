import { motion } from 'framer-motion';
import { Tent, Waves, Fish, Bike, TreePine } from 'lucide-react';
import ScrollReveal from '../components/animations/ScrollReveal';
import SectionHeading from '../components/ui/SectionHeading';
import './ActivitiesPage.css';

const detailedActivities = [
    {
        icon: Tent,
        title: 'Camping',
        color: '#f5a623',
        description: 'Set up camp under the wide Texas sky right at the track. We offer both tent sites and RV hookups with water and electric. Fall asleep to the sounds of nature and wake up ready to ride.',
        features: ['Tent Sites', 'RV Hookups', 'Fire Pits', 'Restrooms', 'Shower Facilities'],
    },
    {
        icon: Waves,
        title: 'Kayaking',
        color: '#38bdf8',
        description: 'Paddle down the scenic creek that gives our facility its name. Whether you bring your own kayak or use one of ours, the creek offers a peaceful escape after a day of riding.',
        features: ['Kayaks Available', 'Scenic Route', 'Calm Waters', 'Wildlife Viewing', 'All Ages'],
    },
    {
        icon: Fish,
        title: 'Fishing',
        color: '#4ade80',
        description: 'Our stocked pond is the perfect place to cast a line and relax. Great for kids and adults alike. Catch and release or take home dinner — the choice is yours.',
        features: ['Stocked Pond', 'Catch & Release', 'Family Friendly', 'Gear Available', 'Shaded Banks'],
    },
    {
        icon: Bike,
        title: 'Trail Riding',
        color: '#e87a1e',
        description: 'Explore miles of maintained trails winding through the beautiful Texas hill country. From easy cruises to more technical paths, there is trail for every skill level.',
        features: ['Multiple Trails', 'Scenic Views', 'Varied Terrain', 'Marked Routes', 'All Levels'],
    },
    {
        icon: TreePine,
        title: 'Playground',
        color: '#a78bfa',
        description: 'Keep the little ones entertained while the riders hit the track. Our playground area is safe, shaded, and visible from the spectator areas so parents can watch from nearby.',
        features: ['Shaded Area', 'Safe Equipment', 'Parent Viewing', 'Picnic Tables', 'All Ages'],
    },
];

export default function ActivitiesPage() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Hero */}
            <section className="page-hero activities-page-hero">
                <div className="page-hero__bg activities-page-hero__bg" />
                <div className="container page-hero__content">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Activities
                    </motion.h1>
                    <motion.p
                        className="page-hero__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    >
                        More than just motocross
                    </motion.p>
                </div>
            </section>

            {/* Detailed Activities */}
            <section className="section">
                <div className="container">
                    <SectionHeading
                        title="Your Outdoor Destination"
                        subtitle="There's something for everyone at Creekside MX."
                    />
                    <div className="activities-detail-list">
                        {detailedActivities.map((activity, i) => (
                            <ScrollReveal key={activity.title} delay={0.1}>
                                <div className={`activities-detail ${i % 2 !== 0 ? 'activities-detail--reverse' : ''}`}>
                                    <div className="activities-detail__icon-wrap" style={{ borderColor: activity.color }}>
                                        <activity.icon size={32} style={{ color: activity.color }} />
                                    </div>
                                    <div className="activities-detail__content">
                                        <h3 className="activities-detail__title" style={{ color: activity.color }}>
                                            {activity.title}
                                        </h3>
                                        <p className="activities-detail__desc">{activity.description}</p>
                                        <div className="activities-detail__features">
                                            {activity.features.map((f) => (
                                                <span
                                                    key={f}
                                                    className="activities-detail__tag"
                                                    style={{ borderColor: `${activity.color}40`, color: activity.color }}
                                                >
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
