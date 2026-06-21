import React from 'react'
import{Link} from 'react-router-dom'
import {Navbar,Nav,Container, NavbarBrand} from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {NavDropdown } from 'react-bootstrap';
import logo from './assets/logo.png'
import vanimg from './assets/fea-2.png'
import freeimg from './assets/fea-3.png'
import bestimg from './assets/fea-after.png'
import { CartContext } from './Provider/CartProvider'
import './Style.css'

const Blog = () => {
  const {cartItems}=React.useContext(CartContext)
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
  <h1 className='text-center' id='conhead'>Blog list</h1>
  </section>
    <section className='Hero2'>
              <h1 className='text-center' id='h111'>Why Shop With Us</h1>
              <hr className='line'/>
              <div className='container my-5'>
               <div className='row'>
                 <div  className='col-md-4 mx-auto  'id='card' >
                   <img src={vanimg} alt="vanimg" className='img'/>
                   <h4 id='cardtitle'className='mx-auto'>Fast Delivery</h4>
                   <p id='cardpara'className='mx-auto'>Fast delivery on all trendy fashion orders</p>
                 </div>
                 <div  className='col-md-4 mx-auto 'id='card' >
                   <img src={freeimg} alt="freeimg" className='img'/>
                   <h4 id='cardtitle'className='mx-auto'>Free Shipping</h4>
                   <p id='cardpara'className='mx-auto'>Free shipping on all orders, no minimum</p> 
                 </div>
                 <div  className='col-md-4 mx-auto 'id='card' >
               
                    <img src={bestimg} alt="bestimg" className='img'/>
                   <h4 id='cardtitle'className='mx-auto'>Best Quality</h4>
                   <p id='cardpara'className='mx-auto'>Quality is not an act, it's a habit of us.</p> 
       
                   </div>
               </div>
              </div>
           </section>
       
      <section className='footer my-5'>
           <div className='container'>
             <div className='row'>
               <div className='col-lg-12 '>
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

export default Blog
