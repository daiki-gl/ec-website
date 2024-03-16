export interface ProductType {
  id: string
  description: string
  name: string
  images: string[]
  unit_label: string
  active: boolean
  metadata: {
    type: string
  }
  created: string
  prices: {
    id: string
    currency: string
    unit_amount: number
  }[]
}

export interface ProductDataType {
  data: ProductType
}

export interface CartProductsType {
  data: {
    id: string
    name: string
    prices: {
      id: string
      unit_amount: number
    }[]
  }
  orderQuantity: number
}
