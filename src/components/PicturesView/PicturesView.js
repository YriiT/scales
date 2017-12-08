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
        <div className="col" data-cat="berries">
          <a href="category.html">
            <div className="image">
              <img src="./img/berries.jpg" />
            </div>
            <div className="view_title">Berries</div>
          </a>
        </div>
        <div className="col" data-cat="exotic">
          <a href="category.html">
            <div className="image">
              <img src="./img/exotic.jpg" />
            </div>
            <div className="view_title">Exotic</div>
          </a>
        </div>
        <div className="col" data-cat="fruits">
          <a href="category.html">
            <div className="image">
              <img src="./img/fuits.png" />
            </div>
            <div className="view_title">Fruits</div>
          </a>
        </div>
        <div className="col" data-cat="nuts">
          <a href="category.html">
            <div className="image">
              <img src="./img/nuts.jpg" />
            </div>
            <div className="view_title">Nuts</div>
          </a>
        </div>
        <div className="col" data-cat="salads">
          <a href="category.html">
            <div className="image">
              <img src="./img/salads.png" />
            </div>
            <div className="view_title">
              Salads
            </div>
          </a>
        </div>
        <div className="col" data-cat="vegetables">
          <a href="category.html">
            <div className="image">
              <img src="./img/vegetables.jpg" />
            </div>
            <div className="view_title">Vegetables</div>
          </a>
        </div>
      </div>
    )
  }
}

export default PicturesView
