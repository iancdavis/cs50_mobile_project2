import React from 'react'
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  row: {padding: 20},
})

const Row = props => (
  <TouchableOpacity style={styles.row} onPress={alert("TODO onpress")}>
    <Text>{props.Title}</Text>
  </TouchableOpacity>
)

/* Row.propTypes = {
  name: PropTypes.string,
} */

export default Row
