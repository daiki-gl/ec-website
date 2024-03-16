'use client'
import Link from "next/link";
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import Title from "../common/Title";
import Location from "../common/Location";
import useCartStore from "@/store/useCartStore";
import Cart from "./Cart";
import axios from "axios";
import useProductsStore from "@/store/useProductStore";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { CartProductsType } from "../../../type";
import { config } from "../../../config";

const Header = () => {
    const path = usePathname()
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const [keyword, setKeyword] = useState('')
    const {cart, totalCartPrice} = useCartStore()
    const {searchByName} = useProductsStore()

    const searchItem = (e:FormEvent<HTMLFormElement> | ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setKeyword((e.target as HTMLInputElement).value)
        path === '/' && router.push('shop')
        keyword !== undefined && searchByName(keyword)
    }

    const handleCheckout = async (e:MouseEvent<HTMLButtonElement>) => {
        const { data } = await axios.post(`${config.NEXT_PUBLIC_MAIN_URL}/api/payment`, {
          items: cart
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
    <div className="shadow-md shadow-gray-300 pt-5 pb-5 md:pb-0">
        <div className="block relative">

            <div className="w-full flex md:justify-between  gap-4 mx-auto px-4 lg:px-8">
               <Title />

               <button className="md:hidden block ml-auto" onClick={() => setOpen(prev => !prev)}>
                    <span className={`relative block w-5 h-[2px] bg-slate-500  duration-300 ${open ? 'rotate-45 top-[6px]' : 'rotate-0'}`}></span>
                    <span className={`block h-[2px] bg-slate-500 my-1 duration-100 ${open ? 'w-0' : 'w-5'}`}></span>
                    <span className={`relative block w-5 h-[2px] bg-slate-500  duration-300 ${open ? '-rotate-45 top-[-6px]' : 'rotate-0'}`}></span>
                </button>

                <Location />

                <form onSubmit={searchItem} className="hidden md:block flex-1 align-middle">
                    <input 
                        type="text"
                        className="border border-black rounded-s-md border-r-0 py-2 px-3 h-10 w-[calc(100%-26px)] lg:w-[calc(100%-45px)] min-w-40"
                        placeholder="Search"
                        value={keyword}
                        onChange={(e) => path !== '/' ? searchItem(e) : setKeyword(e.target.value)}
                    />
                    <button className="border border-black rounded-e-md py-2 px-1 lg:px-3 h-10 align-top">
                        <IoMdSearch />
                    </button>
                </form>

                <button onClick={() => setCartOpen(prev => !prev)} className="text-3xl">
                    {cart && cart.length > 0 && (<span className="text-xs bg-red-500 rounded-full px-[5px] absolute -top-2 right-2 md:right-6 text-white">{cart.length}</span>)}
                    <IoCartOutline />
                </button>
            </div>

            <div className={`mx-auto px-10 pt-5 absolute md:static bg-white w-full duration-300 ${open ? 'left-0' : 'left-[150%]'}`}>

                <form onSubmit={searchItem} className="block md:hidden flex-1 align-middle mb-5">
                    <input 
                        type="text"
                        className="border border-black rounded-s-md border-r-0 py-2 px-3 h-10 w-[calc(100%-26px)]"
                        placeholder="Search"
                        value={keyword}
                        onChange={(e) => path !== '/' ? searchItem(e) : setKeyword(e.target.value)}
                    />
                    <button className="border border-black rounded-e-md py-2 px-1 h-10 align-top">
                        <IoMdSearch />
                    </button>
                </form>
    
                <nav>
                    <ul className="md:flex justify-between">
                        <li className="border-b-4 border-transparent hover:border-pink-500 duration-150 mb-2 md:mb-0"><Link href={{pathname: '/shop', query: {category: 'balloons'}}}>Balloons</Link></li>
                        <li className="border-b-4 border-transparent hover:border-pink-500 duration-150 mb-2 md:mb-0"><Link href={{pathname: '/shop', query: {category: 'toys'}}}>Toys</Link></li>
                        <li className="border-b-4 border-transparent hover:border-pink-500 duration-150 mb-2 md:mb-0"><Link href={{pathname: '/shop', query: {category: 'birthdaySupplies'}}}>Birthday Party Supplies</Link></li>
                        <li className="border-b-4 border-transparent hover:border-pink-500 duration-150 mb-2 md:mb-0"><Link href={{pathname: '/shop', query: {category: 'seasonalGoods'}}}>Holiday Celebrations</Link></li>
                        <li className="border-b-4 border-transparent hover:border-pink-500 duration-150 mb-2 md:mb-0"><Link href={{pathname: '/shop', query: {category: 'costumes'}}}>Costumes</Link></li>
                        <li className="border-b-4 border-transparent hover:border-pink-500 duration-150 mb-2 md:mb-0"><Link href={{pathname: '/shop', query: {category: 'otherGoods'}}}>Other Goods</Link></li>
                    </ul>
                </nav>
            </div>

            <div className={`absolute top-[50px] ${cartOpen ? 'right-0' : '-right-[80%]'} duration-300 bg-white pt-5 pb-3 px-5 max-w-[300px] w-[300px] shadow-xl scroll-auto`}>
                <button className="block ml-auto" onClick={() => setCartOpen(false)}>
                    <span className={'block relative top-[2px] w-5 h-[2px] rotate-45 origin-center bg-black'}></span>
                    <span className={'block relative w-5 h-[2px] -rotate-45 origin-center bg-black'}></span>
                </button>

                <div className="mt-5">
                    <ul>
                        {cart && cart.length > 0 ? cart.map((item:CartProductsType) => (
                            <Cart key={item.data.id} item={item} />
                        )) : (<li>No item in your cart</li>)}
                    </ul>
                    <div className="flex border-b border-black font-semibold mt-5">
                        <span className="">Total:</span>
                        <span className="ml-auto">{(totalCartPrice / 100).toLocaleString('en-CA', {style: 'currency',currency: 'CAD'})}</span>
                    </div>
                    <button 
                        onClick={(e) => handleCheckout(e)} 
                        className="mt-4 w-full rounded-md border border-transparent bg-red-500 py-2 px-5 text-sm font-medium text-white">Purchase</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header