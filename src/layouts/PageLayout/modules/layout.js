import { urls, methods } from 'utils'
import { logo, shLogo } from '../assets'

const SHOW_SIDEBAR_TITLE = 'SHOW_SIDEBAR_TITLE'
const HIDE_SIDEBAR_TITLE = 'HIDE_SIDEBAR_TITLE'
const GET_WEIGHT = 'GET_WEIGHT'

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

export const getWeight = () => methods.mainGet(urls.currentWeight, receiveWeight)


const ACTION_HANDLERS = {
  [SHOW_SIDEBAR_TITLE]: (state, action) => (
    { ...state, leftWidth: '20%', rightWidth: '80%', showTitle: true, logotip: logo }
  ),
  [HIDE_SIDEBAR_TITLE]: (state, action) => (
    { ...state, leftWidth: '10%', rightWidth: '90%', showTitle: false, logotip: shLogo }
  ),
  [GET_WEIGHT]: (state, action) => ({ ...state, weight: action.weight.data.weight })
}

const initialState = {
  logotip: logo,
  leftWidth: '20%',
  rightWidth: '80%',
  showTitle: true,
  weight: 0
}

export default function LayoutReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
