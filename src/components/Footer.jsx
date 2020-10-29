import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope,  faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div style={{background: '#000', color: '#fff'}}>
            <Container style={{padding:'40px'}}>
                <Row style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Col lg={4} md={4} sm={12} >
                       <small>© 2020 Emmanuel Adedeji.</small>
                    </Col>
                    <Col lg={8} md={8} sm={12} style={{textAlign:'center'}}>
                        <Row  style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}> 
                        <Col lg={4} md={4} sm={12}><FontAwesomeIcon icon={faPhoneSquare} /> <a href="/"style={{color: '#fff'}} className='ml-2'> (358) 449-767777</a></Col>
                        <Col lg={4} md={4} sm={12} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><FontAwesomeIcon icon={faEnvelope}/> <a href="/" style={{color: '#fff'}} className='ml-2'>emmans4destiny@gmail.com</a></Col>
                        <Col lg={4} md={4} sm={12}><a href='https://github.com/emmas4impact'><FontAwesomeIcon icon={faGithub} style={{color: '#fff', marginRight: '20px'}}/></a>
                        <a href='https://www.linkedin.com/in/emmas4impact/'><FontAwesomeIcon icon={faLinkedin}  style={{color: '#fff'}} /></a></Col>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer