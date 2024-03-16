
import Image from 'next/image'
import Link from 'next/link'
import Category from '../components/Category'
import { FiAward } from "react-icons/fi";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import NewItemList from '../components/NewItemList'

const Home = () => {
  const CATEGORIES = [
    {
    title:'Toys',
    img: 'category01.jpg',
    category: 'toys',
  },
    {
    title:'Balloons',
    img: 'category02.jpg',
    category: 'balloons',
  },
    {
    title:'Birthday Supplies',
    img: 'category03.jpg',
    category: 'birthdaySupplies',
  },
    {
    title:'Costumes',
    img: 'category04.jpg',
    category: 'costumes',
  },
    {
    title:'Seasonal goods',
    img: 'category05.jpg',
    category: 'seasonalGoods',
  },
]

  return (
    <div className='px-3 md:px-0 overflow-x-hidden'>

        <div className='flex flex-col-reverse md:flex-row bg-orange-50 max-w-[1150px] mx-auto my-10'>
          <div className='left py-12 md:py-20 px-10'>
            <h3 className='font-bold text-4xl mb-4'>Elevate Any Event</h3>
            <p className=' text-slate-600 mb-7'>Bring your party to life with balloons in a variety of styles, shapes and colors.</p>
            <Link href="shop" className='block uppercase bg-red-500 text-white text-center py-4 hover:shadow-xl hover:bg-red-700 duration-200'>Shop Now</Link>
          </div>
          <Image className='w-full md:w-3/4 md:ml-auto' src={'/ad01.jpg'} alt='' width={500} height={300} />
        </div>

      <NewItemList />

      <div className="max-w-[1150px] mx-auto my-12 md:my-20">
        <h2 className='text-3xl font-bold mb-5'>Categories</h2>
        <div className="flex flex-wrap justify-evenly">
          {CATEGORIES.map((cat) => (
            <Category key={cat.title} title={cat.title} img={cat.img} category={cat.category} />
          ))}
        </div>
      </div>

      <div className='flex flex-col-reverse md:flex-row bg-green-100 max-w-[1150px] mx-auto my-10'>
          <div className='left py-12 md:py-20 px-10'>
            <h3 className='font-bold text-4xl mb-4'>Bright & Bold Birthdays</h3>
            <p className=' text-slate-600 mb-7'>Celebrate in style with themed decor, favours, balloons and more.</p>
            <Link href="shop" className='block uppercase bg-blue-500 text-white text-center py-4 hover:shadow-xl hover:bg-red-700 duration-200'>Shop Now</Link>
          </div>
          <Image className='w-full md:w-3/5 md:ml-auto' src={'/ad02.jpg'} alt='' width={500} height={300} />
      </div>

      <div className='flex flex-col-reverse md:flex-row-reverse bg-orange-100 max-w-[1150px] mx-auto my-10'>
          <div className='left py-12 md:py-20 px-10'>
            <h3 className='font-bold text-4xl mb-4'>Bright & Bold Birthdays</h3>
            <p className=' text-slate-600 mb-7'>Celebrate in style with themed decor, favours, balloons and more.</p>
            <Link href="shop" className='block uppercase bg-orange-500 text-white text-center py-4 hover:shadow-xl hover:bg-red-700 duration-200'>Shop Now</Link>
          </div>
          <Image className='w-full md:w-3/5 md:ml-auto' src={'/ad03.jpg'} alt='' width={500} height={300} />
      </div>

      <section className='max-w-[1150px] mx-auto my-12 md:my-20'>
        <div className='flex flex-wrap gap-10 md:gap-5 justify-evenly'>

          <div>
            <div className='rounded-full bg-red-200 p-4 text-4xl text-red-600 w-[fit-content] mx-auto'>
              <FiAward />
            </div>
            
            <div className='text-center'>
              <h4 className='font-semibold'>The Greatest Selection</h4>
              <p>Of Party Supplies in Canada.</p>
            </div>
          </div>

          <div>
            <div className='rounded-full bg-blue-200 p-4 text-4xl text-blue-600 w-[fit-content] mx-auto'>
            <CiDeliveryTruck />
            </div>
            
            <div className='text-center'>
              <h4 className='font-semibold'>Fast Delivery</h4>
              <p>Anywhere in Canada and USA.</p>
            </div>
          </div>

          <div>
            <div className='rounded-full bg-yellow-200 p-4 text-4xl text-yellow-600 w-[fit-content] mx-auto'>
            <MdOutlineSecurity />
            </div>
            
            <div className='text-center'>
              <h4 className='font-semibold'>Secure Payments</h4>
              <p>All transactions are secured.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home