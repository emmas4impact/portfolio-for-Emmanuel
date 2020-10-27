import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope, faMobile, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div style={{background: '#000', color: '#fff'}}>
            <Container style={{padding:'40px'}}>
                <Row style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Col lg={6} md={6} sm={12} >
                       <small>© 2020 Emmanuel Adedeji.</small>
                    </Col>
                    <Col lg={6} md={6} sm={12}  style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div><FontAwesomeIcon icon={faPhoneSquare} />  (358) 449-767777</div>
                        <div><FontAwesomeIcon icon={faEnvelope} />  emmans4destiny@gmail.com</div>
                        <a href='https://github.com/emmas4impact'><FontAwesomeIcon icon={faGithub} style={{color: '#fff'}}/></a>
                        <a href='https://www.linkedin.com/in/emmas4impact/'><FontAwesomeIcon icon={faLinkedin}  style={{color: '#fff'}} /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer