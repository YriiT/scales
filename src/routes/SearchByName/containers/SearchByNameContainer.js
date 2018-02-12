import { connect } from 'react-redux'
import { getSearchResult } from '../modules/searchByName'
import SearchByName from '../components/SearchByName'

const mapDispatchToProps = {
  getSearchResult
}

const mapStateToProps = (state) => ({
  searchResult: state['searchByName'].searchResult
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchByName)
