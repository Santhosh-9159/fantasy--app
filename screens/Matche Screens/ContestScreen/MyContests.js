import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyContests = () => {
  return (
    <View style={{display:"flex",width:"100%",flexDirection: 'column',height:"100%"}}>
    <View style={{display:"flex",width:"100%",flexDirection: 'column',justifyContent: 'center',height:"50%",alignItems:"center"}}>
    <Image
    source={require("../../../assets/MyMatchesScreen.png")}
    style={{width:300,height:300,opacity: 0.4,}}
    />
    </View>
    <View style={{display:"flex",flexDirection: 'column',width:"100%",justifyContent: 'center',alignItems:"center",gap:10}}>
    <View style={{display:"flex",flexDirection: 'column',width:"65%",justifyContent: 'center',alignItems:"center",alignContent:"center"}}>
    <Text>You haven’t joined any contest yet!
    </Text>
    <Text>The contest you join will appear here</Text>
    </View>
    <View style={{width:"100%",justifyContent: 'center',alignItems:"center"}}>
    <Pressable style={{width:"55%",backgroundColor:"#3385ff",padding:9,borderRadius: 5,justifyContent:"center",alignItems:"center"}}>
    <Text style={{color:"#fff",alignItems:"center",fontWeight:"bold"}}>
    JOIN A CONTEST
    </Text>
    </Pressable>
    </View>
    </View>
      </View>
  )
}
export default MyContests

const styles = StyleSheet.create({})