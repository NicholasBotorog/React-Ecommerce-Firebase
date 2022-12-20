import { createContext, useState } from "react";


export const CartContex = createContext({
  cartOpen: false,
  setCartOpen: () => {},
})

export const CartProvider = ({ children }) => { 
  const [cartOpen, setCartOpen] = useState(false)
  const value = { cartOpen, setCartOpen }
  

  return <CartContex.Provider value = {value}> {children} </CartContex.Provider>
}
