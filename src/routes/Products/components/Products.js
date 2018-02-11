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
    const { params, products } = this.props

    // const headerArray = [
    //   { key: 1, value: 'Fruits', link: 'sub-categories/Fruits' },
    //   { key: 2, value: params.id, link: '' },
    // ]
    return (
      <ProductsView
        productType={params.id}
        imgArray={products}
        headerType='products_header'
        // headerArray={headerArray}
        linkTo='product-info'
      />
    )
  }
}
Products.propTypes = {
  params: PropTypes.object.isRequired,
  products: PropTypes.array,
  clearProductArray: PropTypes.func,
}

export default Products
