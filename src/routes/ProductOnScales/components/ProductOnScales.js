import React from 'react'
import PropTypes from 'prop-types'
import { ProductsView } from 'components'


export class ProductOnScales extends React.Component {

  render() {
    const { params } = this.props
    let onScaleslArray = []
    for (let i = 0; i < 8; i++) {
      if (i % 2 == 0) {
        onScaleslArray.push({
          key: 'Jonagored',
          value: '/img/red-apple.jpg',
          sale: '99% of the match'
        })
      } else {
        onScaleslArray.push({
          key: 'Granny Smith',
          value: '/img/green-apple.jpg',
          sale: '85% of the match'
        })
      }
    }
    const headerArray = ['The most likely options', 'Select manually']
    return (
      <ProductsView
        productType={params.id}
        imgArray={onScaleslArray}
        headerType='product_on_scales'
        headerArray={headerArray}
        linkTo='product-info'
      />
    )
  }
}
ProductOnScales.propTypes = {

}

export default ProductOnScales
