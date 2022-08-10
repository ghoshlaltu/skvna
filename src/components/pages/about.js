
import React, { Component, useState, useEffect } from 'react'
import './../../App.css';

import w1 from './../../widget-1.png';
import background from './../../background.jpg';
import w2 from './../../widget-2.png';
import w3 from './../../widget-3.png';
import w4 from './../../widget-4.png';

import about from './../../about.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import LoadingSpinner from './../../components/LoadingSpinner';

import axios from 'axios';


function About() {
    var sectionStyle = {
        width: '100%',
        height: '250px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${background})`
      };


    const [spinner, setSpinner] = useState(false);
    const [userData,setUserData]=useState([])

    
    useEffect(() => {
        // POST request using axios inside useEffect React hook
        const article = { id: '1' };
        setSpinner(true);
        axios.post('http://127.0.0.1:8000/api/get-service-category-by-id', article)
            .then(result => {
                console.log(result.data.data[0].heading);
                
                setUserData(result.data.data[0]);
                setSpinner(false);
               
              }).catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    
    }, []);
    console.log(userData);

    return (
        
        <>
         {spinner ? <LoadingSpinner /> : "" }
        <Container fluid style={ sectionStyle }>
        <Row>
            <Col className='text-center inner-title'> <h1 classname="inner-title">About {userData.heading}</h1></Col>
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
    );
}

export default About