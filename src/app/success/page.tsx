import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import Confetti from '../../components/Confetti';

const Success = () => {
  return (
    <>
    <Confetti />
    <div className='mt-20 px-3'>
      <div className='bg-green-400 m-5 p-8 rounded-lg text-center text-white max-w-[800px] mx-auto'>
        <div className='inline-block p-3 mb-5 rounded-full bg-white'>
          <FaCheck className='text-green-400 text-4xl' />
        </div>
        <h2 className='font-semibold mb-5 text-lg'>Thank You!!</h2>
        <h2 className='font-bold text-3xl uppercase mb-3'>Your order is confirmed</h2>
        <p className='font-light text-lg'>We’ll send you a shipping confirmation email <br />as soon as your order ships</p>
        <Link className='block bg-white text-xl font-bold px-2 py-3 w-[280px] mx-auto mt-7 hover:bg-slate-100 duration-200' href="/">
          <span className='text-red-600'>H</span>
          <span className='text-yellow-400'>O</span>
          <span className='text-green-500'>M</span>
          <span className='text-blue-500'>E</span>
          </Link>
      </div>
    </div>
    </>
    )
}

export default Success