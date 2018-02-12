import { urls, methods } from 'utils'

// ------------------------------------
// Constants
// ------------------------------------
const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID'
const CLEAR_PRODUCT_INFO = 'CLEAR_PRODUCT_INFO'
// ------------------------------------
// Actions
// ------------------------------------
const reciveProductById = productInfo => ({
  type: GET_PRODUCT_BY_ID,
  productInfo
})
export const clearProductInfo = () => ({
  type: CLEAR_PRODUCT_INFO
})

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const getProductById = query =>
  methods.mainGet(`${urls.productInfo}${query}`, reciveProductById)

export const printByBaracode = id => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      fetch(urls.printBarcode, {
        method: 'POST',
        body: JSON.stringify({ 'product_id': id }),
        ...methods.defaultSettings
      })
        .catch(err => console.log(err))
    })
  }
}
export const actions = {
  getProductById
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_PRODUCT_BY_ID]: (state, action) => ({ ...state, productInfo: action.productInfo.data }),
  [CLEAR_PRODUCT_INFO]: state => ({ ...state, productInfo: {} })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  productInfo: []
}
export default function productInfoReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
