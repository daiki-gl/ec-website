import Image from "next/image"
import Link from "next/link"

const Category = ({title,img,category}: {title:string, img:string, category:string}) => {
  return (
    <div className="mb-8 md:mb-0">
      <Link href={{pathname: '/shop', query: {category}}}>
        <div><Image src={`/${img}`} width={150} height={150} alt='' className='rounded-full w-[150px] h-[150px] object-cover' /></div>
        <h4 className='font-semibold mt-2 text-center'>{title}</h4>
      </Link>
    </div>
  )
}

export default Category