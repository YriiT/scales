import React from 'react'
import './Header.scss'

class Header extends React.Component {
  componentDidMount() {
    const { getConfig } = this.props
    setInterval(() => getConfig(), 3000)

  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div className='top-right'>
        <div className='col'>
          <div className='desc'>Weight [kg]</div>
          <div className='val'>
            {this.props.weight.data ? this.props.weight.data.weight : ''}</div>
        </div>
        <div className='col'>
          <div className='desc'>Price [EUR / kg]</div>
          <div className='val'>€3.00</div>
        </div>
        <div className='col'>
          <div className='desc'>Sum [EUR]</div>
          <div className='val'>€36.60</div>
        </div>
      </div>
    )
  }
}
export default Header
