import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5,Fontisto ,MaterialCommunityIcons} from '@expo/vector-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const KYC = () => {
  return (
    <View style={{padding:10,flexDirection:"column",gap:10}}>
      <View style={{display:"flex",flexDirection:"row",width: wp("95%"),justifyContent:"space-between",padding:10,alignItems:"center",backgroundColor:"#fff",borderWidth:1,borderRadius:5,borderColor:"#949494"}}>
        <View style={{display:"flex",flexDirection:"row",gap:15,alignItems:"center"}}>
        <View>
        <FontAwesome5 name="mobile-alt" size={25} color="black" />
        </View>
        <View style={{paddingLeft:20}}>
          <Text>Mobile Number</Text>
          <Text>9874561230</Text>
        </View>
        </View>
        <View>
          <Pressable style={{padding:5,backgroundColor:"#37b469",borderRadius:5,paddingLeft:20,paddingRight:20}}>
            <Text style={{color:"#fff"}}>Verify</Text>
          </Pressable>
        </View>
      </View>

      <View style={{display:"flex",flexDirection:"row",width:wp("95%"),justifyContent:"space-between",padding:10,alignItems:"center",backgroundColor:"#fff",borderWidth:1,borderRadius:5,borderColor:"#949494"}}>
        <View style={{display:"flex",flexDirection:"row",gap:25,alignItems:"center"}}>
        <View>
        <Fontisto name="email" size={24} color="black" />
        </View>
        <View style={{padding:1}}>
          <Text>Email Address</Text>
          <Text>example@gmail.com</Text>
        </View>
        </View>
        <View>
          <Pressable style={{padding:5,backgroundColor:"#37b469",borderRadius:5,paddingLeft:20,paddingRight:20}}>
            <Text style={{color:"#fff"}}>Verify</Text>
          </Pressable>
        </View>
      </View>

      <View style={{display:"flex",flexDirection:"row",width:wp("95%"),justifyContent:"space-between",padding:10,alignItems:"center",backgroundColor:"#fff",borderWidth:1,borderRadius:5,borderColor:"#949494"}}>
        <View style={{display:"flex",flexDirection:"row",gap:25,alignItems:"center"}}>
        <View>
        <FontAwesome5 name="address-card" size={24} color="black" />
        </View>
        <View style={{padding:1}}>
          <Text>PAN Card</Text>
          <Text>OD*******8E</Text>
        </View>
        </View>
        <View>
          <Pressable style={{padding:5,backgroundColor:"#37b469",borderRadius:5,paddingLeft:20,paddingRight:20}}>
            <Text style={{color:"#fff"}}>Verify</Text>
          </Pressable>
        </View>
      </View>

      <View style={{display:"flex",flexDirection:"row",width:wp("95%"),justifyContent:"space-between",padding:10,alignItems:"center",backgroundColor:"#fff",borderWidth:1,borderRadius:5,borderColor:"#949494"}}>
        <View style={{display:"flex",flexDirection:"row",gap:25,alignItems:"center"}}>
        <View>
        <MaterialCommunityIcons name="bank-outline" size={24} color="black" />
        </View>
        <View>
          <Text>Bank Account</Text>
          <Text>*********8135</Text>
        </View>
        </View>
        <View>
          <Pressable style={{padding:5,backgroundColor:"#37b469",borderRadius:5,paddingLeft:20,paddingRight:20}}>
            <Text style={{color:"#fff"}}>Verify</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default KYC

const styles = StyleSheet.create({})
