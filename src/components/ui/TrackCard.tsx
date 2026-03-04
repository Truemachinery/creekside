import { motion } from 'framer-motion';
import type { Track } from '../../data/tracks';
import './TrackCard.css';

interface TrackCardProps {
    track: Track;
    index: number;
}

const difficultyColors: Record<string, string> = {
    Beginner: '#4ade80',
    Intermediate: '#f5a623',
    Advanced: '#ff6b00',
};

export default function TrackCard({ track, index }: TrackCardProps) {
    return (
        <motion.div
            className="track-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -8, scale: 1.02 }}
        >
            <div
                className="track-card__glow"
                style={{ background: track.color }}
            />

            <div className="track-card__header">
                <div className="track-card__icon" style={{ borderColor: track.color }}>
                    <svg
                        viewBox="0 0 60 60"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                    >
                        <path
                            d="M10 45 C15 35, 20 25, 30 30 S45 20, 50 15"
                            stroke={track.color}
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            fill="none"
                        />
                        <path
                            d="M10 50 C20 40, 25 45, 35 35 S45 30, 50 25"
                            stroke={track.color}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            fill="none"
                            opacity="0.4"
                        />
                    </svg>
                </div>

                <span
                    className="track-card__badge"
                    style={{
                        backgroundColor: `${difficultyColors[track.difficulty]}20`,
                        color: difficultyColors[track.difficulty],
                        borderColor: `${difficultyColors[track.difficulty]}40`,
                    }}
                >
                    {track.difficulty}
                </span>
            </div>

            <h3 className="track-card__title">{track.name}</h3>
            <p className="track-card__desc">{track.description}</p>

            <div className="track-card__features">
                {track.features.map((feature) => (
                    <span
                        key={feature}
                        className="track-card__tag"
                        style={{ borderColor: `${track.color}40`, color: track.color }}
                    >
                        {feature}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
