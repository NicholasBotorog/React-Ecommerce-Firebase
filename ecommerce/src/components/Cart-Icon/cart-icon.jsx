import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.scss'

import { CartContex } from '../../context/cart-dropdown'

const CartIcon = () => {
  const { cartOpen ,setCartOpen } = useContext(CartContex)

  const toggleCartOpen = () => setCartOpen(!cartOpen)

  return(
    <div className='cart-icon-container' onClick={toggleCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon