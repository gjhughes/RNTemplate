import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import {RootStackProps} from '../routes'

interface Props extends RootStackProps<'ScreenA'> {}

function ScreenA(_props: Props) {
  return (
    <View style={styles.container}>
      <Text>Screen A</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ScreenA
