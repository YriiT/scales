import { connect } from 'react-redux'
import {
  showSideBarTitle,
  hideSideBarTitle,
  getWeight,
  getPrice
} from '../modules/layout'

import PageLayout from '../components/PageLayout'

const mapDispatchToProps = {
  showSideBarTitle,
  hideSideBarTitle,
  getWeight,
  getPrice
}

const mapStateToProps = (state) => {
  return ({
    leftWidth: state['global'].leftWidth,
    rightWidth: state['global'].rightWidth,
    showTitle: state['global'].showTitle,
    logotip: state['global'].logotip,
    weight: state['global'].weight,
    price: state['global'].price.price_per_kg,
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout)
