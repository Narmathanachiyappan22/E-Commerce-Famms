import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import Home from'./Components/Home'
import Contact from './Components/Contact';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Product from './Components/Product';
import Blog from './Components/Blog';
import About from './Components/About';
import Testimonial from './Components/Testimonial'
import Cart from './Components/Cart'
import CartProvider from './Components/Provider/CartProvider';
import Men from './Components/Men'
import Women from './Components/Women'
import Kids from './Components/Kids'
import Accessories from './Components/Accessories';
import Footwear from './Components/Footwear';
import Address from './Components/Address';

function App() {
  return (
    <>
    <CartProvider>
      
    <BrowserRouter>
        <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/about' element={<About/>}/>
       <Route path='/testimonial' element={<Testimonial/>}/>
       <Route path='/men' element={<Men/>}/>
       <Route path='/women' element={<Women/>}/>
       <Route path='/kids' element={<Kids/>}/>
       <Route path='accessories' element={<Accessories/>}/>
        <Route path='footwear' element={<Footwear/>}/>

        <Route path="/address" element={<Address />} />


       
  

    </Routes>
    </BrowserRouter>
    </CartProvider>
    
    </>
  );
}

export default App;
