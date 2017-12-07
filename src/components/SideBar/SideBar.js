import React from 'react'
import './SideBar.scss'

const SideBar = () => (
  <div className='side_bar'>
    <div className='row_side'>
      <div className="title">
        Wizard is running
      </div>
    </div>
    <div className='row_side'>
      <div className="title">Product code input</div>
    </div>
    <div className='row_side'>
      <div className="title">Search by name</div>
    </div>
    <div className='row_side'>
      <div className="title">Call for assistance</div>
    </div>
    <div className='row_side'>
      <div className="title">Promo catalogue</div>
    </div>
  </div>
)
export default SideBar
