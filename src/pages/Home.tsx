import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import TrackHighlights from '../components/sections/TrackHighlights';
import Gallery from '../components/sections/Gallery';
import BikeRentals from '../components/sections/BikeRentals';
import LearnToRide from '../components/sections/LearnToRide';
import Activities from '../components/sections/Activities';
import Sponsors from '../components/sections/Sponsors';
import CallToAction from '../components/sections/CallToAction';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <About />
            <TrackHighlights />
            <Gallery />
            <BikeRentals />
            <LearnToRide />
            <Activities />
            <Sponsors />
            <CallToAction />
        </motion.div>
    );
}
