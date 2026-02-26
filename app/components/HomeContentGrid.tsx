import React from 'react';

export default function HomeContentGrid() {
    return (
        <section className="home-content-section ptb-80">
            <div className="container-fluid" style={{ padding: '0 5%' }}>
                <div className="row">
                    {/* President */}
                    <div className="col-lg-3 col-md-6 mb-30" style={{ border: '1px solid #ddd', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '80%', aspectRatio: '1/1', backgroundColor: '#f5f5f5', border: '1px solid #ccc', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: '#888' }}>Picture of the President</span>
                        </div>
                        <h4 className="title text-center" style={{ borderTop: '2px solid #e33', paddingTop: '15px', marginTop: 'auto', width: '100%' }}>
                            Message from the President
                        </h4>
                        <p className="text-center mt-3" style={{ fontSize: '14px', color: '#666' }}>
                            Welcome to the official website of the Bangladesh Wushu Federation (BWUF)...
                        </p>
                    </div>

                    {/* History */}
                    <div className="col-lg-3 col-md-6 mb-30" style={{ border: '1px solid #ddd', padding: '20px' }}>
                        <h4 className="title text-center" style={{ borderBottom: '2px solid #e33', paddingBottom: '15px', marginBottom: '20px' }}>
                            History of Wushu
                        </h4>
                        <p style={{ fontSize: '14px', color: '#666', textAlign: 'justify' }}>
                            Wushu, also known as Chinese martial arts, has a rich and long history...
                        </p>
                    </div>

                    {/* About */}
                    <div className="col-lg-3 col-md-6 mb-30" style={{ border: '1px solid #ddd', padding: '20px' }}>
                        <h4 className="title text-center" style={{ borderBottom: '2px solid #e33', paddingBottom: '15px', marginBottom: '20px' }}>
                            About BWUF
                        </h4>
                        <p style={{ fontSize: '14px', color: '#666', textAlign: 'justify' }}>
                            The Bangladesh Wushu Federation (BWUF) is the governing body for the sport of Wushu...
                        </p>
                    </div>

                    {/* Secretary */}
                    <div className="col-lg-3 col-md-6 mb-30" style={{ border: '1px solid #ddd', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '80%', aspectRatio: '1/1', backgroundColor: '#f5f5f5', border: '1px solid #ccc', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span style={{ color: '#888' }}>Picture of the General Secretary</span>
                        </div>
                        <h4 className="title text-center" style={{ borderTop: '2px solid #e33', paddingTop: '15px', marginTop: 'auto', width: '100%' }}>
                            Message from the General Secretary
                        </h4>
                        <p className="text-center mt-3" style={{ fontSize: '14px', color: '#666' }}>
                            Our vision is to expand the reach and depth of Wushu training across the nation...
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
