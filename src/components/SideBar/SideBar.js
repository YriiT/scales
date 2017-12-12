import React from 'react'
import Icons from './components'
import './SideBar.scss'

const SideBar = (props) => (
  <div className='side_bar'>
    <Icons handleClick={props.handleClick} icon='Wizard' label='Wizard is running' />
    <Icons handleClick={props.handleClick} icon='Product' label='Product code input' />
    <Icons handleClick={props.handleClick} icon='Search' label='Search by name' />
    <Icons handleClick={props.handleClick} icon='Call' label='Call for assistance' />
    <Icons handleClick={props.handleClick} icon='Promo' label='Promo catalogue' />
  </div>
)
export default SideBar
