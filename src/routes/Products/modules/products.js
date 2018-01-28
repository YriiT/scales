import { urls, methods } from 'utils'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_PRODUCTS = 'GET_PRODUCTS'
// ------------------------------------
// Actions
// ------------------------------------
const receiveProduct = products => {
  return {
    type: GET_PRODUCTS,
    products
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */
export const getProducts = () => methods.mainGet(urls.productList, receiveProduct)

export const actions = {
  getProducts
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_PRODUCTS]: (state, action) => ({ ...state, products: action.products.data })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  products: []
}
export default function productsReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
