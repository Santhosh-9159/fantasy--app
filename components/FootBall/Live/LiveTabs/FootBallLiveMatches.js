import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FootBallLiveMatches = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Text>Football</Text>
      <Image source={require('../../../../assets/ContestScreen.png')} style={styles.image} />
      <Text style={styles.text}>You haven’t join any contests that are live join contest for any of the upcoming matches.</Text>
      <Pressable style={styles.pressable} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.pressText}>VIEW UPCOMING MATCHES</Text>
      </Pressable>
      </View>
    </View>
  )
}

export default FootBallLiveMatches


const styles = StyleSheet.create({
  content:{
   
    height:hp("63%"),
    width: wp("100%"),
    justifyContent:"center",
     alignItems:"center",
     padding:35,
     gap:15
     
 },
  
   image:{
    height:350,
    width:290,
    opacity:0.30
    
   },
   pressable:{
         backgroundColor:"#3385ff",
         padding:10,
         borderRadius:6
   },
   text:{
    fontSize:hp(2),
    fontWeight:"bold",
    textAlign:"justify"

   },
   pressText:{
    fontWeight:"bold",
    color:"#fff",
    fontSize:hp(2)
   }
  })