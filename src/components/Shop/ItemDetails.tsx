'use client'
import useCartStore from "@/store/useCartStore"
import Image from "next/image"
import { MouseEvent, useState } from "react"
import { CartProductsType, ProductType } from "../../../type"

const ItemDetails = ({itemData}: {itemData:ProductType}) => {
  const [quantity, setQuantity] = useState(1)
  const [notice, setNotice] = useState(false)
  const { cart, addItem,addPrice, updateItem} = useCartStore()

  const AddToCart = (e:MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, data: ProductType, quantity: number) => {
    e.preventDefault()
    setNotice(false)
    //Separate this if statement
    if(cart.length > 0) {
      const target = cart.filter((cartItem:CartProductsType) => cartItem.data.id === data.id)
        if(target.length > 0) {
        if(target[0].orderQuantity + quantity <= 5) {
          updateItem(data, quantity)
          addPrice(Number(data.prices[0].unit_amount) * quantity)
          return
        } else{
          setNotice(true)
        }}
  
        if(target.length === 0) {
          addItem(data,quantity)
          addPrice(Number(data.prices[0].unit_amount) * quantity)
          return
        }
  
      } else {
        addItem(data, quantity)
        addPrice(Number(data.prices[0].unit_amount) * quantity)
        return
      }
    }

  return (
    <div className="max-w-[1150px] mx-auto mt-5 flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 mr-5 mb-5 md:mb-0">
        <Image className="w-full" src={itemData.images[0]} alt={itemData.name} width={300} height={300} />
      </div>
      <div className="w-full md:w-3/5">
        <h2 className="font-bold text-3xl">{itemData.name}</h2>
        <p className="font-semibold mt-4">Description</p>
        <p>{itemData.description}</p>

        <br />
        <p className="font-semibold">Price</p>
        <p className="font-semibold text-xl"><span className="text-gray-600 font-light text-sm mr-2">CAD</span>{(itemData.prices[0].unit_amount / 100).toLocaleString('en-CA', {style: 'currency',currency: 'CAD'})}</p>

        <form>
          <div className='my-5'>
            {notice && <p className="font-semibold text-sm text-red-500 mb-2">*Can&apos;t add more this item</p>}
            <select name="qty" className='p-2 rounded mr-10 inline-block bg-blue-700 text-white px-8 font-semibold' onChange={(e) => setQuantity(Number(e.target.value))}>
              {itemData.active === false ? <option disabled defaultValue={0} >0</option> : 
              (
                <>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </>
              )}
            </select>
            <button 
                onClick={(e) => AddToCart(e, itemData, quantity)} 
                className=" mt-4 w-full rounded-md border border-transparent bg-red-500 py-2 px-5 text-sm font-medium text-white">
                Add To Cart
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ItemDetails