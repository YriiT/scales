import React from 'react'
import './Header.scss'
const Header = props => {
  const className = props.header.length == 6 ? 'subcategory_header' : 'products_header'
  return (
    <div className={className}>
      {props.header.map((item, idx) => (
        <div key={idx} className='header_title'>
          {item}
        </div>
      ))}
    </div>
  )
}
export default Header
