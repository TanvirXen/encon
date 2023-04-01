import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'

export function Cta(props) {
    

    return (
        <section className='cta-area'>
            <Container>
                <Row>
                    <Col lg={7} md={6}>
                        <div className='cta-left'>
                            <p className='title'>Reason to join</p>
                            <h2 className='heading'>One of the most anticipated energy conferences of the year</h2>
                        </div>
                    </Col>
                    <Col lg={5} md={6}>
                        <div className='cta-right'>
                            <p>Join us for three days of inspiration, education, and collaboration. This year&apos;s conference brings together leading experts from around the globe to share their insights and expertise.</p>
                            <div className='action-btns'>
                                <Link href="/" className='btn theme-btn'>Register now</Link>
                                <Link href="/" className='btn theme-btn-alt'>Call for paper</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='slider-img'>
                <div className='single-slide'>
                    <img src='/imgs/slide1.png' />
                </div>
                <div className='single-slide'>
                    <img src='/imgs/slide2.png' />
                </div>
                <div className='single-slide'>
                    <img src='/imgs/slide3.png' />
                </div>
                <div className='single-slide'>
                    <img src='/imgs/slide4.png' />
                </div>
            </div>
        </section>
    )
}
