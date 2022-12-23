import { createContext, useState, useEffect } from "react"
// import { shopData } from "../components/helpers/category"

import { addCollectionAndDocument, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils"


export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => { 
  const [categoriesMap, setcategoriesMap ] = useState({})


  // This need to run only once and then delete it.
  // This is creating the Categories Database inside the Firestore 
  // After the collection was created, you dont need the useEffect anymore, because it will keep overwriting your database.

  // useEffect(() => { 
  //   addCollectionAndDocument('categories', shopData)
  // })


  // After successfully uploading our local data to Firestore, we want to use the data from Firestore 
  useEffect(() => { 
    const getCategoriesMap = async() => { 
      const categoryMap = await getCategoriesAndDocuments()
      setcategoriesMap(categoryMap)
    }
    getCategoriesMap()
  },[])

  const value = { categoriesMap }
  
  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}