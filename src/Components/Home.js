import React, { useState } from 'react'
import{Link, useNavigate} from 'react-router-dom'
import {Navbar,Nav,Container, NavbarBrand, Carousel} from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {NavDropdown } from 'react-bootstrap';
import logo from './assets/logo.png'
import vanimg from './assets/fea-2.png'
import freeimg from './assets/fea-3.png'
import bestimg from './assets/fea-after.png'
import arrivalimg from './assets/arrival-bg.png'
import menimg from './assets/man.jpg'
import womenimg from './assets/woman.jpg'
import kidimg from './assets/kid.png'
import acsimg from './assets/accessories.jpg'
import fwimg from './assets/footwear.png'
import testgirl from './assets/client.jpg'
import testboy from './assets/boy.jpg'
import teskid from './assets/teskid.jpg'
import './Style.css'
import { useContext } from 'react'
import { CartContext } from './Provider/CartProvider'

const Home = () => {
  const { cartItems } = useContext(CartContext)
  const navigate=useNavigate();
  const [subscribe,setsubcribe]=useState(false);
  function subscribeBtn(){
    setsubcribe(true)
  }
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
            <Link to='/cart' className='cart-icon'>
                             <i className="bi bi-cart"></i><span className='cart-count'>{cartItems.length}</span>
                             </Link>
            <i class="bi bi-search"></i>      
         </Navbar>
      </Container>
    </section> 
    <section className='Hero'> 
      <Carousel >
        <Carousel.Item>
      <h1 id='h1'>Sale 20% Off</h1><span><h1 id='h11'>On Everything</h1></span>
      <p id='para'>Fashion is more then just clothing-it's a way to express who you<br/> are.Explore oue newest arrivals designed for trendsetters and<br/>
        style lovers.With bold designs,vibrant colors, and comfortable fits,<br/>our collections is made to keep you lokking fresh every day. 
      </p>
      <button id='btn'className='mx-5' onClick={()=>navigate('/product')}>Shop now</button>
      </Carousel.Item>
        <Carousel.Item>
      <h1 id='h1'>Trendy Collection</h1><span><h1 id='h11'>For Everyone</h1></span>
      <p id='para'>Fashion is more then just clothing-it's a way to express who you<br/> are.Explore oue newest arrivals designed for trendsetters and<br/>
        style lovers.With bold designs,vibrant colors, and comfortable fits,<br/>our collections is made to keep you lokking fresh every day. 
      </p>
      <button id='btn'className='mx-5' onClick={()=>navigate('/product')}>Shop now</button>
      </Carousel.Item>
        <Carousel.Item>
      <h1 id='h1'>Get the Best ones</h1><span><h1 id='h11'>On Everything</h1></span>
      <p id='para'>Fashion is more then just clothing-it's a way to express who you<br/> are.Explore oue newest arrivals designed for trendsetters and<br/>
        style lovers.With bold designs,vibrant colors, and comfortable fits,<br/>our collections is made to keep you lokking fresh every day. 
      </p>
      <button id='btn'className='mx-5' onClick={()=>navigate('/product')}>Shop now</button>
      </Carousel.Item>
      </Carousel>
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
    <section className='newarrivals my-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <img src={arrivalimg} alt="arrivalimg" height="400px"className='boyimg'/>
          </div>
          <div className='col-lg-6'>
            <h1 className='newarr my-5'>#New Arrivals</h1>
            <p className='paraa'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem architecto deserunt laborum magni laudantium dolorum illo libero. 
              Adipisci, maxime! Maiores, iste voluptatem veniam harum eligendi commodi odio sapiente fugiat ea!</p>
              <button  id='btn2'onClick={()=>navigate('/product')}>Shop now</button>
          </div>
        </div>
      </div>
</section>
<section className='categories'>
  <h1 className='text-center' id='h111'>Our Products</h1>
  <div className='container'>
    <div className='row'>
      <div className='col-sm-3 card mx-auto my-3'id='catcard'>
      <h2 id='title'className='mx-auto'>MEN</h2>
      <img src={menimg} alt="menimg" id='cardimg' className='mx-auto'/>
      <button id='btn3'className=' overlay mx-auto my-3' onClick={()=>navigate('/men')}>View All</button>
      </div>
      <div className='col-sm-3 card mx-auto my-3'id='catcard'>
      <h2 id='title'className='mx-auto'>WOMEN</h2>
      <img src={womenimg} alt="womenimg" id='cardimg' className='mx-auto'/>
      <button id='btn3'className=' overlay mx-auto my-3'onClick={()=>navigate('/women')}>View All</button>
      </div>
      <div className='col-sm-3 card mx-auto my-3'id='catcard'>
      <h2 id='title'className='mx-auto'>KIDS</h2>
      <img src={kidimg} alt="kidimg" id='cardimg' className='mx-auto'/>
      <button id='btn3'className=' overlay mx-auto my-3'onClick={()=>navigate('/kids')}>View All</button>
      </div>
      <div className='col-sm-3 card mx-auto my-3'id='catcard'>
      <h2 id='title'className='mx-auto'>ACCESSORIES</h2>
      <img src={acsimg} alt="acsimg" id='cardimg' className='mx-auto'/>
      <button id='btn3'className=' overlay mx-auto my-3'onClick={()=>navigate('/accessories')}>View All</button>
      </div>
      <div className='col-sm-3 card mx-auto my-3'id='catcard'>
      <h2 id='title'className='mx-auto'>FOOTWEAR</h2>
      <img src={fwimg} alt="fwimg" id='cardimg' className='mx-auto'/>
      <button id='btn3'className='  mx-auto my-3'onClick={()=>navigate('/footwear')}>View All</button>
      </div>
      
    </div>
  </div>
  <button id='btn4'className='mx-auto d-block' onClick={()=>navigate('/product')} >View All Products</button>
</section>
<section className='subscribe '>
 <h1 className='sub1 text-center'>Subscribe To Get Discount Offers</h1>
 <p id='subpara'className='text-center '>Subscribe now to receive exclusive discounts,special offers,and updates.</p>
 <input type="text" placeholder='Enter your email' id='subinput' className='mx-auto my-4 d-block'required/>
 <button id='sub-btn'onClick={subscribeBtn} className='mx-auto my-5 d-block'>
  {subscribe?"Subscribed":"Subscribe"}
 </button>

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
</section>        </>
  )
}


export default Home
