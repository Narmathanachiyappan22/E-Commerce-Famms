import React, { useContext, useEffect, useReducer, useRef } from 'react'
import { CartContext } from './Provider/CartProvider'
import { Link,useNavigate } from 'react-router-dom'
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { NavDropdown } from 'react-bootstrap';
import logo from './assets/logo.png'
import './Product.css'



const cartReducer = (state, action) => {
  switch (action.type) {
    case "Load_Cart": return {
      ...state, cart: action.payload.map((item) => (
        { ...item, quantity: item.quantity || 1 }
      ))
    }
    case "Inc": return {
      ...state, cart: state.cart.map((item) => item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item)
    }
    case "Dec": return {
      ...state, cart: state.cart.map((item) => item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item)
    }
    case "Rem": return {
      ...state, cart: state.cart.filter((item) => item.id !== action.payload)
    }
    default: return state
  }
}
const Cart = () => {
  const { cartItems } = useContext(CartContext)
  const [state, dispatch] = useReducer(cartReducer, { cart: [] })
  const totalRef = useRef()

  useEffect(() => {
    dispatch({ type: "Load_Cart", payload: cartItems })
  }, [cartItems])

  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  useEffect(() => {
    if (totalRef.current) {
      totalRef.current.style.color = "red";
      setTimeout(() => (totalRef.current.style.color = "black"), 1000)
    }
  }, [total])
  const navigate = useNavigate();


  return (
    <>
       <section>
        <Container>
          <Navbar expand='lg'>
            <NavbarBrand>
              <img src={logo} alt="logo" style={{ width: "300px", paddingLeft: "85px" }} />
            </NavbarBrand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
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




<section className='cart-section'>
  <div className='container py-5'>

    {
      state.cart.length === 0 ? (
        <h3 className='text-center'>Your Cart is Empty</h3>
      ) : (
        <div className='row'>

          {/* LEFT SIDE */}
          <div className='col-lg-8'>

            {
              state.cart.map((items) => (

                <div className='cart-box mb-4 p-3' key={items.id}>

                  <div className='row align-items-center'>

                    <div className='col-md-3 text-center'>
                      <img
                        src={items.image}
                        alt={items.name}
                        className='cart-img'
                      />
                    </div>

                    <div className='col-md-5'>
                      <h4>{items.name}</h4>

                      <p className='text-muted'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      </p>

                      <h5>₹{items.price}</h5>
                    </div>

                    <div className='col-md-4 text-center'>

                      <div className='quantity-box mb-3'>
                        <button
                          className='qty-btn'
                          onClick={() =>
                            dispatch({ type: "Dec", payload: items.id })
                          }
                        >
                          -
                        </button>

                        <span className='mx-3'>
                          {items.quantity}
                        </span>

                        <button
                          className='qty-btn'
                          onClick={() =>
                            dispatch({ type: "Inc", payload: items.id })
                          }
                        >
                          +
                        </button>
                      </div>

                      <button
                        className='remove-btn'
                        onClick={() =>
                          dispatch({ type: "Rem", payload: items.id })
                        }
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))
            }

          </div>

          {/* RIGHT SIDE */}
          <div className='col-lg-4'>

            <div className='summary-box p-4'>

              <h3 className='mb-4'>Order Summary</h3>

              <div className='d-flex justify-content-between mb-3'>
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className='d-flex justify-content-between mb-3'>
                <span>GST (2%)</span>
                <span>₹{Math.round(total * 0.01)}</span>
              </div>

              <div className='d-flex justify-content-between mb-3'>
                <span>Delivery</span>
                <span>₹100</span>
              </div>

              <div className='d-flex justify-content-between mb-3 text-success'>
                <span>Discount</span>
                <span>- ₹200</span>
              </div>

              <hr />

              <div className='d-flex justify-content-between mb-4'>
                <h4>Total</h4>

                <h4>
                  ₹{
                    total +
                    Math.round(total * 0.18) +
                    100 -
                    200
                  }
                </h4>
              </div>

              <button className='checkout-btn w-100'onClick={() => navigate("/address")}>
                Proceed to Checkout
              </button>

            </div>

          </div>

        </div>
      )
    }
    

  </div>
</section>
</>
  )
}
export default Cart