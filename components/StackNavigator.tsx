import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListingList from './ListingList'
import ListingDetails from './ListingDetails'

const Stack = createStackNavigator()

export default function StackNavigator() {
    return (
    <Stack.Navigator>
      <Stack.Screen name="ListingList" component={ListingList} />
      <Stack.Screen name="ListingDetails" component={ListingDetails} />
    </Stack.Navigator>
    )
}
