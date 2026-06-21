import React from 'react'
import { useState ,useContext} from 'react'
import './Product.css'
import{Link} from 'react-router-dom'
import {Navbar,Nav,Container, NavbarBrand} from 'react-bootstrap'
import {NavDropdown } from 'react-bootstrap';
import logo from './assets/logo.png';
import image1 from './assets/p1.png'
import image2 from './assets/p2.png'
import image8 from './assets/p8.png'
import image9 from './assets/p9.png'
import image10 from './assets/p10.png'
import image11 from './assets/p11.png'
import { CartContext } from './Provider/CartProvider'


const Men = () => {
const dress=[
  {id:1,name:"Shirts",image:image1,price:1200},
  {id:2,name:"Shirts",image:image2,price:1400},
  {id:8,name:"Shirts",image:image8,price:1900},
  {id:9,name:"Shirts",image:image9,price:2100},
  {id:10,name:"Shirts",image:image10,price:1400},
  {id:11,name:"Shirts",image:image11,price:1200},
]
const [search,setSearch]=useState("")
const filterProduct =dress.filter((p)=>p.name.toLowerCase().includes(search))
const { addToCart, cartItems } = useContext(CartContext)
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
                <i className="bi bi-search"></i>      
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

export default Men

  
