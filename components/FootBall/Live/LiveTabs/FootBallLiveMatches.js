import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
  container:{
     justifyContent:"center",
     alignItems:"center",
     flex:1,

     
  },
 content:{
   
    height:"70%",
    width:"100%",
    justifyContent:"center",
     alignItems:"center",
     padding:30,
     gap:15
     
 },
  
   image:{
    height:350,
    width:"90%",
    opacity:0.30
    
   },
   pressable:{
         backgroundColor:"#3385ff",
         padding:10,
         borderRadius:6
   },
   text:{
    fontSize:14,
    fontWeight:"bold",
    textAlign:"justify"

    
   },
   pressText:{
    fontWeight:"bold",
    color:"#fff",
    fontSize:15
   }
})