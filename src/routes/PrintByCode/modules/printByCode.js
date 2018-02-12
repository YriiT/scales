import { urls, methods } from 'utils'
// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

export const printByBaracode = product_id => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      fetch(urls.printBarcode, {
        method: 'POST',
        body: JSON.stringify({ product_id }),
        ...methods.defaultSettings
      })
        // .then(res => res.json())
        // .then(data => {
        //   console.log(data)
        // })
        .catch(err => console.log(err))
    })
  }
}

export const actions = {
  printByBaracode
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function printByCodeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
