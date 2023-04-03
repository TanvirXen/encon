import Link from 'next/link'
import React, { useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Image from 'next/image'

export function Navbar(props) {
    
    const [isMenuOpen, setisMenuOpen] = useState(false)

    return (
        <header>
            <Container>
                <Row>
                    <Col lg={2} md={2} className='d-flex justify-content-between align-items-center'>
                        <Link href="/" className='logo'>
                            <img src="/imgs/logo.png" alt='logo' />
                        </Link>
                        <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>setisMenuOpen(!isMenuOpen)}>
                            <g clip-path="url(#clip0_1_5290)">
                            <path d="M6 9.5H30" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 18.5H30" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 27.5H30" stroke="white" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_5290">
                            <rect width="36" height="36" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </Col>
                    <Col lg={10} md={10}>
                        <div className={isMenuOpen? 'header-middle' : 'header-middle menuHide'}>
                            <ul className='menu'>
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="/">Info</Link></li>
                                <li><Link href="/">Venue</Link></li>
                                <li><Link href="/">Visa</Link></li>
                                <li><Link href="/">News</Link></li>
                                <li><Link href="/">Contact</Link></li>
                            </ul>
                            <div className='header-right'>
                                <Button className='theme-btn'>Register now</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
