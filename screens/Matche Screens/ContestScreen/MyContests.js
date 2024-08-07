import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const MyContests = () => {
  return (
    <View style={{display:"flex",width: wp("100%"),flexDirection: 'column',height:hp("100%")}}>
    <View style={{display:"flex",width:wp("100%"),flexDirection: 'column',justifyContent: 'center',height:hp("50%"),alignItems:"center"}}>
    <Image
    source={require("../../../assets/MyMatchesScreen.png")}
    style={{width:300,height:300,opacity: 0.4,}}
    />
    </View>
    <View style={{display:"flex",flexDirection: 'column',width:wp("100%"),justifyContent: 'center',alignItems:"center",gap:10}}>
    <View style={{display:"flex",flexDirection: 'column',width:wp("65%"),justifyContent: 'center',alignItems:"center",alignContent:"center"}}>
    <Text>You haven’t joined any contest yet!
    </Text>
    <Text>The contest you join will appear here</Text>
    </View>
    <View style={{width:wp("100%"),justifyContent: 'center',alignItems:"center"}}>
    <Pressable style={{width:wp("55%"),backgroundColor:"#3385ff",padding:9,borderRadius: 5,justifyContent:"center",alignItems:"center"}}>
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