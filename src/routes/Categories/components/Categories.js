import React from 'react'
import PropTypes from 'prop-types'
import { PicturesView } from 'components'

export class Categories extends React.Component {
  render() {
    console.log(this.props)
    return (
      <PicturesView />
    )
  }
}
Categories.propTypes = {

}

export default Categories
