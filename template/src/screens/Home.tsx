import React from 'react'
import {View} from 'react-native'

import {RootStackProps} from '../App'

interface Props extends RootStackProps<'Home'> {}

function Home() {
  return <View />
}

export default Home
