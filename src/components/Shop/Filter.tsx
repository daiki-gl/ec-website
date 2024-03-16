'use client'
import useProductsStore from "@/store/useProductStore"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction } from "react"

const Filter = ({setCurrentPage}:{setCurrentPage:Dispatch<SetStateAction<number>>}) => {
    const {filterByCategory} = useProductsStore()
    const router = useRouter()

  return (
    <select 
      className="mr-5"
      onChange={(e) => {
        filterByCategory(e.target.value)
        setCurrentPage(1)
        e.target.value !== 'all' ? router.push("shop?category="+e.target.value) : router.push("shop")
        }}>
    <option disabled defaultValue='all'>Category</option>
    <option value="all">All</option>
    <option value="balloons">Balloon</option>
    <option value="toys">Toys</option>
    <option value="birthdaySupplies">Birthday Supplies</option>
    <option value="costumes">Costume</option>
    <option value="seasonalGoods">Seasonal Goods</option>
    <option value="otherGoods">Others Goods</option>
  </select>
  )
}

export default Filter