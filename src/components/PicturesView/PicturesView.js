import React from 'react'
import { Link } from 'react-router'
import './PicturesView.scss'


class PicturesView extends React.Component {
  render() {
    const { imgArray, linkTo } = this.props
    let imgWidth = imgArray.length === 2 ? `${100 / imgArray.length}%` : `${200 / imgArray.length}%`
    return (
      <div className='content'>
        {imgArray && imgArray.map((item, idx) => (
          <Link
            className='category_col'
            to={`/${linkTo}/${item.key}`}
            key={idx}
            style={{ width: imgWidth }}
          >
            <div className='image'>
              <img src={item.value} />
            </div>
            <div className='view_title'>{item.key}</div>
            {item.key && <div className='view_match'>{item.match}</div>}
          </Link>
        ))}
      </div>
    )
  }
}

export default PicturesView
