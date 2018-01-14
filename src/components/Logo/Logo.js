import React from 'react'
import './Logo.scss'
import { logo, shLogo } from './assets'

const Logo = props => {
  let logotip = props.showTitle ? logo : shLogo
  return (
    <div
      id={props.showTitle ? 'logo' : 'shLogo'}
      className='top-left'>
      <img src={logotip} alt='logo' />
    </div>
  )
}
export default Logo
