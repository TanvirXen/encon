import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useState } from 'react';

export function Services(props) {
    const [scope, setscope] = useState(true);
    const [highlights, sethighlights] = useState(false);
    const [details1, setdetails1] = useState(false);
    const [details2, setdetails2] = useState(false);
    const [details3, setdetails3] = useState(false);

    const handleScope = () =>{
        setscope(true);
        sethighlights(false);
        setdetails1(false);
        setdetails2(false);
        setdetails3(false);
      }
      const handleHighlights = () =>{
        setscope(false);
        sethighlights(true);
        setdetails1(false);
        setdetails2(false);
        setdetails3(false);
      }
      const hanfleDetails1 = () =>{
        setscope(false);
        sethighlights(false);
        setdetails1(true);
        setdetails2(false);
        setdetails3(false);
      }
      const handleDetails2 = () =>{
        setscope(false);
        sethighlights(false);
        setdetails1(false);
        setdetails2(true);
        setdetails3(false);
      }
      const handleDetails3 = () =>{
        setscope(false);
        sethighlights(false);
        setdetails1(false);
        setdetails2(false);
        setdetails3(true);
      }

    return (
        <section className='service-area'>
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <div className='service-left'>
                            <p className='title'>Reason to join</p>
                            <h2 className='heading' style={{maxWidth:"384px"}}>
                                All you need to know about ENCON
                            </h2>
                        </div>
                    </Col>
                    <Col lg={6} md={6} className='mb-4'>
                        <div className='service-right mt-5'>
                            <p>The shift towards renewable energy is crucial for achieving global sustainability goals. This conference is an opportunity for leaders in the energy sector to share their insights and experiences in developing and implementing sustainable energy solutions.</p>
                        </div>
                    </Col>
                    <Col lg={12} md={12}>
                        <div className='service-bottom mt-5'>
                            <div className='tabs'>
                                <ul className='tabs-btn d-flex'>
                                    <li onClick={handleScope} className={scope? "active" : ""}>Scope</li>
                                    <li onClick={handleHighlights} className={highlights? "active" : ""}>Highlights</li>
                                    <li onClick={hanfleDetails1} className={details1? "active" : ""}>Details</li>
                                    <li onClick={handleDetails2} className={details2? "active" : ""}>Details</li>
                                    <li onClick={handleDetails3} className={details3? "active" : ""}>Details</li>
                                </ul>
                                <div className='tab-wraps'>
                                    <div className='wrap' style={scope? {"display":"block"}: {"display":"none"}}>
                                        <div className='service-details'>
                                            <Row>
                                                <Col lg={3} md={4}>
                                                    <div className='service-info'>
                                                        <h3 className='subheading'>Scope of this event</h3>
                                                        <p>The shift towards renewable energy is crucial for achieving global sustainability goals. </p>
                                                    </div>
                                                </Col>
                                                <Col lg={9} md={8}>
                                                    <ul className='item-listing'>
                                                        <li>
                                                            <img src='/imgs/Check-icon.svg'/>
                                                            AI in energy application 
                                                        </li>
                                                        <li>
                                                            <img src='/imgs/Check-icon.svg'/>
                                                            Alternative and renewable energy
                                                        </li>
                                                        <li>
                                                            <img src='/imgs/Check-icon.svg'/>
                                                            Climate change and decarbonization 
                                                        </li>
                                                        <li>
                                                            <img src='/imgs/Check-icon.svg'/>
                                                            Energy and 4th IR 
                                                        </li>
                                                        <li>
                                                            <img src='/imgs/Check-icon.svg'/>
                                                            Energy and environment 
                                                        </li>
                                                        <li>
                                                            <img src='/imgs/Check-icon.svg'/>
                                                            AI in energy application 
                                                        </li>
                                                        <li>
                                                            <img src='/imgs/Check-icon.svg'/>
                                                            Energy efficiency and conservation

                                                        </li>
                                                        <li>
                                                            <img src='/imgs/Check-icon.svg'/>
                                                            Energy in transportation systems

                                                        </li>
                                                        <li>
                                                            <img src='/imgs/Check-icon.svg'/>
                                                            AI in energy application 
                                                        </li>
                                                        <li>
                                                            <img src='/imgs/Check-icon.svg'/>
                                                            AI in energy application 
                                                        </li>
                                                        <li>
                                                            <img src='/imgs/Check-icon.svg'/>
                                                            AI in energy application 
                                                        </li>
                                                        <li>
                                                            <img src='/imgs/Check-icon.svg'/>
                                                            AI in energy application 
                                                        </li>
                                                        <li>
                                                            <img src='/imgs/Check-icon.svg'/>
                                                            AI in energy application 
                                                        </li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                    <div className='wrap' style={highlights? {"display":"block"}: {"display":"none"}}>Highlights</div>
                                    <div className='wrap' style={details1? {"display":"block"}: {"display":"none"}}>Details1</div>
                                    <div className='wrap' style={details2? {"display":"block"}: {"display":"none"}}>Details2</div>
                                    <div className='wrap' style={details3? {"display":"block"}: {"display":"none"}}>Details3</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
