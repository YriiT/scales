import React from 'react'
import PropTypes from 'prop-types'
import { ProductsView } from 'components'

export class Products extends React.Component {
  componentWillMount() {
    const { params: { id }, getProducts } = this.props
    getProducts(id)
  }
  componentWillUnmount() {
    const { clearProductArray } = this.props
    clearProductArray()
  }
  render() {
    const { products } = this.props
    return (
      <ProductsView
        imgArray={products}
        linkTo='product-info'
      />
    )
  }
}
Products.propTypes = {
  params: PropTypes.object.isRequired,
  getProducts: PropTypes.func,
  products: PropTypes.array,
  clearProductArray: PropTypes.func,
}

export default Products
