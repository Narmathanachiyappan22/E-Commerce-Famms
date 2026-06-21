import React from 'react'
import{Link} from 'react-router-dom'
import {Navbar,Nav,Container, NavbarBrand,Carousel} from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {NavDropdown } from 'react-bootstrap';
import logo from './assets/logo.png'
import testgirl from './assets/client.jpg'
import testboy from './assets/boy.jpg'
import teskid from './assets/teskid.jpg'



const Testimonial = () => {
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
                  <NavDropdown.Item as={Link} to="/">Testimonial</NavDropdown.Item>
              </NavDropdown>
              <li> <Link className='links' to="/product">Product</Link></li>
              <li> <Link className='links' to="/blog">Blog</Link></li>
              <li> <Link className='links' to="/contact">Contact</Link></li>
            </ul>
            </Nav>
            </Navbar.Collapse>  
            <i class="bi bi-cart"></i> 
            <i class="bi bi-search"></i>      
         </Navbar>
      </Container>
    </section>
    <section className='contact'> 
  <h1 className='text-center' id='conhead'>Testimonial</h1>
  </section>
  <section className='testimonial'>
  <h5 id='h111'className='text-center'>Customer's Testimonial</h5>
  <Container>
  <Carousel>
        <Carousel.Item className='text-center my-5'>
         <img src={testgirl} alt="testgirl"className='tesimage'/>
         <h4>Client</h4>
         <p>Trendy,Stylish,comfortable clothing with great quality,durability and affordable prices.<br/>Perfect for everyday wear and special occasions.</p>
      </Carousel.Item>
        <Carousel.Item className='text-center my-5'>
      <img src={testboy} alt="testboy"className='tesimage'/>
         <h4>Client</h4>
         <p>High-quality men's clothing with trendy styles,durable material and excellent comfort,<br/>ideal for casual and formal everyday wear.</p>
        </Carousel.Item>
        <Carousel.Item className='text-center my-5'>
      <img src={teskid} alt="testboy"className='tesimage'/>
         <h4>Client</h4>
         <p>High quality kid's outfits with adorable designs,soft texture and long-lasting fabric,<br/>ideal for school,playtime and special occasions.</p>
        </Carousel.Item>
      </Carousel>
    </Container>
</section>
<section className='footer my-5'>
     <div className='container'>
       <div className='row'>
         <div className='col-lg-12'>
           <img src={logo} alt="logo" style={{width:"250px",paddingLeft:"25px",paddingTop:"20px"}} className='mx-auto d-block'/>
           <h3 style={{fontSize:"20px",paddingTop:"30px",paddingLeft:"450px"}}><span style={{fontWeight:"bold"}}>Address:</span>123 CM,GreenWays Road,Chennai</h3>
           <h3 style={{fontSize:"20px",paddingTop:"30px",paddingLeft:"450px"}}><span style={{fontWeight:"bold"}}>Telephone:</span>+91-8825517148</h3>
           <h3 style={{fontSize:"20px",paddingTop:"30px",paddingLeft:"450px"}}><span style={{fontWeight:"bold"}}>E-mail:</span>Famms123@gmail.com</h3>
   
         </div>
       </div>
     </div>
   </section>
   

 
    </>
  )
}

export default Testimonial
