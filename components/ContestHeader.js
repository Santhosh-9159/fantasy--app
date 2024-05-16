import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const ContestHeader = () => {
  return (
    <View style={{display:"flex",flexDirection: 'row',width:"100%",padding:5,justifyContent: 'space-evenly',
    }}>
     <View  style={{display:"flex",flexDirection: 'column',width:"60%"}}>
     <Text style={{fontWeight:"bold",color:'#fff',fontSize:15}}>CSK vs RCB</Text>
     <Text style={{fontSize:11,color:"#fff",paddingLeft:7}}>21M 30s left</Text>
     </View>
     <View style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",width:"65%",justifyContent:"flex-start",alignItems:"center",gap:8}}>
     <MaterialCommunityIcons name="bell-plus-outline" size={24} color="#fff" />
     <Pressable
     style={{
       flexDirection: "row",
       marginRight: 20,
       alignItems: "center",
       borderWidth: 2,
       gap: 10,
       borderRadius: 5,
       borderColor: "#fff",
     }}
   >
     <Text style={{ color: "#fff", marginLeft: 5 }}>₹100</Text>
     <Ionicons name="wallet-outline" size={24} color="white" />
   </Pressable>
     </View>
    </View>
  )
}

export default ContestHeader

const styles = StyleSheet.create({})