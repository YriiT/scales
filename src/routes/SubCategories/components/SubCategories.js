import React from 'react'
import PropTypes from 'prop-types'
import { ProductsView } from 'components'


export class SubCategories extends React.Component {

  render() {
    const { params } = this.props
    const subCategorylArray = [
      {
        key: 'Banana',
        value: '/img/bananas.jpg'
      },
      {
        key: 'Apple',
        value: '/img/apple.jpg'
      },
      {
        key: 'Orange',
        value: '/img/orange.jpg'
      },
      {
        key: 'Pineapple',
        value: '/img/pineapple.jpg'
      },
      {
        key: 'Lemon',
        value: '/img/lemon.jpg'
      },
      {
        key: 'Melon',
        value: '/img/melon.jpg'
      },
      {
        key: 'Watermelon',
        value: '/img/watermelon.jpg'
      },
      {
        key: 'Pear',
        value: '/img/pear.jpg'
      }
    ]
    const headerArray = [
      { key: 1, value: 'Berries', link: 'sub-categories/Berries' },
      { key: 2, value: 'Exotic', link: 'sub-categories/Exotic' },
      { key: 3, value: 'Fruts', link: 'sub-categories/Fruts' },
      { key: 4, value: 'Nuts', link: 'sub-categories/Nuts' },
      { key: 5, value: 'Salads', link: 'sub-categories/Salads' },
      { key: 6, value: 'Vegetables', link: 'sub-categories/Vegetables' }
    ]
    console.log(params)
    return (
      <ProductsView
        productType={params.id}
        imgArray={subCategorylArray}
        headerArray={headerArray}
        headerType='subcategory_header'
        linkTo='products'
      />
    )
  }
}
SubCategories.propTypes = {

}

export default SubCategories
