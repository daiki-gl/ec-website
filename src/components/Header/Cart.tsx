'use client'
import useCartStore from "@/store/useCartStore"
import { FaRegTrashCan } from "react-icons/fa6"
import { CartProductsType, ProductType } from "../../../type"

const Cart = ({item}:{item:CartProductsType}) => {
    const {deleteItem, subtractPrice} = useCartStore()

  return (
    <li key={item.data.id} className="flex border-b border-black mb-2">
        <span className="mr-2 font-semibold line-clamp-1">{item.data.name}</span>
        <span className="ml-auto mr-1">{item.orderQuantity}×</span>
        <span>{(item.data.prices[0].unit_amount / 100).toLocaleString('en-CA', {style: 'currency',currency: 'CAD'})}</span>

        <button className="ml-5" onClick={() => {
            deleteItem(item.data as ProductType)
            subtractPrice(item.data.prices[0].unit_amount * item.orderQuantity)
            }}><FaRegTrashCan /></button>
    </li>
  )
}

export default Cart