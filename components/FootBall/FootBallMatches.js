import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import FootBallLiveMatches from './Live/LiveTabs/FootBallLiveMatches';
import FootBallUpcomingMatches from './Upcoming/FootBallUpcomingMatches';
import FootballCompletedMatches from './Completed/FootBallCompletedMatches';


export function FootBallMatches(){

    const Tab = createMaterialTopTabNavigator();
  
    return(
      <Tab.Navigator>
      <Tab.Screen name="Live" component={FootBallLiveMatches} />
      <Tab.Screen name="Upcoming" component={FootBallUpcomingMatches} />
      <Tab.Screen name="Completed" component={FootballCompletedMatches} />
      </Tab.Navigator>
    )
  }