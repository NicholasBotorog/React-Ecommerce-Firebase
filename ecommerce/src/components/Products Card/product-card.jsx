import { useContext } from 'react'

import './product-card.scss'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/button.component'

import { CartContex } from '../../context/cart-dropdown'

const ProductCard = ( { product }) => {
  const { addItemToCart } = useContext(CartContex)

  const addProductToCart = () => addItemToCart(product)

  return(
  <div className='product-card-container'>
    <img src={product.imageUrl} alt={product.name}/>
    <div className='footer'>
      <span className='name'>{product.name}</span>
      <span className='price'>{product.price}</span>
    </div>
    <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to Cart</Button>
  </div>
  )
}

export default ProductCard