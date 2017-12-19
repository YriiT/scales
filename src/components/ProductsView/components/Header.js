import React from 'react'
import { Link } from 'react-router'
import './Header.scss'
const Header = props => {
  const { headerArray, headerType } = props
  console.log('headerArray', headerArray)
  return (
    <div className={headerType}>
      {headerArray && headerArray.map((item, idx) => (
        <Link to={`/${item.link}`} key={idx} className='header_title'>
          {item.value}
        </Link>
      ))}
    </div>
  )
}
export default Header
