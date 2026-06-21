import React from 'react'
import { useState } from "react";
import{Link} from 'react-router-dom'
import {Navbar,Nav,Container, NavbarBrand} from 'react-bootstrap'
import {NavDropdown } from 'react-bootstrap';
import logo from './assets/logo.png';
import arrivalimg from './assets/arrival-bg.png'
import './contact.css'
import { CartContext } from './Provider/CartProvider';
// import { CartContext } from './Provider/CartProvider'

const Contact = () => {
  const [message, setMessage] = useState("");
   const{cartItems}=React.useContext(CartContext)

  const feedback = (e) => {
    e.preventDefault();
    setMessage("Thank you for your feedback!");
  };
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
                        <Link to='/cart' className='cart-icon'> <i className="bi bi-cart"></i><span className='cart-count'>{cartItems.length}</span></Link>
                         
                        <i class="bi bi-search"></i>      
                     </Navbar>
                  </Container>
                </section>
             

   <section className='contact'> 
  <h1 className='text-center' id='conhead'>Contact Us</h1>
  </section>
  <section className='my-5 'id='form' >
  <form onSubmit={feedback} >
    <input type="text" className='input'placeholder='Enter your name'/><br/>
    <input type="text" className='input'placeholder='Enter your email address'/><br/>
    <input type="text" className='input'placeholder='Enter subject'/><br/>
    <textarea name="" id="ta"placeholder='Enter your message'></textarea><br/>
    <button id='btn'type='submit'>Submit</button>
    <h3 id='demo' className='text-center my-3'>{message}</h3>
  </form>
  
   </section>
   
    <section className='newarrivals'>
         <div className='container'>
           <div className='row'>
             <div className='col-lg-6'>
               <img src={arrivalimg} alt="arrivalimg" height="400px"className='boyimg'/>
             </div>
             <div className='col-lg-6'>
               <h1 className='newarr my-5'>#New Arrivals</h1>
               <p className='paraa'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem architecto deserunt laborum magni laudantium dolorum illo libero. 
                 Adipisci, maxime! Maiores, iste voluptatem veniam harum eligendi commodi odio sapiente fugiat ea!</p>
                 <button  id='btn2'>Shop now</button>
             </div>
           </div>
         </div>
   </section>
   <section className="footer">
  <div className="container">
    <div className="row">
      <div className="col-12 footer-content">
        <img src={logo} alt="Famms logo" className="footer-logo" />

        <div className="footer-details">
          <p>
            <span>Address:</span> 123 CM, GreenWays Road, Chennai
          </p>

          <p>
            <span>Telephone:</span> +91-8825517148
          </p>

          <p>
            <span>E-mail:</span> Famms123@gmail.com
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
   
    </>
  )
}

export default Contact
