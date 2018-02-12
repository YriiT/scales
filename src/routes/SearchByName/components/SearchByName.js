import React from 'react'
import PropTypes from 'prop-types'
import { PicturesView, RusKeyboard } from 'components'
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
    const { getSearchResult } = this.props
    const { letters } = this.state
    getSearchResult(letters)
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
          <PicturesView imgArray={searchResult} linkTo='product-info' isSearch />
        </div>
        <RusKeyboard
          onDeleteButtonClick={this._handleButtonDelete}
          onEnterButtonClick={this._handleButtonEnter}
          onShiftButtonClick={this._handleButtonShiftClick}
          onLetterButtonClick={this.handleButtonClick}
          shiftActiv={shiftActiv} />
      </div>
    )
  }
}
SearchByName.propTypes = {
  searchResult: PropTypes.array,
  getSearchResult: PropTypes.func,
}

export default SearchByName
