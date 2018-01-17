import { urls, methods } from 'utils'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_CATEGORY_NAMES = 'GET_CATEGORY_NAMES'
export const GET_CATEGORY_PRODUCT = 'GET_CATEGORY_PRODUCT'

// ------------------------------------
// Actions
// ------------------------------------
const receiveCategoryNames = categoryNames => {
  return {
    type: GET_CATEGORY_NAMES,
    categoryNames
  }
}
const receiveСategoryProduct = categoryProduct => {
  return {
    type: GET_CATEGORY_PRODUCT,
    categoryProduct
  }
}
// ---- methods

export const getCategoryNames = () => methods.mainGet(urls.categoryNames, receiveCategoryNames)
export const getCategoryProduct = () => methods.mainGet(urls.categoryProduct, receiveСategoryProduct)
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const actions = {
  receiveCategoryNames,
  receiveСategoryProduct
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_CATEGORY_NAMES]: (state, action) => ({ ...state, categoryNames: action.categoryNames.data }),
  [GET_CATEGORY_PRODUCT]: (state, action) => ({ ...state, categoryProduct: action.categoryProduct.data })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function categoriesReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
