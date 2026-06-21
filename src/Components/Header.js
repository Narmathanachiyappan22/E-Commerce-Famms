import React from 'react'
import{Link} from 'react-router-dom'
import {Navbar,Nav,Container, NavbarBrand} from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {NavDropdown } from 'react-bootstrap';
import logo from './assets/logo.png'
import './Style.css'

const Header = () => {
  return (
    <>
      <section>
      <Container>
        <Navbar expand='lg'>
          <NavbarBrand>
          <img src={logo} alt="logo" style={{width:"300px",paddingLeft:"85px"}}/>
          </NavbarBrand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'/>
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto'>
            <ul className='navlinks'>
              <li> <Link className='links' to="/">Home</Link></li>
              <NavDropdown title="Pages" id="pages-dropdown">
                  <NavDropdown.Item as={Link} to="/about"> About</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/testimonial">Testimonial</NavDropdown.Item>
              </NavDropdown>
              <li> <Link className='links' to="/product">Product</Link></li>
              <li> <Link className='links' to="/blog">Blog</Link></li>
              <li> <Link className='links' to="/contact">Contact</Link></li>
            </ul>
            </Nav>
            </Navbar.Collapse>  
            <Link to='/cart'><i class="bi bi-cart"></i> </Link> 
            <i class="bi bi-search"></i>      
         </Navbar>
      </Container>
    </section>
 
    </>
  )
}

export default Header
