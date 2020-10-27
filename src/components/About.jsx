import React, { Component, useEffect } from 'react'
import { Container, Row, Col  } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"


const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return( 
        <div>
            <Container>
                <Row>
                    <Col  style={{padding: '30px'}}>
                        <h1 style={{textAlign: 'center', paddingTop: '30px'}}>About</h1>
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Col lg={6} md={6} sm={12} style={{paddingBottom: '30px', textAlign:'center'}}><img className='borderPicture' style={{borderRadius: '10px', width: '200px', border:'5px solid #fff'}} src='ema.jpeg'/></Col>
                
                    <Col  data-aos="fade-left" data-aos-duration="1000" lg={6} md={6} sm={12} style={{ position:'relative', textAlign: 'left', padding: '25px', background: '#131F55', color: '#fff', borderRadius: '10px'}}>
                    <h4>Hi. I'm Emmanuel Adedeji, Test Analyst and Web Developer professional. Nice to meet you.</h4>
                    <h6>Never stop learning" is my mantra and I've proved it even to myself taking every opportunity that can lead me to learn something more. My excellent understanding of Software Development Lifecycle and the role of QA, will boost your projects, and thanks to my organizational and intercommunication skills I will definetly be a valuable team player.</h6>
                    <img className='cv' style={{position: 'absolute', width: '50px', right: '-10px', bottom: '-10px'}} src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNTYgMGMtMTQxLjE2NDA2MiAwLTI1NiAxMTQuODM1OTM4LTI1NiAyNTZzMTE0LjgzNTkzOCAyNTYgMjU2IDI1NiAyNTYtMTE0LjgzNTkzOCAyNTYtMjU2LTExNC44MzU5MzgtMjU2LTI1Ni0yNTZ6bTAgMCIgZmlsbD0iIzIxOTZmMyIvPjxwYXRoIGQ9Im0zNjggMjc3LjMzMjAzMWgtOTAuNjY3OTY5djkwLjY2Nzk2OWMwIDExLjc3NzM0NC05LjU1NDY4NyAyMS4zMzIwMzEtMjEuMzMyMDMxIDIxLjMzMjAzMXMtMjEuMzMyMDMxLTkuNTU0Njg3LTIxLjMzMjAzMS0yMS4zMzIwMzF2LTkwLjY2Nzk2OWgtOTAuNjY3OTY5Yy0xMS43NzczNDQgMC0yMS4zMzIwMzEtOS41NTQ2ODctMjEuMzMyMDMxLTIxLjMzMjAzMXM5LjU1NDY4Ny0yMS4zMzIwMzEgMjEuMzMyMDMxLTIxLjMzMjAzMWg5MC42Njc5Njl2LTkwLjY2Nzk2OWMwLTExLjc3NzM0NCA5LjU1NDY4Ny0yMS4zMzIwMzEgMjEuMzMyMDMxLTIxLjMzMjAzMXMyMS4zMzIwMzEgOS41NTQ2ODcgMjEuMzMyMDMxIDIxLjMzMjAzMXY5MC42Njc5NjloOTAuNjY3OTY5YzExLjc3NzM0NCAwIDIxLjMzMjAzMSA5LjU1NDY4NyAyMS4zMzIwMzEgMjEuMzMyMDMxcy05LjU1NDY4NyAyMS4zMzIwMzEtMjEuMzMyMDMxIDIxLjMzMjAzMXptMCAwIiBmaWxsPSIjZmFmYWZhIi8+PC9zdmc+" />
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About