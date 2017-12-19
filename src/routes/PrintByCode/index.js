import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/print-by-code',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const PrintByCode = require('./containers/PrintByCodeContainer').default
      const reducer = require('./modules/printByCode').default

      /*  Add the reducer to the store on key 'printByCode'  */
      injectReducer(store, { key: 'printByCode', reducer })

      /*  Return getComponent   */
      cb(null, PrintByCode)

      /* Webpack named bundle   */
    }, 'printByCode')
  }
})
