import React, { createContext, useState } from 'react'
 
export const CartContext=createContext()

export const CartProvider =({children})=>{
    const [cartItems,setCartItems]=useState([])

    const addToCart=(product)=>{
        setCartItems([...cartItems,product])
    }
  return (
    <>
      <CartContext.Provider value={{addToCart,cartItems}}>
        {children}
      </CartContext.Provider>
    </>
  )
}

export default CartProvider
