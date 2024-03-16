'use client'
import {MouseEvent} from 'react'
import axios from 'axios'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ProductType } from '../../type'
import { config } from '../../config'

const PricingCard = ({itemData}:{itemData:ProductType}) => {
  const path = usePathname().split('/')
  path.shift()

  const handleCheckout = async (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { data } = await axios.post(`${config.NEXT_PUBLIC_MAIN_URL}/api/payment`, {
      items: [{data:itemData, orderQuantity: 1}]
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
    );
    window.location.assign(data)
  }

  return (
    <div className='shadow-2xl text-center mt-10 max-w-[1150px]'>
        <div className='items-center h-full text-left font-semibold text-black'>
          <Image
            className='w-full h-[200px] object-contain'
            src={itemData.images[0]} 
            alt={itemData.name} 
            width={300} 
            height={200}
          />
          <div className='p-4'>
            <h4 className='text-lg'>{itemData.name}</h4>
            <span className='font-light text-xs line-clamp-2 mb-4'>{itemData.description}</span>
            <p>{itemData && (itemData.prices[0].unit_amount / 100).toLocaleString('en-CA', {
              style: 'currency',
              currency: 'CAD'
            })}</p>
            {path[0] !== '' ? (
                <Link
                href={{pathname:`${path.length >= 2 ? itemData.name : path + '/' + itemData.name}`, query: {item:JSON.stringify(itemData)}}}
                className="block text-center mt-4 w-full rounded-md border border-transparent bg-blue-500 py-2 px-5 text-sm font-medium text-white">
                See Details
              </Link>
            ) : (
              <button 
                onClick={handleCheckout} 
                className=" mt-4 w-full rounded-md border border-transparent bg-red-500 py-2 px-5 text-sm font-medium text-white">
                Buy Now
              </button>
            )}
          </div>
        </div>
    </div>
  )
}

export default PricingCard