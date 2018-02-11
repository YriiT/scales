import React from 'react'
import PropTypes from 'prop-types'
import { PicturesView } from 'components'

export class ProductOnScales extends React.Component {
  componentDidMount() {
    const { getProductOnScale } = this.props
    getProductOnScale()
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
}

export default ProductOnScales
