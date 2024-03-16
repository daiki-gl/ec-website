'use client'
import { create } from 'zustand'
import { sortFunction } from '../../lib/sort'
import { ProductType } from '../../type'

interface UseProductStore {
  products: ProductType[] | null,
  prices: [] | null,
  displayProducts: ProductType[] | null,
  filterByCategory: (category: string) => void,
  sortProducts: (sortVal: string) => void,
  searchByName: (keyword: string) => void,
}

const useProductsStore = create<UseProductStore>()((set) => ({
    products: [],
    prices: [],
    displayProducts: [],
    filterByCategory: (category) => set((state) => {
    return category === 'all' ? ({displayProducts: state.products}) : ({displayProducts: state.products?.filter(product => product.metadata.type === category)})
}),

  sortProducts: (sortVal) => set((state) => {
    sortFunction({sortVal, state})
    return ({displayProducts: state.displayProducts})
  }),

  searchByName: (keyword) => set((state) => {
    return ({displayProducts: keyword !== '' ? state.products?.filter(product => product.name.toUpperCase().indexOf(keyword.toUpperCase()) !== -1) : state.products})
  }),

}))


export default useProductsStore