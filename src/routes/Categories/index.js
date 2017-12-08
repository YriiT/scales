import { injectReducer } from '../../store/reducers'

export default (store) => ({
  // path: '/' -- home page,
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Categories = require('./containers/CategoriesContainer').default
      const reducer = require('./modules/categories').default

      /*  Add the reducer to the store on key 'categories'  */
      injectReducer(store, { key: 'categories', reducer })

      /*  Return getComponent   */
      cb(null, Categories)

      /* Webpack named bundle   */
    }, 'categories')
  }
})
