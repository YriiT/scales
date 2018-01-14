//import { urls } from '/utils/urls'
const defaultSettings = {
  mode: 'cors',
  //credentials: 'include',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
}
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
const receiveWeight = (weight) => ({
  type: GET_WEIGHT,
  weight
})

export const getConfig = () => {
  return (dispatch) => {
    return new Promise(resolve => {
      fetch('http://namezis.com/api/current_weight', {
        method: 'GET',
        ...defaultSettings
      })
        .then(res => res.json())
        .then(data => {
          dispatch(receiveWeight(data))
        })
        .catch(error => console.log(error))
    })
  }
}

const ACTION_HANDLERS = {
  [SHOW_SIDEBAR_TITLE]: (state, action) => (
    { ...state, leftWidth: '20%', rightWidth: '80%', showTitle: true }
  ),
  [HIDE_SIDEBAR_TITLE]: (state, action) => (
    { ...state, leftWidth: '10%', rightWidth: '90%', showTitle: false }
  ),
  [GET_WEIGHT]: (state, action) => ({ ...state, weight: action.weight })
}

const initialState = {
  showTitle: true,
  weight: 0
}

export default function LayoutReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
