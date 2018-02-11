import React from 'react'
import { IndexLink, Link } from 'react-router'
import { Header, SideBar, Logo } from 'components'
import './PageLayout.scss'
import PropTypes from 'prop-types'

class PageLayout extends React.Component {
  componentWillMount() {
    const { location, showSideBarTitle, hideSideBarTitle } = this.props
    location.pathname === '/' ? showSideBarTitle() : hideSideBarTitle()
  }
  componentWillReceiveProps(nextProps) {
    const { showSideBarTitle, hideSideBarTitle } = this.props
    nextProps.location.pathname === '/' ? showSideBarTitle() : hideSideBarTitle()
  }

  render() {
    const { children, router, leftWidth, rightWidth, showTitle, getWeight, getPrice,
      weight, price, logotip, location: { search } } = this.props
    return (
      <div className='container'>
        <div style={{ width: leftWidth }} id='left' className='column'>
          <div className='top-left'>
            <Logo showTitle={showTitle} logotip={logotip} />
          </div>
          <div className='bottom'>
            <SideBar showTitle={showTitle} goBack={router.goBack} />
          </div>
        </div>
        <div style={{ width: rightWidth }} id='right' className='column' >
          <Header
            getWeight={getWeight}
            weight={weight}
            getPrice={getPrice}
            search={search}
            price={price}
          />
          <div className='bottom'>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
  router: PropTypes.object,
  showSideBarTitle: PropTypes.func,
  hideSideBarTitle: PropTypes.func,
  getWeight: PropTypes.func,
  getPrice: PropTypes.func,
  leftWidth: PropTypes.string,
  rightWidth: PropTypes.string,
  showTitle: PropTypes.bool,
  weight: PropTypes.number,
  logotip: PropTypes.string,
  location: PropTypes.object,
  price: PropTypes.number,
}

export default PageLayout
