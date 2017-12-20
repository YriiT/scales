// We only need to import the modules necessary for initial render
import Layout from '../layouts/PageLayout'
import Categories from './Categories'
import SubCategories from './SubCategories'
import Products from './Products'
import ProdutInfo from './ProductInfo'
import ProductOnScales from './ProductOnScales'
import PrintByCode from './PrintByCode'
import SearchByName from './SearchByName'
/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: Layout(store),
  indexRoute: Categories(store),
  childRoutes: [
    Products(store),
    ProdutInfo(store),
    SubCategories(store),
    ProductOnScales(store),
    PrintByCode(store),
    SearchByName(store)
  ]
})


/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
