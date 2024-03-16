'use client'
import { useEffect } from "react"
import PricingCard from "./PricingCard";
import useProductsStore from "../store/useProductStore";
import { ProductType } from "../../type";

const ItemList = ({productsData}:{productsData:ProductType[]}) => {
  const {displayProducts} = useProductsStore()
  useEffect(() => {
        useProductsStore.setState({products: productsData})
        useProductsStore.setState({displayProducts:productsData})
    },[])
    const newItems = displayProducts?.slice(0, 5)

  return (
    <section className='w-full'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-[1150px] text-gray-600 mx-auto">
        {newItems && newItems.map((itemData:ProductType) => (
          <PricingCard key={itemData.id} itemData={itemData} />
        ))}
      </div>
    </section>
  )
}

export default ItemList
