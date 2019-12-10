import React from 'react'
import {ScrollView} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const ScrollViewSearchResults = props => {
  <ScrollView>{props.results.map(result => <Row {...result} />)}</ScrollView>
}

/* ScrollViewSearchResults.propTypes = {
  results: PropTypes.object,
} */

export default ScrollViewSearchResults