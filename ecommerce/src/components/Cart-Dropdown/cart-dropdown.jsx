import { useContext } from 'react'

import'./cart-dropdown.style.scss'
import Button from '../Button/button.component'

import CartItem from '../Cart-Item-Dropdown/cart-item'
import { CartContex } from '../../context/cart-dropdown'
import { Link } from 'react-router-dom'

const CartDropdown = () => { 
  const { cartItems } = useContext(CartContex)
  return(
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        { cartItems.map((item) => { 
          return(
            <CartItem key={item.id} cartItem = {item} />
          )
        })}
      </div>
      <Link to='/checkOut'><Button>Go to Checkout</Button></Link>
    </div>
  )
}

export default CartDropdown