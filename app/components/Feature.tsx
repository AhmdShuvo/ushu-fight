import React from 'react';

export default function Feature() {
    const features = [
        { num: '01', title: 'EXPERT MASTERS', icon: 'icon-6.png', delay: 200 },
        { num: '02', title: 'TRADITIONAL VALUES', icon: 'icon-7.png', delay: 400 },
        { num: '03', title: 'MODERN FACILITIES', icon: 'icon-62.png', delay: 600 },
        { num: '04', title: 'DIVERSE PROGRAMS', icon: 'icon-63.png', delay: 800 },
    ];

    return (
        <section id="feature" className="feature-section feature-gray bg--gray ptb-120">
            <div className="feature-element" data-aos="fade-right" data-aos-duration="1200">
                <img src="/assets/images/element/element-3.png" alt="element" />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 text-center">
                        <div className="section-header" data-aos="fade-up" data-aos-duration="1200">
                            <h2 className="section-title">WHY CHOOSE <span>USHU</span></h2>
                            <p>We are dedicated to preserving the authenticity of Chinese martial arts while providing a supportive environment for students of all levels to grow and excel.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center mb-40-none">
                    {features.map((feature, index) => (
                        <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
                            <div className="feature-item" data-aos="zoom-in" data-aos-duration="1200">
                                <div className="feature-icon-area">
                                    <div className="feature-icon">
                                        <img src={`/assets/images/icon/${feature.icon}`} alt="icon" />
                                    </div>
                                    <div className="feature-number">
                                        <span>{feature.num}</span>
                                    </div>
                                </div>
                                <div className="feature-content">
                                    <h4 className="title">{feature.title}</h4>
                                    <p>Experience world-class training with a focus on holistic development.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
