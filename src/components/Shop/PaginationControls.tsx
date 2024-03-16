'use client'
import useProductsStore from "@/store/useProductStore"
import { Dispatch, SetStateAction } from "react"

const PaginationControls = ({listPerPage,setCurrentPage, currentPage}: {listPerPage:number,setCurrentPage:Dispatch<SetStateAction<number>>, currentPage: number}) => {
const {displayProducts} = useProductsStore()

let pages:number[] = [];
for(let i = 1; i <= Math.ceil(Number(displayProducts?.length)/listPerPage); i++){
    pages.push(i)
}

  return (
    <div className="text-center mt-8">
        {pages.length > 0 && pages && pages.map((page, i) => (
            <button key={i} onClick={() => setCurrentPage(page)} 
            className={`
              ${page === currentPage ? 'bg-red-500 text-white' : ''}
              px-2 rounded-sm mr-1 border border-red-500 hover:bg-red-500 hover:text-white duration-200
              `}
            >{page}</button>
            ))}
    </div>
  )
}

export default PaginationControls