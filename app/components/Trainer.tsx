import React from 'react';
import Link from 'next/link';

export default function Trainer() {
    const trainers = [
        { name: "Randall Schwartz", title: "Women's Trainner", img: "trainer-1.png" },
        { name: "David Sherman", title: "Boxing Trainner", img: "trainer-2.png" },
        { name: "Earl Lopez", title: "Karate Trainner", img: "trainer-3.png" },
        { name: "James Gonzalez", title: "Women's Trainner", img: "trainer-4.png" },
    ];

    return (
        <section className="trainer-section ptb-120 bg-overlay-black bg_img" style={{ backgroundImage: "url('/assets/images/bg/bg-2.png')" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 text-center">
                        <div className="section-header white" data-aos="fade-up" data-aos-duration="1200">
                            <h2 className="section-title">OUR <span>EXPERT</span> TRAINNER</h2>
                            <p>Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mb-30-none">
                    {trainers.map((trainer, index) => (
                        <div key={index} className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-30">
                            <div className="trainer-item" data-aos="zoom-in" data-aos-duration="1200">
                                <div className="trainer-thumb">
                                    <img src={`/assets/images/trainer/${trainer.img}`} alt="trainer" />
                                    <div className="trainer-overlay">
                                        <div className="share-area">
                                            <div className="share-icon">
                                                <i className="fas fa-share-alt"></i>
                                            </div>
                                            <ul className="social-list">
                                                <li><a href="#0"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#0"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#0"><i className="fab fa-google-plus-g"></i></a></li>
                                                <li><a href="#0"><i className="fab fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="trainer-content">
                                    <h3 className="title"><Link href="/master-details">{trainer.name}</Link></h3>
                                    <span className="sub-title">{trainer.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="all-btn text-center mt-60">
                    <Link href="/master" className="btn--base">View All <i className="fas fa-arrow-right ml-2"></i></Link>
                </div>
            </div>
        </section>
    );
}
