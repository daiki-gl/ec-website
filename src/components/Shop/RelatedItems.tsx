'use client'
import useProductsStore from "@/store/useProductStore";
import PricingCard from "../PricingCard";
import { ProductType } from "../../../type";

const RelatedItems = ({category, id}:{category:string, id:string}) => {
  const {products} = useProductsStore()

  const relatedProducts = products?.filter((item:ProductType) => item.metadata.type === category && item.id != id )
    .slice(0, 4)

  return (
    <div className="mt-5">
    <hr />
      <h2 className="text-2xl text-center font-bold mt-5">Related Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 max-w-[1150px] text-gray-600 mx-auto">
        { relatedProducts && relatedProducts.map((itemData:ProductType) => (
          <PricingCard key={itemData.id} itemData={itemData} />
          ))}
      </div>
    </div>
  )
}

export default RelatedItems
