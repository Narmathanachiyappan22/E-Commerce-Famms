import React from 'react'
import { useState ,useContext} from 'react'
import './Product.css'
import{Link} from 'react-router-dom'
import {Navbar,Nav,Container, NavbarBrand} from 'react-bootstrap'
import {NavDropdown } from 'react-bootstrap';
import logo from './assets/logo.png';
import { CartContext } from './Provider/CartProvider'
import image1 from'./assets/Acs1.webp';
import image2 from './assets/acs2.webp';
import image3 from './assets/acs3.avif';
import image4 from './assets/acs4.jpg';
import image5 from './assets/acs5.avif';
import image6 from './assets/acs6.webp';
import image7 from './assets/acs7.webp';
import image8 from './assets/acs8.png';
import image9 from './assets/acs9.png';



const Accessories = () => {
    const Things=[
        {id:1,image:image1,name:"Bracelet",price:400},
        {id:2,image:image2,name:"Trendy Bracelet",price:600},
        {id:3,image:image3,name:"Pearl Earrings",price:200},
        {id:4,image:image4,name:" Falls Earring",price:300},
        {id:5,image:image5,name:"Earrings",price:350},
        {id:6,image:image6,name:"Slings",price:900},
        {id:7,image:image7,name:"Tote Bags",price:1200},
        {id:8,image:image8,name:"Cosmetic kit",price:700},
        {id:9,image:image9,name:"Brush Kit",price:800},
    ]
  const [search,setSearch]=useState("")
  const filterProduct =Things.filter((p)=>p.name.toLowerCase().includes(search))
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
                    <h6 className='text-center'>Price:{items.price}</h6>
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

export default Accessories
