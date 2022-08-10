import React from 'react'

import w1 from './../widget-1.png';
import w2 from './../widget-2.png';
import w3 from './../widget-3.png';
import w4 from './../widget-4.png';

import about from './../about.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Home() {
    return (
        <>
        <Container fluid >
            <Row style={{justifyContent:'center'}}>
                <Col sm={12} classname="text-center">
                {/* <h1 classname="text-center">Search App</h1> */}
                <marquee style={{ color: 'red', fontSize: '2em' }}>❋❋❋ An abode for spiritual awakening and redressal of grievances, Sai Geetha Ashram ❋❋❋ </marquee>
                <h2>GURU POURNIMA MAHOTSAVAM @ 2022, VYASA PUJA, PRAVACHAN & DARSHAN</h2>
                </Col>
            </Row>
            </Container>

            
            <Container classname="pt-5" style={{paddingTop: '50px'}}>
            <Row>
                <Col sm={3} >
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={w1} />
                    <Card.Body>
                    <Card.Title>About Ashram</Card.Title>
                    <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={3} >
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={w2} />
                    <Card.Body>
                    <Card.Title>Divine Trees</Card.Title>
                    <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={3} >
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={w3} />
                    <Card.Body>
                    <Card.Title>Health Sevas</Card.Title>
                    <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm={3} >
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={w4} />
                    <Card.Body>
                    <Card.Title>Annual Festivities</Card.Title>
                    <Button variant="primary">Read More</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
            


            <Container classname="pt-5" style={{paddingTop: '50px'}}>
            <Row>
                <Col sm={6} >
                <Card >
                    <Card.Img variant="top" src={about} />
                </Card>
                </Col>
                <Col sm={6} >
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        The Dr. Sai Kumar Vyadhi Nivarana Ashram was founded by Pujya Sadguru Sri Sai Kumarji in the year 1973 and established in Padmarao Nagar, Secunderabad in 1982.
                    </Card.Text>
                    <Card.Text>
                        Pujya Sadguruji is an ardent devotee of Shirdi Sai Baba, an Ayurvedic Doctor, who works tirelessly towards the physical, mental and spiritual well-being of all. Sadguruji strongly believes in healing the body, mind by appropriately adapting Spirituality, Ayurveda, Naturopathy towards a healthier way of living.
                    </Card.Text>
                    <Card.Text>
                        During childhood, Sadguruji often had a vision of Shirdi Sai Baba with a face quite young appearing to be in his forties sitting in a hall completely structured with stone. As a result, a 6ft. marble idol of Sai Baba was installed in the Sai Darbar of Dr. Sai Kumar Vyadhi Nivarana Ashram on Thursday, May 6th 1982 amidst colorful rituals performed for nine consecutive days. Since then Sai Baba is showering His blessings to hundreds of thousands of devotees who visit the sanctum sanctorum.
                    </Card.Text>
                    <Card.Text>
                        You are invited to visit the temple or opt to register for Seva online. Please select the Seva and enter all your details
                    </Card.Text>
                    <Card.Text>
                        <strong>NOTE: </strong> Interested devotees may perform Homams or any other seva on special occasions such as Birthday, Wedding Anniversary

                    </Card.Text>
                </Card.Body>
                </Col>
            
            </Row>
            </Container>
        </>
    )
}

export default Home