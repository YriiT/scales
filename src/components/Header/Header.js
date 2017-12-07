import React from 'react'
import './Header.scss'
const Header = () => (
  <div className="top-right">
    <div className="col">
      <div className="desc">Weight [kg]</div>
      <div className="val">12.20</div>
    </div>
    <div className="col">
      <div className="desc">Price [EUR / kg]</div>
      <div className="val">€3.00</div>
    </div>
    <div className="col">
      <div className="desc">Sum [EUR]</div>
      <div className="val">€36.60</div>
    </div>
  </div>
)
export default Header
