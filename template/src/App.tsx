import React from 'react'
import {NavigationContainer, RouteProp} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack'

import Home from './screens/Home'

type RootStackParams = {
  Home: undefined
}

export type RootStackNavigatinProp<T extends keyof RootStackParams> =
  NativeStackNavigationProp<RootStackParams, T>

export type RootStackProps<T extends keyof RootStackParams> = {
  navigation: RootStackNavigatinProp<T>
  route: RouteProp<RootStackParams, T>
}

const Stack = createNativeStackNavigator<RootStackParams>()

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Home} name="Home" />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App
