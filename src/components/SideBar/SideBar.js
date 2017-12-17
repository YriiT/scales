import React from 'react'
import Icons from '../Icons'
import './SideBar.scss'

const SideBar = (props) => (
  <div className='side_bar'>
    {!props.showTitle && <Icons showTitle={props.showTitle} icon='back' />}
    {!props.showTitle && <Icons showTitle={props.showTitle} icon='home' />}
    <Icons showTitle={props.showTitle} icon='Wizard' label='Wizard is running' />
    <Icons showTitle={props.showTitle} icon='Product' label='Product code input' />
    <Icons showTitle={props.showTitle} icon='Search' label='Search by name' />
    <Icons showTitle={props.showTitle} icon='Call' label='Call for assistance' />
    <Icons showTitle={props.showTitle} icon='Promo' label='Promo catalogue' />
  </div>
)
export default SideBar
