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

const removeCartItem = (cartItems, productToRemove) => { 
  // Find if cartItems contains productToRemove
  const existingItem = cartItems.find((item) => item.id === productToRemove.id)
  // Check if quantity is equal to 1, and remove it from cart if it is 
  if(existingItem.quantity === 1){
    return cartItems.filter(item => item.id !== productToRemove.id)
  }
  // Return back cart with matching cart items with reduce quantity
  return cartItems.map((item) => { 
    if (item.id === productToRemove.id){
      return { ...item, quantity: item.quantity - 1 }
    } else { 
      return item
    }
  })
} 


// Delete the whole item from the checkout page. 
const clearCartItem = (cartItems, productToClear) => cartItems.filter((item) => item.id !== productToClear.id)


export const CartContex = createContext({
  cartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
})

export const CartProvider = ({ children }) => { 
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => { 
    const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    setCartCount(newCartCount)
    console.log(cartItems)
  }, [cartItems])


  useEffect(() => { 
    const newCartTotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
    setCartTotal(newCartTotal)
  }, [cartItems])


  const addItemToCart = (productToAdd) => { 
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove))
  }

  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear))
  }

  const value = { 
    cartOpen, 
    setCartOpen, 
    addItemToCart, 
    cartItems, 
    cartCount, 
    removeItemFromCart, 
    clearItemFromCart, 
    cartTotal,
  }
  

  return <CartContex.Provider value = {value}> {children} </CartContex.Provider>
}
