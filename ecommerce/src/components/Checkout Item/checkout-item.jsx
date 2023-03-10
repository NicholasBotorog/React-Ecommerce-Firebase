import './checkout-item.scss'
import { useContext } from 'react'
import { CartContex } from '../../context/cart-dropdown'

const CheckoutItem = ( {item} ) => { 
  const { name, imageUrl, price, quantity } = item

  const { clearItemFromCart, addItemToCart, removeItemFromCart  } = useContext(CartContex)

  const clearItemHandler = () => clearItemFromCart(item)
  const addItemHandler = () => addItemToCart(item)
  const removeItemHandler = () => removeItemFromCart(item)
  return ( 
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'> { name }</span>

      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>&#10094;</div>

        <span className='value'>{ quantity }</span>

        <div className='arrow' onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className='price'>{ price }</span>
      <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
    </div>
  )
}

export default CheckoutItem