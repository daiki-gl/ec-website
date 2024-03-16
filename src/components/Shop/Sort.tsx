'use client'
import useProductsStore from "@/store/useProductStore"
import { Dispatch, SetStateAction } from "react"

// const SORT_VALUES = ['New to old','Old to new', 'Price:Low to high', 'Price:High to low', 'Name:A to Z', 'Name:Z to A']
const Sort = ({setCurrentPage}: {setCurrentPage:Dispatch<SetStateAction<number>>}) => {
    const {sortProducts} = useProductsStore()
  return (
    <select onChange={(e) => {
        sortProducts(e.target.value)
        setCurrentPage(1)
        }}>
    <option disabled defaultValue='normal'>Sort</option>
    <option value="New to old">New to old</option>
    <option value="Old to new">Old to new</option>
    <option value="Price:Low to high">Price:Low to high</option>
    <option value="Price:High to low">Price:High to low</option>
    <option value="Name:A to Z">Name:A to Z</option>
    <option value="Name:Z to A">Name:Z to A</option>
  </select>
  )
}

export default Sort