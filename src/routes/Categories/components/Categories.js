import React from 'react'
import PropTypes from 'prop-types'
import { PicturesView } from 'components'

export class Categories extends React.Component {
  componentDidMount() {
    const { getCategoryNames } = this.props
    getCategoryNames()
  }

  render() {
    const { categoryNames } = this.props
    return (
      <PicturesView imgArray={categoryNames}
        linkTo='products' />
    )
  }
}
Categories.propTypes = {
  categoryNames: PropTypes.array,
  getCategoryNames: PropTypes.func,
}

export default Categories
