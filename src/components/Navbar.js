import Link from 'next/link'
import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Image from 'next/image'

export function Navbar(props) {
    

    return (
        <header>
            <Container>
                <Row>
                    <Col lg={1} md={2}>
                        <Link href="/" className='logo'>
                            <img src="/imgs/logo.png" alt='logo' />
                        </Link>
                    </Col>
                    <Col lg={9} md={8}>
                        <ul className='menu'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">Info</Link></li>
                            <li><Link href="/">Venue</Link></li>
                            <li><Link href="/">Visa</Link></li>
                            <li><Link href="/">News</Link></li>
                            <li><Link href="/">Contact</Link></li>
                        </ul>
                    </Col>
                    <Col lg={2} md={2}>
                        <div className='header-right'>
                            <Button className='theme-btn'>Register now</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
