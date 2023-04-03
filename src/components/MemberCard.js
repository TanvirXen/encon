import Link from 'next/link'
import React from 'react'
import { Col } from 'react-bootstrap'

export function MemberCard(props) {
    

    return (
        <Col lg={3} md={3} sm={6} xs={6}>
            <div className='single-member'>
                <div className='single-member-img'>
                    <img src='/imgs/member1.png' />
                </div>
                <div className='member-details'>
                    <span>Keynote Speaker</span>
                    <h5>Prof. Satya Prasad Majumder</h5>
                    <p>Honorable Vice Chancellor, BUET.</p>
                    <ul className='member-social'>
                        <li><Link href="/"><img src='/imgs/twitter-icon.svg'/></Link></li>
                        <li><Link href="/"><img src='/imgs/linkedin-icon.svg'/></Link></li>
                        <li><Link href="/"><img src='/imgs/dribble-icon.svg'/></Link></li>
                    </ul>
                </div>
            </div>
        </Col>
    )
}
