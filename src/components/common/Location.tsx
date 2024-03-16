import { IoLocationOutline } from 'react-icons/io5'

const Location = () => {
  return (
    <div className="hidden md:flex items-center font-light text-slate-500">
        <IoLocationOutline className="text-lg" />
        <span className="text-xs">Kitsilano Beach, Vancouver, BC</span>
    </div>
  )
}

export default Location