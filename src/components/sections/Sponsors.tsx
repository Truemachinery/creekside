import { sponsors } from '../../data/sponsors';
import './Sponsors.css';

export default function Sponsors() {
    const doubled = [...sponsors, ...sponsors];

    return (
        <section className="sponsors">
            <div className="container">
                <p className="sponsors__label">Proudly Supported By</p>
            </div>
            <div className="sponsors__ticker-wrap">
                <div className="sponsors__ticker">
                    {doubled.map((sponsor, i) => (
                        <div key={`${sponsor.id}-${i}`} className="sponsors__item">
                            {sponsor.logo ? (
                                <img
                                    src={sponsor.logo}
                                    alt={sponsor.name}
                                    className="sponsors__logo"
                                />
                            ) : (
                                <span className="sponsors__name">{sponsor.name}</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
