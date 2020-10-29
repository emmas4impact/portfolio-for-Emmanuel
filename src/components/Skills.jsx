import React, { useEffect } from 'react'
import { Container, Row, Col  } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"


const Skills = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return( 
        <div style={{background:'#272824', color: '#fff'}}>
            <Container>
                <Row>
                    <Col>
                        <h1 style={{textAlign: 'center', padding: '60px'}}>Skills I Use</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ textAlign: 'center'}}>

                    <div className='verticalLine'></div>
                       <h5>Scripting Languages/Frameworks:</h5>
                       <Row  className='img-skills'>
                            <Col><img alt="profile" data-aos='zoom-in' data-aos-duration="3000" src='html.png' /></Col>
                            <Col><img alt="profile" data-aos='zoom-in' data-aos-duration="3000" src='css.png' /></Col>
                            <Col><img alt="profile" data-aos='zoom-in' data-aos-duration="3000" src='node.png' /></Col>
                            <Col><img alt="profile" data-aos='zoom-in' data-aos-duration="3000" src='express.png' /></Col>
                        
                            <Col><img alt="profile" data-aos='zoom-in' data-aos-duration="3000" style={{width: '100px'}} src='ts.png' /></Col>
                            <Col><img alt="profile" style={{width: '130px'}} data-aos='zoom-in' data-aos-duration="3000" src='bootstrap.png' /></Col>
                           
                        </Row>
                        <Row  className='img-skills'>
                            <Col><img alt="profile" data-aos-easing='ease-in-shine' data-aos='zoom-in' data-aos-duration="3000" src='redus.png' /></Col>
                            <Col><img alt="profile" data-aos-easing='ease-in-shine' data-aos='zoom-in' data-aos-duration="3000" src='react.png' /></Col>
                            <Col><img alt="profile" data-aos-easing='ease-in-shine' data-aos='zoom-in' data-aos-duration="3000" src='java.png' /></Col>
        
                        </Row>

                       <h5>Test Tools:</h5>
                       <div className='verticalLine'>

                       </div>

                       <Row className='img-skills'>

                           <Col><img alt="profile" data-aos='zoom-in' data-aos-duration="3000" src='jira.png'/></Col>
                           <Col> <img alt="profile" data-aos='zoom-in' data-aos-duration="3000" src='bugzilla.png' /></Col>
                           <Col> <img alt="profile" data-aos='zoom-in' data-aos-duration="3000" src='hp.jpg' /></Col>
                           <Col><img alt="profile" data-aos='zoom-in' data-aos-duration="3000" src='junit.png' /></Col>
                           <Col> <img alt="profile" data-aos='zoom-in' data-aos-duration="3000" src='log.png' /></Col>
                           <Col><img alt="profile" data-aos='zoom-in' data-aos-duration="3000" src='meter.png'/></Col>
                        </Row>
                        <Row className='img-skills small-icon'>

                           <Col><img alt="profile" data-aos-easing='zoom-in' data-aos='fade-left' data-aos-duration="3000" src='se.png' /></Col>
                           <Col><img alt="profile" data-aos-easing='zoom-in' data-aos='fade-left' data-aos-duration="3000" src='testng.png' /></Col>
                           <Col><img alt="profile" data-aos-easing='zoom-in' data-aos='fade-right' data-aos-duration="3000" src='vs.png' /></Col>
                       </Row>
                      


                       <div className='verticalLine'></div>
                           <h5>Databases:</h5>
                           <Row className='img-skills'>
                              <Col><img alt="profile" style={{width: '160px'}} data-aos='zoom-in' data-aos-duration="3000" src='mongo.png' /></Col>
                              <Col><img alt="profile" style={{width: '210px'}} data-aos='zoom-in' data-aos-duration="3000" src='sql.png' /></Col>
                              <Col><img alt="profile" data-aos='zoom-in-right' data-aos-duration="3000" src='mysql.svg' /></Col>
                           </Row>
                      

                           

                       <div className='verticalLine'></div>
                       <h5>Cloud:</h5>
                       <Row  className='img-skills'>
                              <Col><img alt="profile" style={{width: '200px'}} data-aos='zoom-in' data-aos-duration="3000" src='heroku.png' /></Col>
                              <Col><img alt="profile" style={{width: '200px'}} data-aos='zoom-in' data-aos-duration="3000" src='azure.png' /></Col>
                       </Row>
                       <div className='verticalLine'></div>

                      
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Skills