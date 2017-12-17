import React from 'react'
import { PicturesView } from 'components'
import Icons from '../Icons'
import Header from './components'
import './ProductsView.scss'

class ProductsView extends React.Component {
  render() {
    const { imgArray, productType, headerType, linkTo } = this.props

    const subCategoryHederArray = ['Berries', 'Exotic', 'Fruts', 'Nuts', 'Salads', 'Vegetables']
    const productsHeaderArray = ['Fruits', 'Apples']
    const headerArray = headerType == 'products' ? productsHeaderArray : subCategoryHederArray
    return (
      <div className='products_content'>
        <Header header={headerArray} />
        <PicturesView imgArray={imgArray} linkTo={linkTo} />
        <div className='products_futer'>
          <div className='prev'>
            <Icons icon='prev' />
            <div className='nav_title'>
              Previous product
            </div>
          </div>
          <div className='next'>
            <div className='nav_title'>
              Next product
            </div>
            <Icons icon='next' />
          </div>
        </div>
      </div>

    )
  }
}
export default ProductsView
