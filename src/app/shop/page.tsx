import BreadCrumb from "../../components/Shop/BreadCrumb"
import ShopMain from "../../components/Shop/ShopMain"
import { getProducts } from "../../../lib/getProducts"

const Shop = async() => {
  const productsData = await getProducts()

  return (
    <div className="max-w-[1150px] mx-auto mt-2 px-3 md:px-0">
        <BreadCrumb />
        <ShopMain productsData={productsData} />
    </div>
  )
}

export default Shop