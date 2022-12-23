import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { CategoriesContext } from '../../context/categories'

import './category.scss'
import ProductCard from '../../components/Products Card/product-card'

const Category = () => { 
  const { category } = useParams()
  const { categoriesMap } = useContext(CategoriesContext)
  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => { 
    setProducts(categoriesMap[category])
  }, [category, categoriesMap])

  return ( 
    <div className='category-container'>
      {products && products.map((product) => <ProductCard key={product.id} product = {product} />)}
    </div>
  )
}

export default Category