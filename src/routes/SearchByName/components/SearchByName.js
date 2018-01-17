import React from 'react'
import PropTypes from 'prop-types'
import { PicturesView } from 'components'
import del from '../assets/del.svg'
import enter from '../assets/enter.svg'
import './SearchByName.scss'

export class SearchByName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      letters: '',
      shiftActiv: false,
      resultArray: [
      ]

    }
    this._handleButtonDelete = this._handleButtonDelete.bind(this)
    this._handleButtonEnter = this._handleButtonEnter.bind(this)
    this._handleButtonShiftClick = this._handleButtonShiftClick.bind(this)
  }
  _handleButtonDelete() {
    this.setState({ letters: '' })
  }
  _handleButtonEnter() {
    const categoryArray = [
      {
        key: 'Berries',
        value: '/img/berries.jpg'
      },
      {
        key: 'Fruits',
        value: '/img/fruits.png'
      },
      {
        key: 'Exotic',
        value: '/img/exotic.jpg'
      },
      {
        key: 'Nuts',
        value: '/img/nuts.jpg'
      }
    ]
    const filterByKey = (obj) => {
      return 'key' in obj && obj.key === this.state.letters
    }
    this.setState({ resultArray: categoryArray.filter(filterByKey) })
    this.setState({ letters: '' })
  }
  _handleButtonShiftClick() {
    this.state.shiftActiv ? this.setState({ shiftActiv: false }) : this.setState({ shiftActiv: true })
  }
  handleButtonClick = (num) => {
    if (this.state.shiftActiv) {
      this.setState({ letters: this.state.letters + num.toUpperCase() })
    } else {
      this.setState({ letters: this.state.letters + num })
    }
  }
  render() {
    const firstRowArray = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
    const secondRowArray = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    const { params } = this.props
    const { shiftActiv, letters } = this.state

    return (
      <div className='search_container'>
        <div className='search_header'>
          {letters}
        </div>
        <div className='search_resalt'>
          <PicturesView imgArray={this.state.resultArray}
            linkTo='' />
        </div>
        <div className='search_footer'>
          <div className='footer_first_row'>
            <div className='letters'>
              {firstRowArray.map((item, idx) =>
                <div key={idx} className='search_button_row' onClick={() => this.handleButtonClick(item)}>
                  {shiftActiv ? item.toUpperCase() : item}
                </div>
              )}
              <div className='search_button_del' onClick={this._handleButtonDelete}>
                <img src={del} alt='delete button' />
              </div>
            </div>
            <div className='search_button_enter' onClick={this._handleButtonEnter}>
              <img src={enter} alt='enter button' />
            </div>
          </div>
          <div className='footer_second_row'>
            {secondRowArray.map((item, idx) =>
              <div key={idx} className='search_button_row second' onClick={() => this.handleButtonClick(item)}
              >
                {shiftActiv ? item.toUpperCase() : item}
              </div>
            )}
            <div id='spec' className={`search_button_row second ${shiftActiv && 'shift'}`} onClick={this._handleButtonShiftClick}>Shift</div>
            <div id='spec' className='search_button_row second' onClick={() => this.handleButtonClick(' ')}>Space</div>
          </div>
        </div>
      </div>
    )
  }
}
SearchByName.propTypes = {

}

export default SearchByName

// buttonArray.map((item, idx) =>
//   <div key={idx} className='button_row' onClick={() => this.handleButtonClick(item)}>
//     {item}
//   </div>
