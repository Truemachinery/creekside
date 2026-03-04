import SectionHeading from '../ui/SectionHeading';
import TrackCard from '../ui/TrackCard';
import { tracks } from '../../data/tracks';
import './TrackHighlights.css';

export default function TrackHighlights() {
    return (
        <section className="track-highlights section">
            <div className="track-highlights__glow" />
            <div className="container">
                <SectionHeading
                    title="Our Tracks"
                    subtitle="Three purpose-built tracks for every skill level — from peewee to pro."
                />
                <div className="track-highlights__grid">
                    {tracks.map((track, i) => (
                        <TrackCard key={track.id} track={track} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
