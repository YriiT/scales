import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import { Header, SideBar } from 'components'
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
        <SideBar />
      </div>
    </div>
    <div id="right" className="column">
      <Header />
      <div className="bottom">
        MAIN CONTENT
      </div>
    </div>
  </div>

)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
