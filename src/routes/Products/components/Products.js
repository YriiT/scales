import React from 'react'
import PropTypes from 'prop-types'
import { PicturesView } from 'components'
export class Products extends React.Component {
  render() {
    const { params } = this.props
    console.log('11', this.props)
    return (
      <h1>
        <PicturesView />
      </h1>
    )
  }
}
Products.propTypes = {

}

export default Products
