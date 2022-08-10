
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
import ListGroup from 'react-bootstrap/ListGroup';


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
            <Col className='text-center inner-title'> <h1 classname="inner-title">Procedure</h1></Col>
        </Row>
        </Container>
                 

            <Container classname="pt-5" style={{paddingTop: '50px'}}>
            <Row>
                <Col sm={12} >
                    <h2 className='text-center'>Registration Procedure:</h2>
                </Col>
                <hr/>
                <Col md={{ span: 8, offset: 2 }}>
                   
                    <ListGroup>
                        <ListGroup.Item>1. Select the Seva, that you want to perform, and Click on the ‘Register’ button</ListGroup.Item>

                        <ListGroup.Item>2. Scan the QR code using the Google Pay app on your phone. Alternatively, you could also enter the UPI ID in the Google Pay app on your phone.</ListGroup.Item>

                        <ListGroup.Item>3. Enter the amount as shown on the Registration page and complete the transaction</ListGroup.Item>

                        <ListGroup.Item>4. Note the Transaction ID, generated on your successful payment.</ListGroup.Item>

                        <ListGroup.Item>5. Enter the details in the registration form.</ListGroup.Item>

                        <ListGroup.Item>6. All the fields are mandatory</ListGroup.Item>

                        <ListGroup.Item>7. In the Transaction ID field, please mention the Transaction ID from the payment details</ListGroup.Item>

                        <ListGroup.Item>8. In the Write Something field, please mention, if you would like to perform the Seva personally at the temple or you would like the temple to do it on your behalf.</ListGroup.Item>

                        <ListGroup.Item>9. Click on Submit</ListGroup.Item>
                        
                        <ListGroup.Item>10. Please note the Registration Code generated after successful registration</ListGroup.Item>
                    </ListGroup>
                    <hr/>
                    <h5>NOTE</h5>
                    <ListGroup>
                        <ListGroup.Item>1. Devotees, who opt for the Online Seva, shall receive the Prasadam via courier. (Subject to change due to Covid-19)</ListGroup.Item>

                        <ListGroup.Item>2. Devotees, who would like to perform the Seva at the temple, are requested to quote the Registration Code at the temple premises.</ListGroup.Item>
                        <br/><br/>
                    </ListGroup>
                </Col>
            
            </Row>
            </Container>
        </>
    );
}

export default About