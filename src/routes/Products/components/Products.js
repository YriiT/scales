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
      }
    ]
    return (
      <ProductsView
        productType={params.id}
        imgArray={applArray}
      />
    )
  }
}
Products.propTypes = {

}

export default Products
