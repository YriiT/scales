import React from 'react'
import { IndexLink, Link } from 'react-router'
import './PicturesView.scss'

const categoryArray = [
  {
    key: 'Berries',
    value: 'img/berries.jpg'
  },
  {
    key: 'Exotic',
    value: 'img/exotic.jpg'
  },
  {
    key: 'Fruits',
    value: 'img/fuits.png'
  },
  {
    key: 'Nuts',
    value: 'img/nuts.jpg'
  },
  {
    key: 'Salads',
    value: 'img/salads.png'
  },
  {
    key: 'Vegetables',
    value: 'img/vegetables.jpg'
  }
]
class PicturesView extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className='content'>
        {categoryArray.map((item, idx) => (
          <Link
            to={`/products/${item.key}`}
            key={idx}
            className="category_col"
            data-cat="berries"
          >
            <div className="image">
              <img src={item.value} />
            </div>
            <div className="view_title">{item.key}</div>
          </Link>
        ))}
      </div>
    )
  }
}

export default PicturesView
