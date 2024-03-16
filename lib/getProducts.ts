import { config } from '../config'
import { ProductType } from '../type'

export async function getProducts() {
  const Products: ProductType[] = await fetch(
    `${config.MAIN_URL}/api/getProducts`
  )
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      return console.log('Error occurred here --->>', err)
    })
  return Products
}
