import { useContext } from 'react'

import { CartDropdownContainer, CartItems, EmptyMessage,  } from './cart-dropdown.style'
import Button from '../Button/button.component'

import CartItem from '../Cart-Item-Dropdown/cart-item'
import { CartContex } from '../../context/cart-dropdown'
import { Link } from 'react-router-dom'

const CartDropdown = () => { 
  const { cartItems } = useContext(CartContex)
  return(
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => { 
            return <CartItem key={item.id} cartItem = {item} /> 
          })
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Link to='/checkOut'><Button>Go to Checkout</Button></Link>
    </CartDropdownContainer>
  )
}

export default CartDropdown