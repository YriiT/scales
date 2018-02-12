import React from 'react'
import PropTypes from 'prop-types'
import { PicturesView } from 'components'
import { firstRowArray, secondRowArray, del, enter } from '../assets'
import './Keyboard.scss'

export const Keyboard = (props) => {
  const { onDeleteButtonClick, onEnterButtonClick, onShiftButtonClick, onLetterButtonClick, shiftActiv } = props
  return (
    <div className='search_footer'>
      <div className='footer_first_row'>
        <div className='letters'>
          {firstRowArray.map((item, idx) =>
            <div key={idx} className='search_button_row' onClick={() => onLetterButtonClick(item)}>
              {shiftActiv ? item.toUpperCase() : item}
            </div>
          )}
          <div className='search_button_del' onClick={onDeleteButtonClick}>
            <img src={del} alt='delete button' />
          </div>
        </div>
        <div className='search_button_enter' onClick={onEnterButtonClick}>
          <img src={enter} alt='enter button' />
        </div>
      </div>
      <div className='footer_second_row'>
        {secondRowArray.map((item, idx) =>
          <div key={idx} className='search_button_row second' onClick={() => onLetterButtonClick(item)}>
            {shiftActiv ? item.toUpperCase() : item}
          </div>
        )}
        <div id='spec'
          className={`search_button_row second ${shiftActiv && 'shift'}`}
          onClick={onShiftButtonClick}>Shift</div>
        <div id='spec'
          className='search_button_row second'
          onClick={() => onLetterButtonClick(' ')}>Space</div>
      </div>
    </div>
  )
}

Keyboard.propTypes = {
  onDeleteButtonClick: PropTypes.func,
  onEnterButtonClick: PropTypes.func,
  onShiftButtonClick: PropTypes.func,
  onLetterButtonClick: PropTypes.func,
  shiftActiv: PropTypes.bool,
}

export default Keyboard
