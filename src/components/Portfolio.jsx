import React, { Component } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const Portfolio = () => {
   return (
       <div>
           <Container style={{padding : '40px'}}>
               <h2 style={{textAlign: 'center'}}>My Projects</h2>
               <Row style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '40px'}}>
                   <Col>
                    <Card className='card-style'>
                        <Card.Img><img src='linkedin.png'/></Card.Img>
                        <Card.Body>LINKEDIN CLONE</Card.Body>
                        <Card.Footer style={{display: 'flex', justifyContent: 'space-around', color: '#495058'}}>
                            <a href='#'><FontAwesomeIcon icon={faGithub} style={{color: '#495058'}}/></a>
                            <a href='#'><FontAwesomeIcon icon={faLaptopCode} style={{color: '#495058'}}/></a>
                        </Card.Footer>
                    </Card>
                   </Col>
                   <Col>
                    <Card className='card-style'>
                        <Card.Img><img src='amazon.png'/></Card.Img>
                        <Card.Body>AMAZON CRUDS BACKEND</Card.Body>
                        <Card.Footer style={{display: 'flex', justifyContent: 'space-around', color: '#495058'}}>
                            <a href='#'><FontAwesomeIcon icon={faGithub} style={{color: '#495058'}}/></a>
                            <a href='#'><FontAwesomeIcon icon={faLaptopCode} style={{color: '#495058'}}/></a>
                        </Card.Footer>
                    </Card>
                   </Col>
                   <Col>
                   <Card className='card-style'>
                        <Card.Img><img src='netflix.png'/></Card.Img>
                        <Card.Body>NETFLIX CLONE</Card.Body>
                        <Card.Footer style={{display: 'flex', justifyContent: 'space-around', color: '#495058'}}>
                            <a href='#'><FontAwesomeIcon icon={faGithub} style={{color: '#495058'}}/></a>
                            <a href='#'><FontAwesomeIcon icon={faLaptopCode} style={{color: '#495058'}}/></a>
                        </Card.Footer>
                    </Card>
                </Col>
               </Row>
           </Container>
       </div>
   )    
}

export default Portfolio