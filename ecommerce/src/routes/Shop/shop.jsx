import { useContext } from "react"
import { ProductsContext } from "../../context/products"
import ProductCard from "../../components/Products Card/product-card"
import './shop.style.scss'

const Shop = () => { 
  const { products } = useContext(ProductsContext) 
  return (
    <div className="products-container">
      {products.map((product) => {
        return(
          <ProductCard key={product.id} product={product}/>
        )
      })}
    </div>
  )
}

export default Shop