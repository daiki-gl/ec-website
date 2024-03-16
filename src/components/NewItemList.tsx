import { getProducts } from '../../lib/getProducts'
import ItemList from './ItemList'

const NewItemList = async() => {
  const productsData = await getProducts()

  return (
    <div className='max-w-[1150px] mx-auto px-4'>
        <h2 className='text-3xl font-bold'>Must Have Party Supplies</h2>
        <ItemList productsData={productsData} />
    </div>
  )
}

export default NewItemList