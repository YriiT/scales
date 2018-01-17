import React from 'react'
import {
  back,
  Call,
  find,
  home,
  next,
  prev,
  print,
  Product,
  Promo,
  Search,
  Wizard
} from './assets'
import './Icons.scss'

const svgIcon = icon => {
  switch (icon) {
    case 'Wizard': return (Wizard)

    case 'Product': return (Product)

    case 'Search': return (Search)

    case 'Call': return (Call)

    case 'Promo': return (Promo)

    case 'prev': return (prev)

    case 'next': return (next)

    case 'home': return (home)

    case 'back': return (back)

    case 'print': return (print)

    case 'find': return (find)

  }
}
const Icons = props => {
  const { icon, label, showTitle } = props
  return (
    <div className='row'>
      <div id='left_icon' className='icon_col'>
        <div className='icon'>
          <img src={svgIcon(icon)} />
        </div>
      </div>
      {label && showTitle &&
        <div id='right_icon' className='icon_col'>
          <div className='title'>
            {label}
          </div>
        </div>}
    </div>
  )
}

export default Icons
