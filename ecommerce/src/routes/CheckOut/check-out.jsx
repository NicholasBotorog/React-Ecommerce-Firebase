import './check-out.scss'
import { useContext } from 'react'
import { CartContex } from '../../context/cart-dropdown'
import CheckoutItem from '../../components/Checkout Item/checkout-item'

const CheckOut = () => { 

  const { cartItems, cartTotal } = useContext(CartContex) 
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>

        <div className='header-block'>
          <span>Description</span>
        </div>

        <div className='header-block'>
          <span>Quantity</span>
        </div>

        <div className='header-block'>
          <span>Price</span>
        </div>

        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div> 

    { cartItems.map((item) => (
        <CheckoutItem key = {item.id} item = {item} />
    ))}

      <span className='total'>Total: ${cartTotal}</span>
    </div>
  )
}

export default CheckOut