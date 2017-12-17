import React from 'react'
import { logo, shLogo } from '../assets'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import { Header, SideBar, Logo } from 'components'
import './PageLayout.scss'

class PageLayout extends React.Component {

  render() {
    const { children, showSideBarTitle, hideSideBarTitle, leftWidth, rightWidth, showTitle } = this.props
    if (location.pathname === '/') {
      showSideBarTitle()
    } else {
      hideSideBarTitle()
    }
    console.log('PageLayout', this.props)
    return (
      <div className='container'>
        <div style={{ width: leftWidth }} id="left" className="column">
          <div className="top-left">
            <Logo showTitle={showTitle} />
          </div>
          <div className="bottom"  >
            <SideBar showTitle={showTitle} />
          </div>
        </div>
        <div style={{ width: rightWidth }} id="right" className="column" >
          <Header />
          <div className="bottom">
            {children}
          </div>
        </div>
      </div>
    )
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
