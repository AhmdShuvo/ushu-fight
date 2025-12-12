import React from 'react';

export default function Schedule() {
    return (
        <section id="schedule" className="schedule-section ptb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 text-center">
                        <div className="section-header" data-aos="fade-up" data-aos-duration="1200">
                            <h2 className="section-title">WEEKLY <span>TRAINING</span> SCHEDULE</h2>
                            <p>Consistency is the key to mastery. Join our structured classes designed to build your skills progressively from foundation to advanced levels.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center" data-aos="fade-up" data-aos-duration="1200">
                    <div className="col-xl-12">
                        <div className="schedule-area table-responsive">
                            <table className="custom-table bg-overlay-black bg_img" style={{ backgroundImage: "url('/assets/images/bg/bg-11.png')" }}>
                                <thead>
                                    <tr>
                                        <th>Routine</th>
                                        <th>10 am</th>
                                        <th>12 pm</th>
                                        <th>02 pm</th>
                                        <th>05 pm</th>
                                        <th>07 pm</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>Taolu Basics <span>10 am - 11 am</span></td>
                                        <td>Tai Chi <span>12 pm - 1 pm</span></td>
                                        <td className="blank-data"></td>
                                        <td>Sanda Sparring <span>05 pm - 06 pm</span></td>
                                        <td>Meditation <span>07 pm - 08 pm</span></td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td className="blank-data"><div className="dot"></div></td>
                                        <td>Shaolin Kung Fu <span>12 pm - 1 pm</span></td>
                                        <td>Weaponry <span>02 pm - 03 pm</span></td>
                                        <td className="blank-data"></td>
                                        <td><div className="dot">Flexibility <span>07 pm - 08 pm</span></div></td>
                                    </tr>
                                    <tr>
                                        <td>Monday</td>
                                        <td>Conditioning <span>10 am - 11 am</span></td>
                                        <td className="blank-data"></td>
                                        <td>Sanda Drills <span>02 pm - 03 pm</span></td>
                                        <td>Forms Review <span>05 pm - 06 pm</span></td>
                                        <td className="blank-data"></td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td className="blank-data"></td>
                                        <td className="active">Private Session <span>12 pm - 1 pm</span></td>
                                        <td className="blank-data"></td>
                                        <td>Advanced Forms <span>05 pm - 06 pm</span></td>
                                        <td className="blank-data"></td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td>Qi Gong <span>10 am - 11 am</span></td>
                                        <td>Self Defense <span>12 pm - 1 pm</span></td>
                                        <td>Kids Wushu <span>02 pm - 03 pm</span></td>
                                        <td className="blank-data"></td>
                                        <td>Open Mat <span>07 pm - 08 pm</span></td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td>Power Training <span>10 am - 11 am</span></td>
                                        <td className="blank-data"></td>
                                        <td>Partner Drills <span>02 pm - 03 pm</span></td>
                                        <td className="blank-data"></td>
                                        <td>Sparring Night <span>07 pm - 09 pm</span></td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td className="blank-data"><div className="dot"></div></td>
                                        <td>Demonstration <span>12 pm - 1 pm</span></td>
                                        <td className="blank-data"></td>
                                        <td>Review <span>05 pm - 06 pm</span></td>
                                        <td className="blank-data"><div className="dot"></div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
