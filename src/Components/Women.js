import React from 'react'
import { useState ,useContext} from 'react'
import './Product.css'
import{Link} from 'react-router-dom'
import {Navbar,Nav,Container, NavbarBrand} from 'react-bootstrap'
import {NavDropdown } from 'react-bootstrap';
import logo from './assets/logo.png';
import image3 from './assets/p3.png'
import image4 from './assets/p7.png'
import image5 from './assets/p5.png'
import image6 from './assets/p6.png'
import image7 from './assets/p7.png'
import image12 from './assets/p12.png'
import { CartContext } from './Provider/CartProvider'
const Women = () => {
const dress=[
{id:3,name:"Frock",image:image3,price:2500},
  {id:4,name:" Frock",image:image4,price:1200},
  {id:5,name:"Maxis",image:image5,price:1300},
  {id:6,name:"Maxis-combo",image:image6,price:2400},
  {id:7,name:"Wedding gown",image:image7,price:12000},
  {id:12,name:"Glittering gown",image:image12,price:8500},
   ]
const [search,setSearch]=useState("")
const filterProduct =dress.filter((p)=>p.name.toLowerCase().includes(search))
const {addToCart , cartItems}=useContext(CartContext)
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
  
  export default Women
  