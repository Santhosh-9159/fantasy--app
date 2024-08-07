import { Image, SafeAreaView, StyleSheet, Text, TextInput, View,Pressable } from 'react-native'
import React from 'react'
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/core';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const NameRegister = () => {
    const navigation = useNavigation()
    
  return (
    <SafeAreaView>
    <View style={{display:"flex",flexDirection: 'column',width: wp("100%"),justifyContent:"center",alignItems:"center",top: 70,}}>
      <View style={{display:"flex",flexDirection: 'column',width: wp("100%"),justifyContent:"center",alignItems:"center",gap:8}}>
      <Image source={require("../../assets/Personimage.png")}
      style={{width: wp(36),height: hp(20)}}
      />
      <Text style={{ fontWeight: "900", color: "#000",fontSize:hp(2.4) }}>Start your Innings in IMPACT11!</Text>
      <Text style={{ fontWeight: "900", color: "#3c3c3c" ,fontSize:hp(2.2)}}>Tell us your Name</Text>
      </View>
      <View style={{display:"flex",flexDirection: 'column',width: wp("90%"),padding:10,gap:15}}>
      <View
      style={{
        display: "flex",
        flexDirection: "row",
        width:  wp("75%"),
        marginTop: 5,
        justifyContent:"center",alignItems:"center",
        borderBottomWidth: 2,
        borderColor: "#595959",
        gap:10,
        paddingLeft:13
      }}
    >
     
        <FontAwesome5 name="user" size={18} color="black" />
        <TextInput style={{width: wp("70%")}} placeholder="Enter your name" />
    </View>
    <View>
    <Text style={{ fontWeight: "900", color: "#818181",fontSize:hp(2) }}>Note : We will use this name to generate a user name for you. You can change the username later.</Text>
    </View>
   
    <Pressable 
    style={{
      backgroundColor: "#3385ff",
      padding: 8,
      width:  wp("85%"),
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    }}
    onPress={()=>navigation.navigate("Tab")}

    >
      <Text style={{ fontWeight: "900", color: "#fff" }}>
        SAVE & CONTINUE
      </Text>
    </Pressable>
  
  <View
  style={{
    backgroundColor: "#FFF",
    padding: 8,
    width: wp("85%"),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "#000",borderWidth:1
  }}
>
  <Pressable>
    <Text style={{ fontWeight: "900", color: "#000" }}>
    I’LL DO IT LATER
    </Text>
  </Pressable>
</View>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default NameRegister

const styles = StyleSheet.create({})