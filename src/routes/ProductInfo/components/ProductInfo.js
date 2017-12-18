import React from 'react'
import PropTypes from 'prop-types'
import { ProductsView, Icons } from 'components'
import './ProductInfo.scss'

export class ProductInfo extends React.Component {
  render() {
    const { params } = this.props
    return (
      <div className='info_container'>
        <div className='info_left'>
          <div className='left_img'>

            <img src='/img/88.png' />

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
            {/* состав */}
            <div className='description_row nutrition_header'>
              Nutriotion facts (per 100g)
            </div>
            <div className='description_row nutrition'>
              <div className='left_description_col'>
                <div className='nutrition_content left'>
                  Cals
                </div>
                <div className='nutrition_content left'>
                  Carb
                </div>
                <div className='nutrition_content left'>
                  Fats
                </div>
              </div>
              <div className='right_description_col'>
                <div className='nutrition_content right'>
                  100
                </div>
                <div className='nutrition_content right'>
                  200
                </div>
                <div className='nutrition_content right'>
                  0.005
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* правая часть */}
        <div className='info_right'>
          <div className='info_right_content'>
            <div className='info_right_title'>Get a discount 10%</div>
            <div className='info_right_subtitle'>for the wine</div>
            <div className='info_right_text'>Goes ideally with Jonagored apples</div>
            <div className='info_right_row'>
              <div className='info_col_left'>
                <div className='info_right_subtitle price'>Chardonnay</div>
                <div className='info_right_text'>
                  A green-skinned grape variety used in the production of white wine.
                The variety originated in the Burgundy wine region of eastern France,
                but is now grown wherever wine is produced, from England to New Zealand.
								</div>
                <div className='info_right_subtitle price'> € 13.50</div>
                <div className='info_right_text'>Bottle 750ml</div>
              </div>
              <div className='info_col_right'>
                <img src='/img/999.png' />'
            </div>
            </div>
          </div>
          <div className='info_right_footer'>
            <div className='info_print'>
              <Icons showTitle icon='print' label='Print the promotional price tag for the item' />
            </div>
            <div className='info_where_in_shop'>
              <Icons showTitle icon='find' label='Print the promotional price tag for the item' />
            </div>
          </div>
        </div>
      </div >


    )
  }
}
ProductInfo.propTypes = {

}

export default ProductInfo
