import React from 'react'
import PropTypes from 'prop-types'
import { ProductsView } from 'components'
import './ProductInfo.scss'

export class ProductInfo extends React.Component {
  render() {
    const { params } = this.props
    return (
      <div className='info_container'>
        <div className='info_left'>
          <div className='left_img'>
            <div className='img_wrap'>
              <img src='/img/8.png' />
            </div>
          </div>
          <div className='description'>
            <div className='description_row'>
              <div className='left_description_col'>
                <div className='description_header'>
                  Product name
                </div>
                <div className='description_content'>
                  Jonagored
                </div>
                <div className='description_header'>
                  Country of origin
                </div>
                <div className='description_content'>
                  Turkey
                </div>
              </div>
              <div className='right_description_col'>
                <div className='description_header'>
                  Price
                </div>
                <div className='description_content'>
                  € 0,57
                </div>
              </div>
            </div>
            {/* состава */}
            <div className='description_row nutrition_header'>
              Nutriotion facts (per 100g)
            </div>
            <div className='description_row'>
              <div className='left_description_col'>
                <div className='nutrition_content'>
                  Cals
                </div>
                <div className='nutrition_content'>
                  Carb
                </div>
                <div className='nutrition_content'>
                  Fats
                </div>
              </div>
              <div className='right_description_col'>
                <div className='nutrition_content'>
                  Cals
                </div>
                <div className='nutrition_content'>
                  Carb
                </div>
                <div className='nutrition_content'>
                  Fats
                </div>
              </div>
            </div>
          </div>
          <div className>
          </div>
        </div>

        <div className='info_right'>
          правый бок
        </div>
      </div >


    )
  }
}
ProductInfo.propTypes = {

}

export default ProductInfo
