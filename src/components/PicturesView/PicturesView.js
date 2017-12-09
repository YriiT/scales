import React from 'react'
import './PicturesView.scss'

// const categoryArray = [
//   {
//     key:''
//   }
// ]

class PicturesView extends React.Component {
  render() {
    return (
      <div className='content'>
        <div className="category_col" data-cat="berries">

          <div className="image">
            <img src="img/berries.jpg" />
          </div>
          <div className="view_title">Berries</div>

        </div>
        <div className="category_col" data-cat="exotic">

          <div className="image">
            <img src="img/exotic.jpg" />
          </div>
          <div className="view_title">Exotic</div>

        </div>
        <div className="category_col" data-cat="fruits">

          <div className="image">
            <img src="img/fuits.png" />
          </div>
          <div className="view_title">Fruits</div>

        </div>
        <div className="category_col" data-cat="nuts">

          <div className="image">
            <img src="img/nuts.jpg" />
          </div>
          <div className="view_title">Nuts</div>

        </div>
        <div className="category_col" data-cat="salads">

          <div className="image">
            <img src="img/salads.png" />
          </div>
          <div className="view_title">
            Salads
            </div>

        </div>
        <div className="category_col" data-cat="vegetables">
          <div className="image">
            <img src="img/vegetables.jpg" />
          </div>
          <div className="view_title">Vegetables</div>

        </div>
      </div>
    )
  }
}

export default PicturesView
