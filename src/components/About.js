import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export function About(props) {
    

    return (
        <section className='about-us'>
            <Container>
                <Row>
                    <Col lg={6} md={6} className='d-flex align-items-center'>
                        <div className='videosection'>
                            <iframe width="100%" height="377" src="https://www.youtube.com/embed/qSWm_nprfqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className='about-info'>
                            <p className='title'>Reason to join</p>
                            <h2 className='heading'>Why you should attend encon 2023</h2>
                            <p>The shift towards renewable energy is crucial for achieving global sustainability goals. This conference is an opportunity for leaders in the energy sector to share their insights and experiences in developing and implementing sustainable energy solutions. By collaborating and exchanging ideas, we can accelerate the transition to a cleaner, more sustainable energy system.</p>
                            <Link href="/" className='btn theme-btn'>View more</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
