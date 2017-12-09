import React from 'react'
import PropTypes from 'prop-types'

export class Products extends React.Component {
  render() {
    console.log('11', this.props)
    return (
      <h1>
        Products
  </h1>
    )
  }
}
Products.propTypes = {

}

export default Products
