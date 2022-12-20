import { createContext, useState } from "react"
import { shopData } from "../components/helpers/category"


export const ProductsContext = createContext({
  products: [],
})

export const ProductsProvider = ({ children }) => { 
  const [products ] = useState(shopData)
  const value = { products }
  
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}