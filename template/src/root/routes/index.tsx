import React from 'react'
import {RouteProp} from '@react-navigation/native'
import {
  createStackNavigator,
  StackNavigationProp
} from '@react-navigation/stack'

import {ScreenA} from '../screens'

export type RootStackParamsList = {
  ScreenA: undefined
}

export type RootStackNavigationProp<T extends keyof RootStackParamsList> =
  StackNavigationProp<RootStackParamsList, T>

export type RootStackProps<T extends keyof RootStackParamsList> = {
  navigation: RootStackNavigationProp<T>
  route: RouteProp<RootStackParamsList, T>
}

const Stack = createStackNavigator<RootStackParamsList>()

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="ScreenA">
      <Stack.Screen name="ScreenA" component={ScreenA} />
    </Stack.Navigator>
  )
}

export default RootStack
