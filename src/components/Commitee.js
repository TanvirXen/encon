import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { MemberCard } from './MemberCard'

export function Commitee(props) {
    

    return (
        <section className='commitee'>
            <Container>
                <div className='commitee-heading'>
                    <h2 className='heading text-center'>Committee of ENCON</h2>
                    <p className='text-center'>At this year&apos;s conference, we&apos;re delighted to feature speakers from a diverse range of backgrounds, including energy experts, academics, and industry leaders. They&apos;ll be sharing their expertise on a wide range of topics, from emerging technologies to policy developments.</p>
                </div>
                <Row>
                    <MemberCard/>
                    <MemberCard/>
                    <MemberCard/>
                    <MemberCard/>
                    <MemberCard/>
                    <MemberCard/>
                    <MemberCard/>
                    <MemberCard/>
                </Row>
            </Container>
        </section>
    )
}
