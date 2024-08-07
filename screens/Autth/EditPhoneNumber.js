import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Fontisto from "@expo/vector-icons/Fontisto";
import Entypo from "@expo/vector-icons/Entypo";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const EditPhoneNumber = () => {
  return (
    <View
    style={{
      display: "flex",
      flexDirection: "column",
      width: wp("100%"),
      justifyContent: 'center',
      alignItems:"center"
    }}
  >
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: wp("95%"),
        justifyContent: "flex-start",
        padding:10,
        paddingLeft:17
      }}
    >
      <Text>Enter your new Mobile Number</Text>
    </View>
    <View style={{display:"flex",flexDirection: 'row',width: wp("88%"),justifyContent:"flex-start",alignItems:"center",borderBottomWidth:2,gap:5}}>
    <Entypo name="mobile" size={18} color="black" />
      <View style={{display:"flex",flexDirection: 'column',width: wp("100%"),}}>
      <TextInput style={{width: wp("95%")}} />
      </View>
      
    </View>
    <View style={{display:"flex",width: wp("100%"),justifyContent: 'center',alignItems:"center",borderRadius:5,paddingTop:20,paddingBottom:10}}>
    <Pressable style={{display:"flex",width: wp("90%"),backgroundColor:"#3385ff",justifyContent: 'center',alignItems:"center",borderRadius:5,padding:10}}>
    <Text style={{color:"#fff",fontWeight:"bold"}}>GET OTP</Text>
    </Pressable>
    </View>
  </View>
  )
}

export default EditPhoneNumber

const styles = StyleSheet.create({})