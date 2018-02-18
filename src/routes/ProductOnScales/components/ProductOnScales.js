import React from 'react'
import PropTypes from 'prop-types'
import { PicturesView } from 'components'

export class ProductOnScales extends React.Component {
  componentDidMount() {
    const { location: { key }, getProductOnScale, productsOnScales } = this.props
    console.log(key, productsOnScales)
    productsOnScales.length === 0 &&
      getProductOnScale()
  }
  componentWillReceiveProps(nextProps) {
    const { getProductOnScale, router, location: { key } } = this.props

    key !== nextProps.location.key && getProductOnScale()
    nextProps.productsOnScales.length === 1 && router.push(
      `/product-info/${nextProps.productsOnScales[0].category_id}?product_id=${nextProps.productsOnScales[0].product_id}`
    )
    nextProps.productsOnScales.length === 0 && getProductOnScale()
  }
  componentWillUnmount() {
    const { clearProductsOnScale } = this.props
    clearProductsOnScale()
  }
  render() {
    const { productsOnScales } = this.props
    return (
      <PicturesView imgArray={productsOnScales} linkTo='product-info' />
    )
  }
}
ProductOnScales.propTypes = {
  getProductOnScale: PropTypes.func,
  productsOnScales: PropTypes.array,
  location: PropTypes.object,
  clearProductsOnScale: PropTypes.func,
  router: PropTypes.object,
}

export default ProductOnScales
