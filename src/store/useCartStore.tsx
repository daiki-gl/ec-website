'use client'
import { create } from 'zustand'
import { CartProductsType, ProductDataType, ProductType } from '../../type';

type UseProductStore = {
  cart: CartProductsType[],
  totalCartPrice: number,
  addItem: (item: ProductType, quantity: number) => void,
  deleteItem: (item: ProductType) => void,
  updateItem: (item: ProductType, quantity: number) => void,
  addPrice: (price: number) => void,
  subtractPrice: (price: number) => void,
  // clearCart: () => void;
}

const useCartStore = create<UseProductStore>()((set) => ({
  cart: [],
  totalCartPrice: 0,
  addItem: (item, quantity) => set((state) => ({cart: [...state.cart , {data: item, orderQuantity: quantity}]})),

  deleteItem: (item) => set((state) => ({ cart: state.cart?.filter((cartItem:CartProductsType) => cartItem.data.id !== item.id)})),

  updateItem: (item, quantity) => set((state) => ({ cart: state.cart?.map((cartItem:CartProductsType) => {
    if(cartItem.data.id === item.id) {
    return {...cartItem, orderQuantity: cartItem.orderQuantity + quantity}
    }
    return cartItem
  })})),

  addPrice: (price) => set((state) => ({totalCartPrice: state.totalCartPrice + price})),
  subtractPrice: (price) => set((state) => ({totalCartPrice: state.totalCartPrice - price})),
  // clearCart: () => set({cart: [], totalCartPrice: 0})
}))

export default useCartStore