import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/search-by-name',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SearchByName = require('./containers/SearchByNameContainer').default
      const reducer = require('./modules/searchByName').default

      /*  Add the reducer to the store on key 'searchByName'  */
      injectReducer(store, { key: 'searchByName', reducer })

      /*  Return getComponent   */
      cb(null, SearchByName)

      /* Webpack named bundle   */
    }, 'searchByName')
  }
})
