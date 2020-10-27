import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const Portfolio = () => {
   return (
       <div style={{background: '#333333'}}>
           <Container style={{paddingTop: '40px', paddingBottom: '40px'}}>
               <h2 style={{textAlign: 'center', color: '#fff', paddingTop: '30px'}}>My Projects</h2>
               <Row style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '40px'}}>
                   <Col lg={4} md={4} sm={12}>
                    <Card className='card-style' data-aos="flip-left" data-aos-duration="3000">
                        <Card.Img className='img-for-card' src='linked.png'></Card.Img>
                        <img src='tack.png' style={{width: '50px'}} className='tack'/>
                        <Card.Body>LINKEDIN CLONE</Card.Body>
                        <Card.Footer style={{ display: 'flex', justifyContent: 'space-around', color: '#495058'}}>
                            <a href='https://github.com/emmas4impact/Backend-Linkedln'><FontAwesomeIcon icon={faGithub} style={{color: '#495058'}}/></a>
                            <a href='#'><FontAwesomeIcon icon={faLaptopCode} style={{color: '#495058'}}/></a>
                        </Card.Footer>
                    </Card>
                   </Col>
                   <Col lg={4} md={4} sm={12}>
                    <Card className='card-style' data-aos="flip-left" data-aos-duration="3000">
                        <Card.Img className='img-for-card' src='amazon.png'></Card.Img>
                        <img src='tack.png' style={{width: '50px'}} className='tack'/>

                        <Card.Body>AMAZON CRUDS BACKEND</Card.Body>
                        <Card.Footer  style={{ display: 'flex', justifyContent: 'space-around', color: '#495058'}}>
                            <a href='#'><FontAwesomeIcon icon={faGithub} style={{color: '#495058'}}/></a>
                            <a href='#'><FontAwesomeIcon icon={faLaptopCode} style={{color: '#495058'}}/></a>
                        </Card.Footer>
                    </Card>
                   </Col>
                   <Col lg={4} md={4} sm={12}>
                   <Card className='card-style' data-aos="flip-right" data-aos-duration="3000">
                        <Card.Img className='img-for-card' src='netflix.jpg'></Card.Img>
                        <img src='tack.png' style={{width: '50px'}} className='tack'/>

                        <Card.Body>NETFLIX CLONE</Card.Body>
                        <Card.Footer style={{display: 'flex', justifyContent: 'space-around', color: '#495058'}}>
                            <a href='#'><FontAwesomeIcon icon={faGithub} style={{color: '#495058'}}/></a>
                            <a href='https://rawcdn.githack.com/emmas4impact/Benchmark-2/643a5f9c208b2041599ebb6b51582161ac3fece6/index.html'><FontAwesomeIcon icon={faLaptopCode} style={{color: '#495058'}}/></a>
                        </Card.Footer>
                    </Card>
                </Col>
               </Row>

               <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
               <Col lg={4} md={4} sm={12}>
                   <Card className='card-style' data-aos="flip-left" data-aos-duration="3000">
                        <Card.Img  className='img-for-card' src='rent.jpg'></Card.Img>
                        <img src='tack.png' style={{width: '50px'}} className='tack'/>

                        <Card.Body>Solo Capstone</Card.Body>
                        <Card.Footer style={{display: 'flex', justifyContent: 'space-around', color: '#495058'}}>
                            <a href='#'><FontAwesomeIcon icon={faGithub} style={{color: '#495058'}}/></a>
                            <a href='https://bridge-estate.herokuapp.com/properties'><FontAwesomeIcon icon={faLaptopCode} style={{color: '#495058'}}/></a>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={12}>
                   <Card className='card-style' data-aos="flip-left" data-aos-duration="3000">
                        <Card.Img className='img-for-card' src='spotify.png'></Card.Img>
                        <img src='tack.png' style={{width: '50px'}} className='tack'/>

                        <Card.Body>Spotify</Card.Body>
                        <Card.Footer style={{display: 'flex', justifyContent: 'space-around', color: '#495058'}}>
                            <a href='https://github.com/emmas4impact/BuildWeek-2'><FontAwesomeIcon icon={faGithub} style={{color: '#495058'}}/></a>
                            <a href='https://rawcdn.githack.com/emmas4impact/Buildweek1-Spotify-Clone/8fb52a0d4731267f7a334640dd7397bb658e3818/login.html'><FontAwesomeIcon icon={faLaptopCode} style={{color: '#495058'}}/></a>
                        </Card.Footer>
                    </Card>
                </Col>
                {/* <Col>
                   <Card className='card-style'>
                        <Card.Img className='img-for-card' src='netflix.jpg'></Card.Img>
                        <Card.Body>NETFLIX CLONE</Card.Body>
                        <Card.Footer style={{display: 'flex', justifyContent: 'space-around', color: '#495058'}}>
                            <a href='#'><FontAwesomeIcon icon={faGithub} style={{color: '#495058'}}/></a>
                            <a href='#'><FontAwesomeIcon icon={faLaptopCode} style={{color: '#495058'}}/></a>
                        </Card.Footer>
                    </Card>
                </Col> */}
               </Row>
           </Container>
       </div>
   )    
}

export default Portfolio