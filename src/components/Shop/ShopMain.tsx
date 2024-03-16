'use client'
import { useEffect, useState } from "react"
import Filter from "./Filter"
import ItemLists from "./ItemLists"
import Sort from "./Sort"
import useProductsStore from "@/store/useProductStore"
import { useSearchParams } from "next/navigation"
import { ProductType } from "../../../type"

const ShopMain = ({productsData}:{productsData:ProductType[]}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const {filterByCategory} = useProductsStore()
    const params = useSearchParams()
    const cat = params.get('category')

    useEffect(() => {
        useProductsStore.setState({products: productsData})
        useProductsStore.setState({displayProducts:productsData})
    },[])

    useEffect(() => {
      if(cat !== null) {
        filterByCategory(cat)
        setCurrentPage(1)
      }
    },[cat])
    
  return (
    <div className="mt-3">
          <Filter setCurrentPage={setCurrentPage} />
          <Sort setCurrentPage={setCurrentPage} />
          <ItemLists setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  )
}

export default ShopMain