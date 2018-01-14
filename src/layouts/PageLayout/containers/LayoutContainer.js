import { connect } from 'react-redux'
import {
  showSideBarTitle,
  hideSideBarTitle,
  getConfig
} from '../modules/layout'

import PageLayout from '../components/PageLayout'

const mapDispatchToProps = {
  showSideBarTitle,
  hideSideBarTitle,
  getConfig
}

const mapStateToProps = (state) => {
  return ({
    leftWidth: state['global'].leftWidth,
    rightWidth: state['global'].rightWidth,
    showTitle: state['global'].showTitle,
    weight: state['global'].weight,
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout)
