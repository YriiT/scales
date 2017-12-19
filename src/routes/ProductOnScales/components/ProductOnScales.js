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
          match: '99% of the match'
        })
      } else {
        onScaleslArray.push({
          key: 'Granny Smith',
          value: '/img/green-apple.jpg',
          match: '85% of the match'
        })
      }
    }
    const headerArray = [
      { key: 1, value: 'The most likely options', link: '' },
      { key: 2, value: 'Select manually', link: 'sub-categories/all' },
    ]
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
