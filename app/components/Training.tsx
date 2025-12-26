import React from 'react';

export default function Training() {
    return (
        <section id="training" className="training-section ptb-120">
            <div className="training-element-one my-paroller" data-paroller-factor="0.08" data-paroller-type="foreground" data-paroller-direction="horizontal">
                <img src="assets/images/element/element-1.png" alt="element" />
            </div>
            <div className="training-element-two my-paroller" data-paroller-factor="0.08" data-paroller-type="foreground" data-paroller-direction="horizontal">
                <img src="assets/images/element/element-2.png" alt="element" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section-header-wrapper">
                            <div className="section-header">
                                <h2 className="section-title">OUR <span>BOXING</span> TRAINING</h2>
                                <p>Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.</p>
                            </div>
                            <div className="slider-nav-area">
                                <div className="slider-prev">
                                    <i className="fas fa-chevron-left"></i>
                                </div>
                                <div className="slider-next">
                                    <i className="fas fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="training-slider-area">
                            <div className="training-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="training-item text-center">
                                            <div className="training-icon">
                                                <img src="assets/images/icon/icon-3.png" alt="icon" />
                                            </div>
                                            <div className="training-content">
                                                <h3 className="title"><a href="training-details.html">ENGLISH BOXING</a></h3>
                                                <p>Transport or transportation is the movement of humans, animals and goods from one location.</p>
                                            </div>
                                            <div className="training-overlay bg-overlay-base bg_img" style={{ backgroundImage: "url('assets/images/training/training-1.png')" }}>
                                                <div className="training-overlay-content">
                                                    <h3 className="title"><a href="training-details.html">ENGLISH BOXING TRAINING</a></h3>
                                                    <div className="training-btn">
                                                        <a href="training-details.html" className="btn--base active">Training Details <i className="fas fa-arrow-right ml-2"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="training-item text-center">
                                            <div className="training-icon">
                                                <img src="assets/images/icon/icon-4.png" alt="icon" />
                                            </div>
                                            <div className="training-content">
                                                <h3 className="title"><a href="training-details.html">PERSONAL BOXING</a></h3>
                                                <p>Transport or transportation is the movement of humans, animals and goods from one location.</p>
                                            </div>
                                            <div className="training-overlay bg-overlay-base bg_img" style={{ backgroundImage: "url('assets/images/training/training-1.png')" }}>
                                                <div className="training-overlay-content">
                                                    <h3 className="title"><a href="training-details.html">PERSONAL BOXING TRAINING</a></h3>
                                                    <div className="training-btn">
                                                        <a href="training-details.html" className="btn--base active">Training Details <i className="fas fa-arrow-right ml-2"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="training-item text-center">
                                            <div className="training-icon">
                                                <img src="assets/images/icon/icon-5.png" alt="icon" />
                                            </div>
                                            <div className="training-content">
                                                <h3 className="title"><a href="training-details.html">KICK BOXING</a></h3>
                                                <p>Transport or transportation is the movement of humans, animals and goods from one location.</p>
                                            </div>
                                            <div className="training-overlay bg-overlay-base bg_img" style={{ backgroundImage: "url('assets/images/training/training-1.png')" }}>
                                                <div className="training-overlay-content">
                                                    <h3 className="title"><a href="training-details.html">KICK BOXING TRAINING</a></h3>
                                                    <div className="training-btn">
                                                        <a href="training-details.html" className="btn--base active">Training Details <i className="fas fa-arrow-right ml-2"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
