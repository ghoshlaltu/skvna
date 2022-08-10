
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

import LoadingSpinner from '../LoadingSpinner';

import axios from 'axios';


function Contact() {
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
            <Col className='text-center inner-title'> <h1 classname="inner-title">Contact Us</h1></Col>
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
                    <form >
                        <Row>
                            <Col xs={6}>
                            <label>Name</label>
                                <input className='form-control' defaultValue="" />
                            </Col>
                            <Col xs={6}>
                                <label>Phone</label>
                                <input className='form-control' />
                            </Col>
                            <Col xs={6}>
                                <label>Email</label>
                                <input className='form-control'  />
                            </Col>
                            <Col xs={6}>
                                <label>Gender</label>
                                <select className='form-control' >
                                <option value="">select</option>
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                                </select>
                            </Col>

                            <Col xs={6} className="pt-3">
                            <input className='btn btn-primary' type="submit" />
                            </Col>
                        </Row>
                    </form>
                </Col>
            
            </Row>
            </Container>
        </>
    );
}

export default Contact