import React from 'react'
import PropTypes from 'prop-types'
import { PicturesView } from 'components'

export class ProductOnScales extends React.PureComponent {
  constructor(props) {
    super(props)
    const { getProductOnScale } = this.props
    //getProductOnScale()
  }
  componentDidMount() {
    const { location: { pathname }, getProductOnScale } = this.props
    this.props.productsOnScales.length === 0 &&
      getProductOnScale()
  }
  componentWillReceiveProps(nextProps) {
    const { getProductOnScale, router } = this.props
    nextProps.productsOnScales.length === 1
      ? router.push(
        `/product-info/${nextProps.productsOnScales[0].category_id}?product_id=${nextProps.productsOnScales[0].product_id}`
      )
      : getProductOnScale()
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
