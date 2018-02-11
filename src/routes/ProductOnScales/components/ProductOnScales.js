import React from 'react'
import PropTypes from 'prop-types'
import { PicturesView } from 'components'

export class ProductOnScales extends React.PureComponent {
  constructor(props) {
    super(props)
    const { getProductOnScale } = this.props
    getProductOnScale()
  }
  componentWillReceiveProps(nextProps) {
    const { location: { key }, getProductOnScale } = this.props
    key !== nextProps.location.key && getProductOnScale()
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
