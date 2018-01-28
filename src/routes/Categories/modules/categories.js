import { urls, methods } from 'utils'

// ------------------------------------
// Constants
// ------------------------------------
export const GET_CATEGORY_NAMES = 'GET_CATEGORY_NAMES'


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
    type: GET_PRODUCTS,
    categoryProduct
  }
}
// ---- methods

export const getCategoryNames = () => methods.mainGet(urls.categoryNames, receiveCategoryNames)

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
  [GET_CATEGORY_NAMES]: (state, action) => ({ ...state, categoryNames: action.categoryNames.data })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  categoryNames: []
}
export default function categoriesReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
