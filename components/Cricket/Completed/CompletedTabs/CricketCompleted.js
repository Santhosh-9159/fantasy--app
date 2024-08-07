import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons,FontAwesome5,MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NavigationContainer, useNavigation } from '@react-navigation/native';


import MyContests from './MyContests';
import MyTeam from '../../Live/LiveTabs/MyTeam';
import Scoreboard from '../../Live/LiveTabs/Scoreboard';
import Stats from '../../Live/LiveTabs/Stats';
import Winning from '../../Live/LiveTabs/Winning';
import Leaderboard from '../../Live/LiveTabs/Leaderboard';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




const CricketCompleted = () => {
    const Tab = createMaterialTopTabNavigator();

    function MyTabs() {
        return (
          <Tab.Navigator
          initialLayout={MyContests}

          initialRouteName="MyContests"
          screenOptions={{
           tabBarLabelStyle:{
            fontSize:12,
            fontWeight:"700",
            textTransform:"capitalize",
            color:"#000"
           }
          }}>
            
            <Tab.Screen name="My Contest">
        {() => <MyContests show={show} setShow={setShow} />}
      </Tab.Screen>
            <Tab.Screen name="My Teams" component={MyTeam} />
            <Tab.Screen name="Scoreboard" component={Scoreboard} />
            <Tab.Screen name="Stats" component={Stats} />
          </Tab.Navigator>
        );
      }

      function MyTabsWinning() {
        return (
          <Tab.Navigator
          initialLayout={Winning}
          initialRouteName="Winning"
          screenOptions={{
            tabBarLabelStyle:{
              fontSize:12,
              fontWeight:"700",
              textTransform:"capitalize",
              color:"#000"
             }
          }}>
            <Tab.Screen name="Winning" component={Winning} />
            <Tab.Screen name="Leaderboard" component={Leaderboard} />
            <Tab.Screen name="Scoreboard" component={Scoreboard} />
            <Tab.Screen name="Stats" component={Stats} />
          </Tab.Navigator>
        );
      }

      const [show, setShow] = useState(false);
      const navigation = useNavigation();
      const handleBackPress = () => {
        if (show) {
          setShow(false);
          navigation.navigate("LiveMatches");
        } else {
          navigation.goBack();
        }
      };

  return (
    <View style={{height: hp(120),width: wp("100%")}}>
        <View style={{height: hp("27%"),backgroundColor:"#126",width: wp("100%")}}>
        <LinearGradient
          style={{
            flex: 1,

          }}
          colors={["#3247A0", "#1B2656", "#020202"]}
        >
       <View style={{display:"flex",width: wp("100%"),flexDirection:"column",gap:20,justifyContent:"space-between",alignItems:"center"}}>
       <View style={{width: wp("95%"),flexDirection:"row",display:"flex",paddingTop:45,justifyContent:"space-between",alignItems:"center"}}>
           <View style={{flexDirection:"row",gap:5,alignItems:"center"}}>
           <Pressable onPress={handleBackPress}><Ionicons name="arrow-back" size={24} color="#fff" /></Pressable>
           <Text style={{color:"#fff",fontWeight:"bold",fontSize:hp(2)}}>CSK vs RCB</Text>
           </View>
           <View style={{flexDirection:"row",gap:10}}>
            <View>
            <FontAwesome5 name="question-circle" size={25} color="#fff" />

            </View>
            <View style={{borderWidth:3,borderRadius:17,borderColor:"#fff",padding:2.5,alignItems:"center"}}>
                <Text style={{color:"#fff",fontSize:hp(1),textAlign:"center",fontWeight:"bold",paddingTop:1.5,paddingRight:1}}>PTS</Text>
            </View>
           </View>
        </View>  
        <View style={{flexDirection:"row",width: wp("90%"),display:"flex",justifyContent:"space-between",alignItems:"center"}}>                                                  
           <View style={{flexDirection:"row",gap:5,alignItems:"center",display:"flex"}}>
             <View>
                <Image source={require('../../../../assets/rcb.png')} style={{height:50,width:50,borderRadius:30}}/>
             </View>
             <View style={{flexDirection:"column",gap:3}}>
                 <Text style={{color:"#fff"}}>RCB</Text>
                 <Text style={{color:"#fff"}}>20/0  (3.3)</Text>
             </View>
            </View>

           <View style={{flexDirection:"row",backgroundColor:"#35B267",padding:2,paddingLeft:5,paddingRight:5,justifyContent:"center",display:"flex",alignItems:"center"}}>
            <Text style={{color:"#fff",fontWeight:"700",fontSize:hp(1.9),letterSpacing:1}}>Completed</Text>
           </View>

           <View style={{flexDirection:"row",gap:5,alignItems:"center",display:"flex"}}>
           <View style={{flexDirection:"column",gap:3,justifyContent:"flex-end",alignItems:"flex-end"}}>
                 <Text style={{color:"#fff"}}>CSK</Text>
                 <Text style={{color:"#fff"}}>(20) 179/9</Text>
             </View>
             <View>
                <Image source={require('../../../../assets/csk.png')} style={{height:50,width:50,borderRadius:30}}/>
             </View>
            
            </View>
        </View> 

        
       
        <View style={{width: wp("90%"),display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <Text style={{color:"#fff"}}>CSK won by 15 Runs</Text>
              </View>
        </View>      
        </LinearGradient>
        </View>

        <View style={{height:  hp("78%"),width: wp("100%")}}>
          {
             show ?  MyTabsWinning()  :MyTabs()
          }
        </View>
      
    </View>
  )
}

export default CricketCompleted

const styles = StyleSheet.create({})

