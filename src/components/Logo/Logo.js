import React from 'react'
import './Logo.scss'
// import { logo, shLogo } from './assets'


const Logo = props => {

  return (
    <div
      id={props.showTitle ? 'logo' : 'shLogo'}
      className='top-left'>
      <img src={props.logotip} alt='logo' />
    </div>
  )
}
export default Logo
