import React from 'react'
import PropTypes from 'prop-types'
import { PicturesView } from 'components'

export class Categories extends React.Component {
  render() {
    const categoryArray = [
      {
        key: 'Berries',
        value: '/img/berries.jpg'
      },
      {
        key: 'Exotic',
        value: '/img/exotic.jpg'
      },
      {
        key: 'Fruits',
        value: '/img/fruits.png'
      },
      {
        key: 'Nuts',
        value: '/img/nuts.jpg'
      },
      {
        key: 'Salads',
        value: '/img/salads.png'
      },
      {
        key: 'Vegetables',
        value: '/img/vegetables.jpg'
      }
    ]
    console.log('cat', this.props)
    return (
      <PicturesView imgArray={categoryArray} />
    )
  }
}
Categories.propTypes = {

}

export default Categories
