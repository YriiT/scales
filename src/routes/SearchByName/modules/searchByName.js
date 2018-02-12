import { urls, methods } from 'utils'
// ------------------------------------
// Constants
// ------------------------------------
const SEARCH_RESULT = 'SEARCH_RESULT'
const addSearchResult = searchResult => ({
  type: SEARCH_RESULT,
  searchResult
})
// ------------------------------------
// Actions
// ------------------------------------
export const getSearchResult = query => {
  console.log(JSON.stringify({ query }))
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      fetch(urls.getSearch, {
        method: 'POST',
        body: JSON.stringify({ query }),
        ...methods.defaultSettings
      })
        .then(resp => resp.json())
        .then(data => dispatch(addSearchResult(data)))
        .catch(err => console.log(err))
    })
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */


export const actions = {
  searchResult: []
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SEARCH_RESULT]: (state, action) => ({ ...state, searchResult: action.searchResult })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function searchByNameReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
