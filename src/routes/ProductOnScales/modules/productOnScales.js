import { urls } from 'utils'
import { defaultSettings } from '../../../utils/methods'
import { browserHistory } from 'react-router'

// ------------------------------------
// Constants
// ------------------------------------
const GET_PRODUCT_ON_SCALE = 'GET_PRODUCT_ON_SCALE'
const CLEAR_PRODUCTS_ON_SCALE = 'CLEAR_PRODUCTS_ON_SCALE'

// ------------------------------------
// Actions
// ------------------------------------
const reciveProductOnScale = (productsOnScales) => ({
  type: GET_PRODUCT_ON_SCALE,
  productsOnScales
})

export const getProductOnScale = () => {
  return (dispatch) => {
    return new Promise(resolve => {
      fetch(urls.productOnScale, {
        method: 'GET',
        ...defaultSettings
      })
        .then(res => res.json())
        .then(data => {
          if (data.data.length > 1) {
            dispatch(reciveProductOnScale(data.data))
          } else if (data.data.length === 0) {
            clearProductsOnScale()
          } else {
            browserHistory.push(`/product-info/wizard?product_id=${data.data[0].product_id}`)
          }
        })
        .catch(error => console.log(error))
    })
  }
}
export const clearProductsOnScale = () => ({ type: CLEAR_PRODUCTS_ON_SCALE })
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const actions = {
  getProductOnScale
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_PRODUCT_ON_SCALE]: (state, action) => ({ ...state, productsOnScales: action.productsOnScales }),
  [CLEAR_PRODUCTS_ON_SCALE]: state => ({ productsOnScales: [] })

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  productsOnScales: []
}
export default function productOnScalesReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
