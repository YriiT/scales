import { urls, methods } from 'utils'
import { logo, shLogo } from '../assets'

const SHOW_SIDEBAR_TITLE = 'SHOW_SIDEBAR_TITLE'
const HIDE_SIDEBAR_TITLE = 'HIDE_SIDEBAR_TITLE'
const GET_WEIGHT = 'GET_WEIGHT'
const GET_PRICE = 'GET_PRICE'

export const showSideBarTitle = () => ({
  type: SHOW_SIDEBAR_TITLE
})
export const hideSideBarTitle = () => ({
  type: HIDE_SIDEBAR_TITLE
})

export const actions = {
  showSideBarTitle,
  hideSideBarTitle
}
const receiveWeight = weight => ({
  type: GET_WEIGHT,
  weight
})
const receivePrice = price => ({
  type: GET_PRICE,
  price
}
)
export const getWeight = () => methods.mainGet(urls.currentWeight, receiveWeight)
export const getPrice = (query) => methods.mainGet(`${urls.productPrice}${query}`, receivePrice)

const ACTION_HANDLERS = {
  [SHOW_SIDEBAR_TITLE]: (state, action) => (
    { ...state, leftWidth: '20%', rightWidth: '80%', showTitle: true, logotip: logo }
  ),
  [HIDE_SIDEBAR_TITLE]: (state, action) => (
    { ...state, leftWidth: '10%', rightWidth: '90%', showTitle: false, logotip: shLogo }
  ),
  [GET_WEIGHT]: (state, action) => ({ ...state, weight: action.weight.data.weight }),
  [GET_PRICE]: (state, action) => ({ ...state, price: action.price.data })
}

const initialState = {
  logotip: logo,
  leftWidth: '20%',
  rightWidth: '80%',
  showTitle: true,
  weight: 0,
  price: {
    price_per_kg: 0,
    price_per_unit: 0,
  }
}

export default function LayoutReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
