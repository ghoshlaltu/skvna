import logo from './logo.svg';
import s1 from './s-1.jpg';
import s2 from './s-2.jpg';
import s3 from './s-3.jpg';

import w1 from './widget-1.png';
import w2 from './widget-2.png';
import w3 from './widget-3.png';
import w4 from './widget-4.png';

import about from './about.png';

import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { MDBFooter } from 'mdb-react-ui-kit';

//loading app js
function App() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={s1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={s2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={s3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

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


    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        

        <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> New York, NY 10012, US
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@example.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> + 01 234 567 88
              </p>
              <p>
                <i className='fas fa-print me-3'></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>

    </>
  );
}

export default App;
