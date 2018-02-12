import React from 'react'
import './Header.scss'

class Header extends React.PureComponent {
  componentDidMount() {
    const { getWeight } = this.props
    setInterval(() => getWeight(), 300)
  }
  componentWillReceiveProps(nextProps) {
    const { getPrice, search, weight } = this.props
    if (weight !== nextProps.weight) {
      getPrice(search)
    }
  }
  render() {
    const { weight, price } = this.props
    return (
      <div className='top-right'>
        <div className='col'>
          <div className='desc'>Weight [kg]</div>
          <div className='val'>
            {weight || ''}</div>
        </div>
        <div className='col'>
          <div className='desc'>Price [EUR / kg]</div>
          <div className='val'>{price}</div>
        </div>
        <div className='col'>
          <div className='desc'>Sum [EUR]</div>
          <div className='val'>{weight && (price * weight).toFixed(2)}</div>
        </div>
      </div>
    )
  }
}
export default Header
