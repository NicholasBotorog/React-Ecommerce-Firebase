import './check-out.scss'
import { useContext } from 'react'
import { CartContex } from '../../context/cart-dropdown'


const CheckOut = () => { 

  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContex) 
  return (
    <div> 
      <div className='cart-items'>
      { cartItems.map((item) => { 
        const {id, name, quantity} = item
        return(
          <div key={id}>
            <h2>{name}</h2>
            <h2>{quantity}</h2>
            <br />
            <span onClick={() => addItemToCart(item)}> INCREMENT </span>
            <br />
            <span onClick={() => removeItemFromCart(item)}> DECREMENT </span>
          </div>
        )
      })}
      </div>

      <div>
        <h1>Total:</h1>
        <span>{cartItems.reduce((price, item) => {
          const totalItem = price * item.quantity
          return totalItem
          }, 0)}</span>
      </div>
    </div>
  )
}

export default CheckOut