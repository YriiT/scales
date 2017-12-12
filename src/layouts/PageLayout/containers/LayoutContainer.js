import { connect } from 'react-redux'
import { hideConfirm } from '../modules/layout'

import PageLayout from '../components/PageLayout'

const mapDispatchToProps = {
  //hideConfirm
}

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps)
  return ({
    fetching: state['global'].fetching,
    isError: state['global'].isError,
    test: 'testss'
  })
}


export default connect(mapStateToProps, mapDispatchToProps)(PageLayout)
