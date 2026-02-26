import React from 'react';
import InnerBanner from '@/app/components/InnerBanner';
import Link from 'next/link';

const eventsData: Record<string, any> = {
    'yearly-calendar': {
        title: 'Yearly Calendar 2026',
        subtitle: 'Our Schedule',
        layout: 'calendar-list',
        description: 'A comprehensive view of all activities, championships, selection trials, and training camps scheduled for the current operational year.',
        events: [
            { date: '12', month: 'FEB', name: 'National Coaching Seminar', location: 'Dhaka Sports Complex', time: '10:00 AM - 04:00 PM', type: 'Training' },
            { date: '25', month: 'MAR', name: 'Inter-Club Taolu Championship', location: 'Mirpur Indoor Stadium', time: '09:00 AM - 06:00 PM', type: 'Competition' },
            { date: '10', month: 'APR', name: 'Referee Certification Exam', location: 'BWUF Head Office', time: '11:00 AM - 02:00 PM', type: 'Exam' },
            { date: '05', month: 'JUN', name: 'Summer Sanda Boot Camp', location: 'BKSP Savar', time: 'Multi-Day Event', type: 'Camp' }
        ]
    },
    'national-sports': {
        title: 'National Sports Events',
        subtitle: 'Domestic Arena',
        layout: 'event-grid',
        description: 'Details on the upcoming national Wushu championships, inter-club tournaments, and federation cups held within Bangladesh.',
        events: [
            { image: '/assets/images/gallery/gallery-1.png', category: 'Championship', title: '23rd National Wushu Championship', date: 'October 15, 2026', location: 'Dhaka', desc: 'The biggest domestic event gathering top athletes from all 64 districts.' },
            { image: '/assets/images/gallery/gallery-2.png', category: 'Tournament', title: 'Federation Cup 2026', date: 'August 08, 2026', location: 'Chattogram', desc: 'An elite invitational tournament featuring the top 8 affiliated clubs.' },
            { image: '/assets/images/gallery/gallery-3.png', category: 'Youth', title: 'National Youth Games Selection', date: 'November 20, 2026', location: 'Sylhet', desc: 'Scouting the next generation of Wushu stars under the age of 18.' }
        ]
    },
    'international-sports': {
        title: 'International Events',
        subtitle: 'Global Stage',
        layout: 'timeline',
        description: 'Information regarding BWUF participation in international events, Asian Games, South Asian Games, and World Wushu Championships.',
        events: [
            { year: '2026', title: 'Asian Games Preparation Camp', desc: 'High-altitude training for the selected national squad in preparation for the upcoming Asian Games.', status: 'Upcoming' },
            { year: '2027', title: 'World Wushu Championships', desc: 'The national team will travel to compete against over 100 countries in the premier globally sanctioned IWUF tournament.', status: 'Planned' },
            { year: '2028', title: 'South Asian (SAG) Games', desc: 'Defending our gold medals in both Taolu and Sanda categories within the South Asian region.', status: 'Future Target' }
        ]
    },
    'other-activities': {
        title: 'Other Important Activities',
        subtitle: 'Beyond the Arena',
        layout: 'event-grid',
        description: 'Seminars, grading exams, and special technical/referee training camps to foster growth across the martial arts community.',
        events: [
            { image: '/assets/images/gallery/gallery-4.png', category: 'Seminar', title: 'Anti-Doping Awareness Seminar', date: 'May 10, 2026', location: 'NSC Tower, Dhaka', desc: 'Educating athletes and coaches on WADA compliance and clean sports.' },
            { image: '/assets/images/gallery/gallery-5.png', category: 'Meeting', title: 'Annual General Meeting (AGM)', date: 'December 28, 2026', location: 'BWUF Secretariat', desc: 'End of year review, budget approvals, and committee voting.' }
        ]
    }
};

export default async function EventsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = eventsData[slug];

    if (!data) {
        return (
            <>
                <InnerBanner title="Not Found" subtitle="Error" bgImage="/assets/images/bg/bg-12.png" activePage="404" />
                <div className="ptb-120 text-center"><h1>Event Page Not Found</h1></div>
            </>
        );
    }

    return (
        <>
            <InnerBanner title={data.title} subtitle={data.subtitle} bgImage="/assets/images/bg/bg-12.png" activePage={data.title} />

            <section className="event-header-area ptb-80" style={{ backgroundColor: '#111' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center text-white">
                            <h2 className="section-title mb-3" style={{ color: '#fff' }}>{data.title}</h2>
                            <p className="text-white-50" style={{ fontSize: '18px' }}>{data.description}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calendar List Layout */}
            {data.layout === 'calendar-list' && (
                <section className="calendar-section pb-120 pt-80" style={{ backgroundColor: '#f9f9f9' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                {data.events.map((event: any, i: number) => (
                                    <div className="d-flex flex-column flex-md-row align-items-center bg-white p-4 mb-4 shadow-sm" key={i} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={i * 100} style={{ borderRadius: '10px', borderLeft: '5px solid #dc3545' }}>
                                        <div className="d-flex flex-column text-center justify-content-center mr-md-5 mb-3 mb-md-0" style={{ minWidth: '100px', height: '100px', backgroundColor: '#f4f4f4', borderRadius: '10px' }}>
                                            <span style={{ fontSize: '32px', fontWeight: 900, color: '#dc3545', lineHeight: '1' }}>{event.date}</span>
                                            <span style={{ fontSize: '16px', fontWeight: 700, color: '#333' }}>{event.month}</span>
                                        </div>
                                        <div className="flex-grow-1 text-center text-md-left">
                                            <span className="badge badge-danger mb-2 px-3 py-1">{event.type}</span>
                                            <h4 className="mb-2 text-dark font-weight-bold">{event.name}</h4>
                                            <div className="d-flex flex-wrap text-muted justify-content-center justify-content-md-start" style={{ gap: '15px', fontSize: '14px' }}>
                                                <span><i className="fas fa-map-marker-alt text-danger mr-2"></i>{event.location}</span>
                                                <span><i className="far fa-clock text-danger mr-2"></i>{event.time}</span>
                                            </div>
                                        </div>
                                        <div className="ml-md-4 mt-4 mt-md-0">
                                            <Link href="#0" className="btn--base" style={{ padding: '10px 25px' }}>Details</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Event Grid Layout */}
            {data.layout === 'event-grid' && (
                <section className="event-grid-section pb-120 pt-80" style={{ backgroundColor: '#f9f9f9' }}>
                    <div className="container">
                        <div className="row">
                            {data.events.map((event: any, i: number) => (
                                <div className="col-lg-4 col-md-6 mb-30" key={i} data-aos="zoom-in" data-aos-duration="1000">
                                    <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                                        <div className="position-relative" style={{ height: '220px' }}>
                                            <img src={event.image} alt={event.title} className="w-100 h-100" style={{ objectFit: 'cover' }} />
                                            <div className="position-absolute" style={{ top: '15px', left: '15px', backgroundColor: '#dc3545', color: 'white', padding: '5px 15px', borderRadius: '5px', fontSize: '12px', fontWeight: 'bold' }}>
                                                {event.category}
                                            </div>
                                        </div>
                                        <div className="card-body p-4 bg-white">
                                            <div className="d-flex justify-content-between text-muted mb-3" style={{ fontSize: '12px', fontWeight: 'bold' }}>
                                                <span><i className="far fa-calendar-alt text-danger mr-1"></i> {event.date}</span>
                                                <span><i className="fas fa-map-pin text-danger mr-1"></i> {event.location}</span>
                                            </div>
                                            <h5 className="card-title text-dark font-weight-bold mb-3">{event.title}</h5>
                                            <p className="card-text text-muted" style={{ fontSize: '14px' }}>{event.desc}</p>
                                        </div>
                                        <div className="card-footer bg-white border-0 px-4 pb-4 pt-0">
                                            <Link href="#0" className="text-danger font-weight-bold" style={{ textDecoration: 'none' }}>Read More <i className="fas fa-arrow-right ml-1"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Timeline Layout */}
            {data.layout === 'timeline' && (
                <section className="timeline-section pb-120 pt-80" style={{ backgroundColor: '#111' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="timeline-wrapper position-relative" style={{ borderLeft: '2px solid #dc3545', paddingLeft: '30px', margin: '0 20px' }}>
                                    {data.events.map((event: any, i: number) => (
                                        <div className="timeline-item mb-5 position-relative" key={i} data-aos="fade-left" data-aos-duration="1000">
                                            <div className="timeline-dot position-absolute" style={{ top: '0', left: '-41px', width: '20px', height: '20px', backgroundColor: '#dc3545', borderRadius: '50%', border: '4px solid #111' }}></div>
                                            <div className="d-flex align-items-center mb-2">
                                                <h3 className="text-white mb-0 mr-3 font-weight-bold" style={{ fontSize: '28px' }}>{event.year}</h3>
                                                <span className="badge badge-outline-danger px-2 py-1" style={{ border: '1px solid #dc3545', color: '#dc3545', borderRadius: '4px', fontSize: '12px' }}>{event.status}</span>
                                            </div>
                                            <h4 className="text-white mb-3" style={{ color: '#ccc' }}>{event.title}</h4>
                                            <p className="text-white-50" style={{ fontSize: '16px' }}>{event.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
