import React from 'react'
import { PicturesView } from 'components'
import './ProductsView.scss'

class ProductsView extends React.Component {
  render() {
    const productsHeder = ['Berries', 'Exotic', 'Fruts', 'Nuts', 'Salads', 'Vegetables']
    const { imgArray, productType } = this.props
    console.log(this.props)
    return (
      <div className='products_content'>
        <div className='products_header'>
          {productsHeder.map((item, idx) => (
            <div key={idx}>
              {item}
            </div>
          ))}
        </div>
        <PicturesView imgArray={imgArray} />
        <div className='products_futer'>
          <div className='prev'>
            Prev
          </div>
          <div className='next'>
            Next
          </div>
        </div>
      </div>

    )
  }
}
export default ProductsView
