import React from 'react'
import PropTypes from 'prop-types'
import { ProductsView } from 'components'


export class Products extends React.Component {

  render() {
    const { params } = this.props
    const applArray = [
      {
        key: 'Jonagored',
        value: '/img/jonagored.jpg'
      },
      {
        key: 'Golden',
        value: '/img/golden.jpg'
      },
      {
        key: 'modi',
        value: '/img/modi.jpg'
      },
      {
        key: 'Granny Smith',
        value: '/img/granny-smith.jpg'
      },
      {
        key: 'Golden delicious',
        value: '/img/golden-delicious.jpg'
      },
      {
        key: 'Idared',
        value: '/img/idared.jpg'
      },
      {
        key: 'Gala',
        value: '/img/gala.jpg'
      },
      {
        key: 'Gloucester',
        value: '/img/gloucester.jpg'
      }
    ]
    const headerArray = [
      { key: 1, value: 'Fruits', link: 'sub-categories/Fruits' },
      { key: 2, value: params.id, link: '' },
    ]
    console.log(123, this.props)
    return (
      <ProductsView
        productType={params.id}
        imgArray={applArray}
        headerType='products_header'
        headerArray={headerArray}
        linkTo='product-info'
      />
    )
  }
}
Products.propTypes = {

}

export default Products
