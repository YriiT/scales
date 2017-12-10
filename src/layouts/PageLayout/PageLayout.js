import React from 'react'
import { logo, shLogo } from './assets'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import { Header, SideBar } from 'components'
import './PageLayout.scss'



export class PageLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div className='container'>
        <div id="left" className="column">
          <div className="top-left">
            <img src={logo} alt='logo' />
          </div>
          <div className="bottom">
            <SideBar />
          </div>
        </div>
        <div id="right" className="column">
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
