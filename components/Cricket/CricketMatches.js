import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CricketLiveMatches from "./Live/CricketLiveMatches";
import CricketUpcomingMatches from "./Upcoming/CricketUpcomingMatches";
import CricketCompletedMatches from "./Completed/CricketCompletedMatches";



export default function CricketMatches(){

    const Tab = createMaterialTopTabNavigator();
  
    return(
      <>
      
      
      <Tab.Navigator screenOptions={{
         tabBarLabelStyle:{ textTransform: "capitalize"}
      }}>
      <Tab.Screen name="Live" component={CricketLiveMatches}/>
      <Tab.Screen name="Upcoming" component={CricketUpcomingMatches} />
      <Tab.Screen name="Completed" component={CricketCompletedMatches} />
      </Tab.Navigator>
      </>
       
  
    )
  }