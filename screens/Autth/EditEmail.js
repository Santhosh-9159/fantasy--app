import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Fontisto from "@expo/vector-icons/Fontisto";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const EditEmail = () => {
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
            <Text>Enter your new email</Text>
          </View>
          <View style={{display:"flex",flexDirection: 'row',width:wp("87%"),justifyContent:"flex-start",alignItems:"center",borderBottomWidth:2,gap:5}}>
            <Fontisto name="email" size={18} color="black" />
            <View style={{display:"flex",flexDirection: 'column',width: wp("100%"),}}>
            <TextInput style={{width: wp("95%")}} />
            </View>
            
          </View>
          <View style={{display:"flex",width:wp("100%"),justifyContent: 'center',alignItems:"center",borderRadius:5,paddingTop:20, paddingBottom:10}}>
          <Pressable style={{display:"flex",width:wp("90%"),backgroundColor:"#3385ff",justifyContent: 'center',alignItems:"center",borderRadius:5,padding:10}}>
          <Text style={{color:"#fff",fontWeight:"bold"}}>GET OTP</Text>
          </Pressable>
          </View>
        </View>
  )
}

export default EditEmail

const styles = StyleSheet.create({
  
})