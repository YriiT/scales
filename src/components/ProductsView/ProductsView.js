import React from 'react'
import { PicturesView } from 'components'
import Icons from '../Icons'
import Header from './components'
import './ProductsView.scss'

class ProductsView extends React.Component {
  render() {
    const { imgArray, linkTo } = this.props
    return (
      <div className='products_content'>
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
