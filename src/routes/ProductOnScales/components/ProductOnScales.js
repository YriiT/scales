import React from 'react'
import PropTypes from 'prop-types'
import { PicturesView } from 'components'

export class ProductOnScales extends React.PureComponent {
  constructor(props) {
    super(props)
    const { getProductOnScale } = this.props
    getProductOnScale()
  }
  componentDidMount() {
    const { location: { pathname }, getProductOnScale } = this.props
    pathname === '/produc-on-scales' && setInterval(() => getProductOnScale(), 1000)
  }
  // componentWillReceiveProps(nextProps) {
  //   const { location: { key }, getProductOnScale } = this.props
  //   key !== nextProps.location.key && getProductOnScale()
  // }

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
}

export default ProductOnScales
