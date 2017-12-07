import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  // <div className='container text-center'>

  //   <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
  //   {' · '}
  //   <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
  //   <div className='page-layout__viewport'>
  //     {children}
  //   </div>
  // </div>

  <div className='container'>
    <div id="left" className="column">
      <div className="top-left">
        <img src='img/logo.svg' />
      </div>
      <div className="bottom">
        fdgdfg
      </div>
    </div>
    <div id="right" className="column">
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
      <div className="bottom">
        fghdfghfgh
      </div>
    </div>
  </div>

)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
