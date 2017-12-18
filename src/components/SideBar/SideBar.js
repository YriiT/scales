import React from 'react'
import { IndexLink, Link } from 'react-router'
import Icons from '../Icons'
import './SideBar.scss'

const SideBar = (props) => (
  <div className='side_bar'>
    {!props.showTitle &&
      <div className='sidebar_link' onClick={() => props.goBack()} >
        <Icons showTitle={props.showTitle} icon='back' />
      </div>}
    {!props.showTitle &&
      <IndexLink className='sidebar_link' to='/' >
        <Icons showTitle={props.showTitle} icon='home' />
      </IndexLink>}
    <Link className='sidebar_link' to='/produc-on-scales' >
      <Icons showTitle={props.showTitle} icon='Wizard' label='Wizard is running' />
    </Link>
    <Link className='sidebar_link' to='' >
      <Icons showTitle={props.showTitle} icon='Product' label='Product code input' />
    </Link>
    <Link className='sidebar_link' to='' >
      <Icons showTitle={props.showTitle} icon='Search' label='Search by name' />
    </Link>
    <Link className='sidebar_link' to='' >
      <Icons showTitle={props.showTitle} icon='Call' label='Call for assistance' />
    </Link>
    <Link className='sidebar_link' to='' >
      <Icons showTitle={props.showTitle} icon='Promo' label='Promo catalogue' />
    </Link>
  </div>
)
export default SideBar
