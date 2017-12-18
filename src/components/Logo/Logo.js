import React from 'react'
import './Logo.scss'
import { logo, shLogo } from './assets'


const Logo = props => {
  let logotip = props.showTitle ? logo : shLogo
  return (
    <div
      id={logotip = props.showTitle ? 'logo' : 'shLogo'}
      className="top-left">
      {props.showTitle
        ? <img src={logo} alt='logo' />
        : <img src={shLogo} alt='logo' />
      }
    </div>
  )
}
export default Logo
