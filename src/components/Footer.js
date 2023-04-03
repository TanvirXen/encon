import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export function Footer(props) {
    

    return (
        <section className='footer'>
            <Container>
                <Row>
                    <Col lg={6} md={6}>
                        <div className='footer-left'>
                            <Link href="/">
                                <img src="/imgs/logo.png" />
                            </Link>
                            <p>
                            Enabling and Empowering individuals to achieve their dreams.<br/>

                            Redefining the current business process through data-driven solutions to solve emerging challenges. Providing sustainable, user-centric, and comprehensive global solutions.<br/>

                            Copyright 2022 Panorama Advisory
                            </p>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <Row className='footer-right'>
                            <Col lg={4} md={4} sm={4} xs={6}>
                                <div className='single-footer'>
                                    <h5>Assessment </h5>
                                    <Link href="/">Business Assesment</Link>
                                </div>
                                <div className='single-footer'>
                                    <h5>Solutions </h5>
                                    <Link href="/">B2B Platform</Link>
                                    <Link href="/">Fractional CFO</Link>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={6}>
                                <div className='single-footer'>
                                    <h5>Consulting </h5>
                                    <Link href="/">Training</Link>
                                    <Link href="/">Research</Link>
                                    <Link href="/">Consulting</Link>
                                    <Link href="/">Consulting</Link>
                                </div>
                                <div className='single-footer'>
                                    <h5>Capital </h5>
                                    <Link href="/">VC Network</Link>
                                </div>
                            </Col>
                            <Col lg={4} md={4} sm={4} xs={6}>
                                <div className='single-footer'>
                                    <h5>Consulting </h5>
                                    <Link href="/">Training</Link>
                                    <Link href="/">Research</Link>
                                    <Link href="/">Consulting</Link>
                                    <Link href="/">Consulting</Link>
                                </div>
                                <div className='single-footer'>
                                    <h5>Company </h5>
                                    <Link href="/">About</Link>
                                    <Link href="/">Careers</Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
