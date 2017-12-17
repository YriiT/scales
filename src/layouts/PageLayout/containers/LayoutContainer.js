import { connect } from 'react-redux'
import {
  showSideBarTitle,
  hideSideBarTitle
} from '../modules/layout'

import PageLayout from '../components/PageLayout'

const mapDispatchToProps = {
  showSideBarTitle,
  hideSideBarTitle
}

const mapStateToProps = (state) => {
  return ({
    leftWidth: state['global'].leftWidth,
    rightWidth: state['global'].rightWidth,
    showTitle: state['global'].showTitle
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(PageLayout)
