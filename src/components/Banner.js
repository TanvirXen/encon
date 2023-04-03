import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export function Banner(props) {
    

    return (
        <div className='hero-area'>
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        <div className='hero-inner'>
                            <h1>Welcome to the Energy Conference 2023!</h1>
                            <p>The 1st Energy Conference 2023: National and Global Issues (ENCON23) will be held in Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh on 14-15th  December 2023. Researchers are invited to submit two page (A4 size) extended abstracts addressing innovative research in the broad fields of energy.</p>
                            <ul>
                                <li>
                                    <img src='/imgs/location-icon.svg' />
                                    <p>BANGLADESH UNIVERSITY OF ENGINEERING AND TECHNOLOGY (BUET), DHAKA, BANGLADESH</p>
                                </li>
                                <li>
                                    <img src='/imgs/calender-icon.svg' />
                                    <p>14-15 December 2023</p>
                                </li>
                            </ul>
                            <div className='action-btns'>
                                <Link href="/" className='btn theme-btn'>Register now</Link>
                                <Link href="/" className='btn theme-btn-alt'>Call for paper</Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className='hero-img'>
                            <img src='/imgs/hero-img.png' />
                       </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
