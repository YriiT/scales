import { injectReducer } from '../../store/reducers'
import Layout from './containers/LayoutContainer'
import reducer from './modules/layout'

export default (store) => {
  injectReducer(store, { key: 'global', reducer })
  return Layout
}
