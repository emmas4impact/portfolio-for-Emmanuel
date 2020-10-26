import React, { Component, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Typist from 'react-typist';
import AOS from "aos";
import "aos/dist/aos.css"

const Heading = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return(
     
        <div className='head'>
           

            <Container className='blurNone'>
                <Row style={{paddingTop: '50px'}}>
                      <Typist cursor={{ show: false }}><Col><h5 style={{letterSpacing: '1px'}}>Emmanuel Adedeji</h5></Col>
                    </Typist>
                </Row>
                <Row style={{textAlign:'center', marginTop:  '80px'}}>
                    <Col>  
                    
                    <h1 data-aos='fade-down' data-aos-duration="3000" className='fontHead'>Not Your</h1>
                    <h1  data-aos='fade-down' data-aos-duration="2000" className='fontHead'>Average</h1>
                    <h1  data-aos='fade-up' data-aos-duration="2000" className='fontHead'>Full Stack</h1>
                    <h1  data-aos='fade-up' data-aos-duration="3000" className='fontHead'>Web Developer</h1> 
                 
                    <h4 style={{letterSpacing: '3px', marginTop: '20px'}}>Get ready to turn your <i>ideas</i> into <i>reality</i></h4>
                </Col>
                </Row>
                <Row>
                    <Col style={{textAlign: 'center', marginTop: '40px'}}>
                         <FontAwesomeIcon data-aos='zoom-out-up' data-aos-easing='ease-in-out-back' data-aos-duration="2000" icon={faAngleDown}  style={{ padding: '5px', width: '50px', height: '50px', border: '1px solid #fff', borderRadius: '40px'}}/>
                    </Col>
                </Row>
            </Container>
        
        </div>
        
      
      
    )
}

export default Heading;