import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ContestDetailsScreen from './ContestDetailsScreen'
import ContestLeaderScreen from './ContestLeaderScreen'

const DetailScreen = () => {

    const Top = createMaterialTopTabNavigator()
  return (
    <Top.Navigator
    screenOptions={{
        tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "400",
            color: "#000",
          },
    }}
    >
    <Top.Screen
    name='Details'
    component={ContestDetailsScreen}
    />
    <Top.Screen
    name='Leaderboard'
    component={ContestLeaderScreen}
    />
    </Top.Navigator>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})