import React from 'react'
import { useState ,useContext} from 'react'
import './Product.css'
import{Link} from 'react-router-dom'
import {Navbar,Nav,Container, NavbarBrand} from 'react-bootstrap'
import {NavDropdown } from 'react-bootstrap';
import logo from './assets/logo.png';
import { CartContext } from './Provider/CartProvider'
import image1 from './assets/footwear.png';
import image2 from './assets/shoe1.png';
import image3 from './assets/shoe2.avif';
import image4 from './assets/shoe3.jpg';
import image5 from './assets/shoe4.png';
import image6 from './assets/fw1.webp';
import image7 from './assets/fw2.webp';
import image8 from './assets/fw3.jpg';
import image9 from './assets/fw4.jpeg';
import image10 from './assets/fw5.jpg';
import image11 from './assets/fw6.webp';


const Footwear = () => {
    const Footwear=[
        {id:1,image:image1,name:"Women Heels",price:950},
        {id:2,image:image2,name:"Men's Formal",price:700},
        {id:3,image:image3,name:"High Heels",price:850},
        {id:4,image:image4,name:"Sneekers",price:1200},
        {id:5,image:image5,name:"Women's flats",price:400},
        {id:6,image:image6,name:"Trendy sneekers",price:850},
        {id:7,image:image7,name:"Women's formal Heels",price:800},
        {id:8,image:image8,name:"White Shoes",price:900},
        {id:9,image:image9,name:"Casual shoes",price:1300},
       {id:10,image:image10,name:"Sandals women",price:600},
       {id:11,image:image11,name:"Full Heels",price:1100},
        
    ]
    const [search,setSearch]=useState("")
    const filterProduct =Footwear.filter((p)=>p.name.toLowerCase().includes(search))
    const {addToCart,cartItems}=useContext(CartContext)
    const [addedId, setAddedId] = useState(null)
    
    const handleCart = (items) => {
      addToCart(items)
      setAddedId(items.id)
    
      setTimeout(() => {
        setAddedId(null)
      }, 2000)
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
                         <Link to='/cart' className='cart-icon'> <i className="bi bi-cart"></i><span className='cart-count'>{cartItems.length}</span></Link>
                        <i class="bi bi-search"></i>      
                       </Navbar>
                    </Container>
                  </section>
                 
              
              <section className='contact'> 
            <h1 className='text-center' id='conhead'>Our Products</h1>
            
          </section>
            <section>
                <div className='container'>
                  <input type="text"placeholder='Search here'className='mx-auto my-4 d-block proinput'value={search} onChange={(e)=>setSearch(e.target.value)}/>
                
                  <div className='row'>{
                              filterProduct.map((items)=>(
                      <div className='col-md-4 card mx-auto my-5'key={items.id}>
                        <img src={items.image} alt={items.name}className='w-50 d-block mx-auto proimg'/>
                        <h4 className='text-center'>{items.name}</h4>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, deserunt!</p>
                        <h6 className='text-center'>Price:₹{items.price}</h6>
                        <button className='pro-btn text-center'onClick={()=>handleCart(items)}>{addedId === items.id ? "Added to cart ✓" : "Add to cart"}</button>
                      </div>
                    ))
                  }
                   
                    </div>
                  </div>
                  </section>
             
      
    </>
  )
}

export default Footwear
