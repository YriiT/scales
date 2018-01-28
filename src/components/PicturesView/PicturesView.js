import React from 'react'
import { Link } from 'react-router'
import './PicturesView.scss'


class PicturesView extends React.Component {
  render() {
    const { imgArray, linkTo } = this.props
    //imgArray && imgArray.map((item, idx) => (console.log('item, idx', item, idx)))
    let imgWidth = ''
    if (imgArray) {
      imgWidth = `${200 / imgArray.length}%`
    }
    return (
      <div className='content'>
        {imgArray && imgArray.map((item, idx) => (
          <Link
            className='category_col'
            to={{
              pathname: `/${linkTo}/${item.category_id}`,
              query: { product_id: item.product_id }
            }}
            key={idx}
            style={{ width: imgWidth }}
          >
            <div className='image'>
              <img src={`data:image/png;base64,${item.image_base64}`} />
            </div>
            <div className='view_title'>{item.category_name || item.short_name}</div>
            {item.key && <div className='view_match'>{item.category_name || item.short_name}</div>}
          </Link>
        ))}
      </div>
    )
  }
}

export default PicturesView
