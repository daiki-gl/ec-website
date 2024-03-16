'use client'
import BreadCrumb from '../../../components/Shop/BreadCrumb'
import ItemDetails from '../../../components/Shop/ItemDetails'
import RelatedItems from '../../../components/Shop/RelatedItems'
import { useSearchParams } from 'next/navigation'

const Item = () => {
  const search = useSearchParams()
  const searchData = search.get('item')
  const data = JSON.parse(searchData!)

  return (
    <div className='max-w-[1150px] mx-auto mt-2 px-3 md:px-0'>
      <BreadCrumb />
      <ItemDetails itemData={data} />
      <RelatedItems category={data.metadata.type} id={data.id} />
    </div>
  )
}

export default Item