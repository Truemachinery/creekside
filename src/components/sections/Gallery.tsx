import './Gallery.css';

const galleryImages = [
    { src: '/images/Gallery/111658902486298924.jpg', alt: 'Creekside MX action' },
    { src: '/images/Gallery/1236512321314404692.JPG', alt: 'Riders at Creekside' },
    { src: '/images/Gallery/2179552802374022650.jpg', alt: 'Track life' },
    { src: '/images/Gallery/2576300795704436815.jpg', alt: 'Motocross jump' },
    { src: '/images/Gallery/2606653684199943046.JPG', alt: 'Riding at Creekside MX' },
    { src: '/images/Gallery/2797404096664633951.JPG', alt: 'Track action shot' },
    { src: '/images/Gallery/3454653265598621812.jpg', alt: 'Racing moment' },
    { src: '/images/Gallery/3754413890214445068.JPG', alt: 'Motocross racing' },
    { src: '/images/Gallery/504185953652309220.jpg', alt: 'Creekside track day' },
    { src: '/images/Gallery/5082383250438603491.JPG', alt: 'Rider in action' },
    { src: '/images/Gallery/5909129221576060943.jpg', alt: 'Jump shot' },
    { src: '/images/Gallery/6444515998023991722.jpg', alt: 'Creekside MX racing' },
    { src: '/images/Gallery/6876716391119044976.jpg', alt: 'Track day vibes' },
    { src: '/images/Gallery/7488279933858610357.jpg', alt: 'Motocross action' },
    { src: '/images/Gallery/7590488283595833392.jpg', alt: 'Riding the dirt' },
    { src: '/images/Gallery/8287623571124815923.JPG', alt: 'Creekside MX riding' },
];

// Split images into two rows
const topRowImages = galleryImages.slice(0, 8);
const bottomRowImages = galleryImages.slice(8);

export default function Gallery() {
    // Duplicate for seamless loop
    const topStrip = [...topRowImages, ...topRowImages];
    const bottomStrip = [...bottomRowImages, ...bottomRowImages];

    return (
        <section className="gallery">
            <div className="gallery__label">
                <span className="gallery__label-line" />
                <span className="gallery__label-text">Life at Creekside</span>
                <span className="gallery__label-line" />
            </div>

            {/* Top Row - auto scrolls left */}
            <div className="gallery__track">
                <div className="gallery__strip gallery__strip--left">
                    {topStrip.map((img, i) => (
                        <div
                            key={`top-${i}`}
                            className={`gallery__item gallery__item--${i % 3 === 0 ? 'tall' : i % 3 === 1 ? 'wide' : 'square'}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="gallery__img"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Row - auto scrolls right */}
            <div className="gallery__track">
                <div className="gallery__strip gallery__strip--right">
                    {bottomStrip.map((img, i) => (
                        <div
                            key={`bottom-${i}`}
                            className={`gallery__item gallery__item--${i % 3 === 0 ? 'wide' : i % 3 === 1 ? 'square' : 'tall'}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="gallery__img"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
