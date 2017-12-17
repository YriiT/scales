
const SHOW_SIDEBAR_TITLE = 'SHOW_SIDEBAR_TITLE'
const HIDE_SIDEBAR_TITLE = 'HIDE_SIDEBAR_TITLE'


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

const ACTION_HANDLERS = {
  [SHOW_SIDEBAR_TITLE]: (state, action) => (
    { ...state, leftWidth: '20%', rightWidth: '80%', showTitle: true }
  ),
  [HIDE_SIDEBAR_TITLE]: (state, action) => (
    { ...state, leftWidth: '10%', rightWidth: '90%', showTitle: false }
  )
}

const initialState = {
  // leftWidth: '20%',
  // rightWidth: '80%',
  showTitle: true

}

export default function LayoutReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
