import { config } from "../config"
import useCartStore from "@/store/useCartStore"
import axios from "axios"
import { useRouter } from "next/navigation"


const MAIN_URL = config.MAIN_URL

const usePurchase = () => {
    const {cart} = useCartStore()
    const router = useRouter()
    
    const handlePurchase = async () => {
      const { data } = await axios(`${MAIN_URL}/api/purchase`, {method: 'POST', headers: {'Content-Type': 'application/json'},data: {cart}})
      router.push(data.url)
    }
  return {handlePurchase}
}

export default usePurchase