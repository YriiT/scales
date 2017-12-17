import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '/subCategories/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const SubCategories = require('./containers/SubCategoriesContainer').default
      const reducer = require('./modules/subCategories').default

      /*  Add the reducer to the store on key 'subCategories'  */
      injectReducer(store, { key: 'subCategories', reducer })

      /*  Return getComponent   */
      cb(null, SubCategories)

      /* Webpack named bundle   */
    }, 'subCategories')
  }
})
