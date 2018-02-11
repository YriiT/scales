import { urls, methods } from 'utils'

// ------------------------------------
// Constants
// ------------------------------------
const GET_PRODUCTS = 'GET_PRODUCTS'
const CLEAR_PRODUCTS = 'CLEAR_PRODUCTS'
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
export const getProducts = (categoryId) => (
  methods.mainGet(`${urls.productList}?category_id=${categoryId}`, receiveProduct)
)
export const clearProductArray = () =>
  ({ type: CLEAR_PRODUCTS })
export const actions = {
  getProducts
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_PRODUCTS]: (state, action) => ({ ...state, products: action.products.data }),
  [CLEAR_PRODUCTS]: state => ({ products: [] })
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
