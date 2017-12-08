import React from 'react'
import Icons from './components'
import './SideBar.scss'

const SideBar = () => (
  <div className='side_bar'>
    <Icons icon='Wizard' label='Wizard is running' />
    <Icons icon='Product' label='Product code input' />
    <Icons icon='Search' label='Search by name' />
    <Icons icon='Call' label='Call for assistance' />
    <Icons icon='Promo' label='Promo catalogue' />
  </div>
)
export default SideBar
