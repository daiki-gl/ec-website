import axios from 'axios'
import { config } from '../../config'
import ItemList from './ItemList'

const NewItemList = async() => {
  // const { data: productsData } = await axios(`${config.MAIN_URL}/api/getProducts`, { method: 'GET' })
    // const resPro = await fetch(`${config.MAIN_URL}/api/getProducts`)
    // const productsData = await resPro.json()

    const productsData = await fetch(`${config.MAIN_URL}/api/getProducts`)
    .then((res) => {
        return res.json();
  }).catch(err => {
    console.log('Error occurred here --->>',err)
  })

  return (
    <div className='max-w-[1150px] mx-auto px-4'>
        <h2 className='text-3xl font-bold'>Must Have Party Supplies</h2>
        <ItemList productsData={productsData} />
    </div>
  )
}

export default NewItemList