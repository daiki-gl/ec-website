'use client'
import { Dispatch, SetStateAction, useState } from "react"
import useProductsStore from "@/store/useProductStore";
import PricingCard from "../PricingCard";
import PaginationControls from "./PaginationControls";
import { ProductType } from "../../../type";

const ItemLists = ({setCurrentPage, currentPage}:{setCurrentPage:Dispatch<SetStateAction<number>>,currentPage:number}) => {
  const {displayProducts} = useProductsStore()
  const [listPerPage, setListPerPage] = useState(10)
  const lastListItemIndex = currentPage * listPerPage;
  const firstListItemIndex = lastListItemIndex - listPerPage
  const currentItems = displayProducts?.slice(firstListItemIndex, lastListItemIndex)

  return (
    <section className='w-full'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-[1150px] text-gray-600 mx-auto">
        { currentItems && currentItems.map((itemData:ProductType) => (
          <PricingCard key={itemData.id} itemData={itemData} />
        ))}
      </div>

      <PaginationControls listPerPage={listPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />

    </section>
  )
}

export default ItemLists
