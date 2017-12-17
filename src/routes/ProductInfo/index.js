import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/product-info/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ProductInfo = require('./containers/ProductInfoContainer').default
      const reducer = require('./modules/productInfo').default

      /*  Add the reducer to the store on key 'products'  */
      injectReducer(store, { key: 'product-info', reducer })

      /*  Return getComponent   */
      cb(null, ProductInfo)

      /* Webpack named bundle   */
    }, 'product-info')
  }
})
