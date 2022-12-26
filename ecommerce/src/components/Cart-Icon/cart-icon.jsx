import { useContext } from 'react'
import { ShoppingIcon, CartIconContainer, ItemCount } from './cart-icon.styles'

import { CartContex } from '../../context/cart-dropdown'

const CartIcon = () => {
  const { cartOpen ,setCartOpen, cartCount } = useContext(CartContex)

  const toggleCartOpen = () => setCartOpen(!cartOpen)

  return(
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon