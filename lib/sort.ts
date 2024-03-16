import { ProductType } from '../type'
interface SortValType {
  sortVal: string
  state: {
    displayProducts: ProductType[] | null
  }
}

export function sortFunction(sortVal: SortValType) {
  switch (sortVal.sortVal) {
    case 'New to old':
      return {
        displayProducts: sortVal.state.displayProducts?.sort(
          (a: any, b: any) => {
            if (a.created < b.created) {
              return 1
            }
            if (a.created > b.created) {
              return -1
            }
            return 0
          }
        ),
      }

    case 'Old to new':
      return {
        displayProducts: sortVal.state.displayProducts?.sort(
          (a: any, b: any) => {
            if (a.created < b.created) {
              return -1
            }
            if (a.created > b.created) {
              return 1
            }
            return 0
          }
        ),
      }

    case 'Name:A to Z':
      return {
        displayProducts: sortVal.state.displayProducts?.sort(
          (a: any, b: any) => {
            if (a.name.toUpperCase() < b.name.toUpperCase()) {
              return -1
            }
            if (a.name.toUpperCase() > b.name.toUpperCase()) {
              return 1
            }
            return 0
          }
        ),
      }

    case 'Name:Z to A':
      return {
        displayProducts: sortVal.state.displayProducts?.sort(
          (a: any, b: any) => {
            if (a.name.toUpperCase() < b.name.toUpperCase()) {
              return 1
            }
            if (a.name.toUpperCase() > b.name.toUpperCase()) {
              return -1
            }
            return 0
          }
        ),
      }

    case 'Price:Low to high':
      return {
        displayProducts: sortVal.state.displayProducts?.sort(
          (a: any, b: any) => a.prices[0].unit_amount - b.prices[0].unit_amount
        ),
      }

    case 'Price:High to low':
      return {
        displayProducts: sortVal.state.displayProducts?.sort(
          (a: any, b: any) => b.prices[0].unit_amount - a.prices[0].unit_amount
        ),
      }

    default:
      return { displayProducts: sortVal.state.displayProducts }
  }
}
