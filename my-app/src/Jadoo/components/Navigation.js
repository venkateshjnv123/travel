import React, { Component , useState} from 'react';
import {Navbar, NavLink, NavbarBrand, Container, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import "bootstrap/dist/css/bootstrap.css";

import background  from '../Images/backgroundimg.svg';
import head from '../Images/headimg.svg';
import '../Css/image1.css';
import Home from './Home';
import Category from './Category';
import Destination from './Destinations';
import Booking from './Booking';
import Subscribe from './Subscribe';
import Footer from './Footer';

import '../Css/Navigation.css'


function Navigation() {
    const [wwidth, setwWidth]   = useState(window.innerWidth);
    const [hheight, setHeight] = useState(window.innerHeight);

    return(
   
        <div className="Main_div justify-content-center"  >
             <img src={background} alt='img' className='img_main' style={{float:'right'}} ></img>
            
        <Navbar expand='lg' classname="nav_div mx-auto" style={{width: '90%'}}>
            <Container >
                <NavbarBrand href='home' className='py-3 my-2 px-2 mx-2' ><img src={head} alt='Jadoo' style={{width: '114.91px', height:'33.99px'}} ></img>
                    </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse id="navbar-nav" className='justify-content-end'>
                    <Nav className='d-flex align-items-center  '>
                        <Link to='/' className='links py-3 my-2 mx-3 px-4  text-dark'>Destinations</Link>
                        <Link to='/' className='links py-3 my-2 mx-3 px-4 text-dark'>Hotels</Link>
                        <Link to='/' className='links py-3 my-2 mx-3 px-4 text-dark'>Flights</Link>
                        <Link to='/' className='links py-3 my-2 mx-3 px-4 text-dark'>Bookings</Link>
                        <Link to='/' className='links py-3 my-2 mx-3 px-4 text-dark'>Login/Signup</Link>
                        <NavDropdown title="EN" className='links py-3 my-2 mx-3 px-4 text-dark'>
                            <NavDropdown.Item href="#active/1">English</NavDropdown.Item>
                            <NavDropdown.Item href="#active/2">Hindi</NavDropdown.Item>
                            <NavDropdown.Item href="#active/3">Telugu</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar> 
        <Home/>
      <Category />
      <Destination />
        <Booking />
        <Subscribe />
        <Footer /> 
        </div>
       
    )
}

export default Navigation;