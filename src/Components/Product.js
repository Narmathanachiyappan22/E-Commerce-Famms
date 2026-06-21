import React from 'react'
import { useState ,useContext} from 'react'
import './Product.css'
import{Link} from 'react-router-dom'
import {Navbar,Nav,Container, NavbarBrand} from 'react-bootstrap'
import {NavDropdown } from 'react-bootstrap';
import logo from './assets/logo.png';
import image1 from './assets/p1.png'
import image2 from './assets/p2.png'
import image3 from './assets/p3.png'
import image4 from './assets/p4.png'
import image5 from './assets/p5.png'
import image6 from './assets/p6.png'
import image7 from './assets/p7.png'
import image8 from './assets/p8.png'
import image9 from './assets/p9.png'
import image10 from './assets/p10.png'
import image11 from './assets/p11.png'
import image12 from './assets/p12.png'
import image13 from './assets/kid.png'
import image14 from './assets/kidgown.png'
import image15 from './assets/kidgown2.webp'
import image16 from './assets/shoe1.png'
import image17 from './assets/shoe2.avif'
import image18 from './assets/shoe3.jpg'
import image19 from './assets/shoe4.png'
import image20 from './assets/girl1.webp'
import image21 from './assets/kidgown5.webp'
import image22 from'./assets/Acs1.webp';
import image23 from './assets/acs2.webp';
import image24 from './assets/acs3.avif';
import image25 from './assets/acs4.jpg';
import image26 from './assets/acs5.avif';
import image27 from './assets/acs6.webp';
import image28 from './assets/acs7.webp';
import image29 from './assets/acs8.png';
import image30 from './assets/acs9.png';
import { CartContext } from './Provider/CartProvider'

const Product = () => {
  const { cartItems } = useContext(CartContext)
const dress=[
  {id:1,name:"Shirts",image:image1,price:1200},
  {id:2,name:"Shirts",image:image2,price:1400},
  {id:3,name:"Frock",image:image3,price:2500},
  {id:4,name:"Mini Frock",image:image4,price:1200},
  {id:5,name:"Maxis",image:image5,price:1300},
  {id:6,name:"Maxis-combo",image:image6,price:2400},
  {id:7,name:"Wedding gown",image:image7,price:12000},
  {id:8,name:"Shirts",image:image8,price:1900},
  {id:9,name:"Shirts",image:image9,price:2100},
  {id:10,name:"Shirts",image:image10,price:1400},
  {id:11,name:"Shirts",image:image11,price:1200},
  {id:12,name:"Glittering gown",image:image12,price:8500},
  {id:13,name:"Kids Gown",image:image13,price:1050},
  {id:14,name:"Kids Gown",image:image14,price:1100},
   {id:15,name:"Kids maxi",image:image15,price:800},
   {id:16,name:"Men's shoe",image:image16,price:1400},
   {id:17,name:"Women's Heals",image:image17,price:1100},
   {id:18,name:"Men's sneekers ",image:image18,price:1900},
   {id:19,name:"Women's Flats",image:image19,price:2100},
   {id:20,name:"Kids Ethnic wear",image:image20,price:2100},
   {id:21,name:"Kid's full gown",image:image21,price:2100},
   {id:22,image:image22,name:"Bracelet",price:400},
   {id:23,image:image23,name:"Trendy Bracelet",price:600},
   {id:24,image:image24,name:"Pearl Earrings",price:200},
   {id:25,image:image25,name:" Falls Earring",price:300},
   {id:26,image:image26,name:"Earrings",price:350},
   {id:27,image:image27,name:"Slings",price:900},
   {id:28,image:image28,name:"Tote Bags",price:1200},
   {id:29,image:image29,name:"Cosmetic kit",price:700},
   {id:30,image:image30,name:"Brush Kit",price:800},
   
   
   ]
  const [search,setSearch]=useState("")
  const filterProduct =dress.filter((p)=>p.name.toLowerCase().includes(search))
  const {addToCart}=useContext(CartContext)
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
                  <Link to='/cart' className='cart-icon'>
                                             <i className="bi bi-cart"></i><span className='cart-count'>{cartItems.length}</span>
                                             </Link>
                          
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
              <button className='pro-btn text-center'onClick={()=>handleCart(items)}> {addedId === items.id ? "Added to cart ✓" : "Add to cart"}</button>
            </div>
          ))
        }
         
          </div>
        </div>
        </section>
    </>
  )
}

export default Product
