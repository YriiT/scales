import React from 'react'
import { IndexLink, Link } from 'react-router'

import './PicturesView.scss'


class PicturesView extends React.Component {
  render() {
    const { imgArray } = this.props
    console.log(this.props)
    return (
      <div className='content'>
        {imgArray && imgArray.map((item, idx) => (
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
