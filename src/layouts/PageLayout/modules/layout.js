


export const actions = {

}

const ACTION_HANDLERS = {

}

const initialState = {
  fetching: false,
  isError: false
}

export default function LayoutReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
