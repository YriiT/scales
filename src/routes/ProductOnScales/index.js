import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/produc-on-scales',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ProductOnScales = require('./containers/ProductOnScalesContainer').default
      const reducer = require('./modules/productOnScales').default

      /*  Add the reducer to the store on key 'productOnScales'  */
      injectReducer(store, { key: 'productOnScales', reducer })

      /*  Return getComponent   */
      cb(null, ProductOnScales)

      /* Webpack named bundle   */
    }, 'productOnScales')
  }
})
