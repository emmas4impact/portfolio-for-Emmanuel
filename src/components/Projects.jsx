import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CountUp from 'react-countup';


const Projects = () => {
    return(
        <div style={{background: '#F2F2F2', marginTop: '60px'}}>
            <Container style={{padding: '60px 20px'}}>
                <Row style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Col lg={6} md={6} sm={12} style={{textAlign: 'center',  marginBottom: '30px'}}>
                        <CountUp end={50} duration={8} style={{fontSize : '80px'}}/>
                    </Col>
              
                    <Col lg={6} md={6} sm={12} >
                      <h2>PROJECTS COMPLETED</h2>
                      <p>Over the past ten years, I have completed over 50 full stack projects using React.js, Java, JS, PosrgreSQL, MongoDB, Node.js, Express.js, Heroku, Git, Github, HTML, CSS, Webpack</p>
                    </Col>
                </Row>

             

            </Container>
        </div>
    )
}

export default Projects