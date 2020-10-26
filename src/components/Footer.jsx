import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <div style={{background: '#000', color: '#fff'}}>
            <Container style={{padding:'40px'}}>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                       <small>© 2020 Emmanuel Adedeji.</small>
                    </Col>
                    <Col lg={6} md={6} sm={12}>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer