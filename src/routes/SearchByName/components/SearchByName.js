import React from 'react'
import PropTypes from 'prop-types'
import { PicturesView } from 'components'
import { firstRowArray, secondRowArray, del, enter } from '../assets'
import './SearchByName.scss'

export class SearchByName extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      letters: '',
      shiftActiv: false
    }
    this._handleButtonDelete = this._handleButtonDelete.bind(this)
    this._handleButtonEnter = this._handleButtonEnter.bind(this)
    this._handleButtonShiftClick = this._handleButtonShiftClick.bind(this)
  }
  _handleButtonDelete() {
    this.setState({ letters: '' })
  }
  _handleButtonEnter() {
    this.props.getSearchResult(this.state.letters)
  }
  _handleButtonShiftClick() {
    const { shiftActiv } = this.state
    shiftActiv ? this.setState({ shiftActiv: false }) : this.setState({ shiftActiv: true })
  }
  handleButtonClick = (num) => {
    const { shiftActiv, letters } = this.state
    shiftActiv ? this.setState({ letters: letters + num.toUpperCase() })
      : this.setState({ letters: letters + num })
  }
  render() {
    const { searchResult } = this.props
    const { shiftActiv, letters } = this.state

    return (
      <div className='search_container'>
        <div className='search_header'>
          {letters}
        </div>
        <div className='search_resalt'>
          <PicturesView imgArray={searchResult} linkTo='product-info' />
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
              <div key={idx} className='search_button_row second' onClick={() => this.handleButtonClick(item)}>
                {shiftActiv ? item.toUpperCase() : item}
              </div>
            )}
            <div id='spec'
              className={`search_button_row second ${shiftActiv && 'shift'}`}
              onClick={this._handleButtonShiftClick}>Shift</div>
            <div id='spec'
              className='search_button_row second'
              onClick={() => this.handleButtonClick(' ')}>Space</div>
          </div>
        </div>
      </div>
    )
  }
}
SearchByName.propTypes = {
  searchResult: PropTypes.array,
  getSearchResult: PropTypes.func,
}

export default SearchByName
