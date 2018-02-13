import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss'

class Header extends React.Component {
  componentDidMount() {
    const { getWeight } = this.props
    setInterval(() => getWeight(), 500)
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
            {weight || 0}</div>
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
Header.propTypes = {
  getPrice: PropTypes.func.isRequired,
  getWeight: PropTypes.func.isRequired,
  search: PropTypes.string,
  weight: PropTypes.number,
  price: PropTypes.number,
}
export default Header
