import { createContext, useState, useEffect } from "react";


const addCartItem = (cartItems, productToAdd) => { 
  // Find if cartItems contains productToAdd
  const existingItem = cartItems.find((item) => item.id === productToAdd.id)
  // If Found, increment quantity
  if(existingItem){
    return cartItems.map((item) => { 
      if (item.id === productToAdd.id){
        return { ...item, quantity: item.quantity + 1 }
      } else { 
        return item
      }
    })
  }
  // Return new array with modified cartItems / new Cart Items
  return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartContex = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
})

export const CartProvider = ({ children }) => { 
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => { 
    const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  const addItemToCart = (productToAdd) => { 
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const value = { cartOpen, setCartOpen, addItemToCart, cartItems, cartCount }
  

  return <CartContex.Provider value = {value}> {children} </CartContex.Provider>
}
