import React from 'react'
import { useState ,useContext} from 'react'
import './Product.css'
import{Link} from 'react-router-dom'
import {Navbar,Nav,Container, NavbarBrand} from 'react-bootstrap'
import {NavDropdown } from 'react-bootstrap';
import logo from './assets/logo.png';
import image13 from './assets/kid.png'
import image14 from './assets/kidgown.png'
import image15 from './assets/kidgown2.webp'
import image20 from './assets/girl1.webp'
import image21 from './assets/kidgown5.webp'
import { CartContext } from './Provider/CartProvider'
const Kids = () => {
const dress=[
 {id:13,name:"Kids Gown",image:image13,price:1050},     
{id:14,name:"Kids Gown",image:image14,price:1100},
 {id:15,name:"Kids maxi",image:image15,price:800},
 {id:20,name:"Kids Ethnic wear",image:image20,price:2100},
 {id:21,name:"Kid's full gown",image:image21,price:1100},
         
         ]
const [search,setSearch]=useState("")
const filterProduct =dress.filter((p)=>p.name.toLowerCase().includes(search))
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
      
      export default Kids
      

