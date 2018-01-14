import React from 'react'
import { Link } from 'react-router'
import './Header.scss'
const Header = props => {
  const { headerArray, headerType, productType } = props
  return (
    <div className={headerType}>
      {headerArray && headerArray.map((item, idx) => (
        <Link to={`/${item.link}`} key={idx}
          className={item.value == productType ? 'header_title green' : 'header_title'}>
          {item.value}
        </Link>
      ))}
    </div>
  )
}
export default Header
