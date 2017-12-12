import React from 'react'
import { logo, shLogo } from '../assets'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import { Header, SideBar } from 'components'
import './PageLayout.scss'



class PageLayout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leftWidth: '20%',
      rightWidth: '80%'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      leftWidth: '10%',
      rightWidth: '90%'
    })
  }
  render() {
    const { children } = this.props
    console.log('ll', this.props)
    return (
      <div className='container'>
        <div style={{ width: this.state.leftWidth }} id="left" className="column">
          <div className="top-left">
            <img src={logo} alt='logo' />
          </div>
          <div className="bottom">
            <SideBar handleClick={this.handleClick} />
          </div>
        </div>
        <div style={{ width: this.state.rightWidth }} id="right" className="column">
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
