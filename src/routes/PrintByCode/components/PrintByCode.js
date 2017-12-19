import React from 'react'
import PropTypes from 'prop-types'
import { ProductsView } from 'components'
import del from '../assets/del.svg'
import enter from '../assets/enter.svg'
import './PrintByCode.scss'

export class PrintByCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = { nums: '' }
    this._handleButtonDelete = this._handleButtonDelete.bind(this)
    this._handleButtonEnter = this._handleButtonEnter.bind(this)
  }
  _handleButtonDelete() {
    this.setState({ nums: '' })
  }
  _handleButtonEnter() {
    alert(`Товар ${this.state.nums} найден!!!`)
    this.setState({ nums: '' })
  }
  handleButtonClick = (num) => {
    if (this.state.nums.length < 5) {
      this.setState({ nums: this.state.nums + num })
    } else {
      this.setState({ nums: 'Товар не найден' })
    }
  }
  render() {
    const buttonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const { params } = this.props
    return (
      <div className='print_container'>
        <div className='left_print'>
          {
            buttonArray.map((item, idx) =>
              <div key={idx} className='button_row' onClick={() => this.handleButtonClick(item)}>
                {item}
              </div>
            )
          }
          <div className='button_delete' onClick={this._handleButtonDelete}>
            <img src={del} alt='delete button' />
          </div>
        </div>
        <div className='right_print'>
          <div className='input_numbers'>
            {this.state.nums}
          </div>
          <div className='button_enter' onClick={this._handleButtonEnter}>
            <img src={enter} alt='delete button' />
          </div>
        </div>
      </div>
    )
  }
}
PrintByCode.propTypes = {

}

export default PrintByCode
