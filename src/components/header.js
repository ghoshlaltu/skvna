
import React, { Component, useState, useEffect } from 'react'

import './../App.css';

import { Link } from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Header(props) {
    const ServicesCategories = useState(props.ServiceCategoryRes);
    // console.log(ServicesCategories);

    return (
        
        <>
        {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link ><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="About" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1"><Link to="/about">About</Link></NavDropdown.Item>
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
        </Navbar> */}

    <div className="APP">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container-fluid">
      <a href="#" className="navbar-brand font-weight-bold d-block d-lg-none">SKVNA</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navbarSupportedContent" className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
         
          <li className="nav-item"><a href="javascript:void(0);" className="nav-link font-weight-bold text-uppercase"><Link to="/">Home</Link></a></li>
          <li className="nav-item dropdown megamenu"><a id="megamneu" href="#" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" className="nav-link dropdown-toggle font-weight-bold text-uppercase dropdown-toggle">About Us</a>
              <div aria-labelledby="dropdownMenuButton1" className="dropdown-menu border-0 p-0 m-0">
              <div className="container">
                  <div className="row bg-white rounded-0 m-0 shadow-sm ww">
                  <div className="col-lg-7 col-xl-8">
                      <div className="p-4">
                      <div className="row">
                          <div className="col-lg-6 mb-4">
                          {/* <h6 className="font-weight-bold text-uppercase">About Us</h6> */}
                          <ul className="list-unstyled">
                            
                            {ServicesCategories[0].map((cat)=>
                            <li className="nav-item">
                                <a href="" className="nav-link text-small pb-0">
                                {cat.heading}
                                 </a>
                            </li>
                            )}
                             
                          </ul>
                          </div>
                          
                      </div>
                      </div>
                  </div>
                  </div>
              </div>
              </div>
          </li>
          <li className="nav-item"><a href="javascript:void(0);" className="nav-link font-weight-bold text-uppercase"><Link to="/about">About</Link></a></li>
          <li className="nav-item"><a href="javascript:void(0);" className="nav-link font-weight-bold text-uppercase"><Link to="/procedure">Procedure</Link></a></li>
          <li className="nav-item"><a href="javascript:void(0);" className="nav-link font-weight-bold text-uppercase"><Link to="/contact">Contact</Link></a></li>
          </ul>
      </div>
      </div>
      </nav>
      
      
    
      {/* <section className="py-5 text-white">
        <div className="container py-4">
            <div className="row">
            <div className="col-lg-8 mx-auto text-center">
                <h1 className="display-4">Reactjs Bootstrap 5 megamenu</h1>
                <p className="lead mb-0">A very simple way to create Reactjs Bootstrap 5 megamneu. </p>
                <p className="lead">Snippet by <a href="https://therichpost.com/" className='text-white'><u>Therichpost</u></a>. </p>
            </div>
            </div>
            <div className="row pt-5">
            <div className="col-lg-10 mx-auto">
                <p className="lead">Use the default Bootstrap's dropdown menu to hold your megamneu.</p>
                <p className="lead">Set the <code>.dropdown</code> position to <code>static</code> instead of <code>absolute</code>.</p>
                <p className="lead">We use the className <code>.megamenu</code> to hold this <code>static</code> position.</p>
            </div>
            </div>
        </div>
      </section> */}
     
</div>
        </>
    )
}

export default Header