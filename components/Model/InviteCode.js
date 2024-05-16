import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
const InviteCode = ({visible,onClose}) => {
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onClose}
   
    >
    <View style={{  
    
    display:"flex",
    flexDirection:"column",
    width:"100%",
    justifyContent: "flex-end",
    height:"100%"
}}>
    <View
            style={{
                backgroundColor: "#fff",
              alignItems: "center",
              borderRadius: 4,
              borderColor: "rgba(0, 0, 0, 0.1)",
              height:250,
              gap:20,
              borderRadius:15,
              display:"flex",
             
            }}
          >
         <View style={{display:"flex",flexDirection:"row",justifyContent: 'space-between',alignItems:"center",width:"100%",padding:2,paddingTop:5}}>
         <View style={{display:"flex",flexDirection:"column",justifyContent: 'center',}}>
         <Text></Text>
         </View>
         <View style={{display:"flex",flexDirection:"column",justifyContent: 'center',}}>
         <Text style={{fontWeight: 'bold',fontSize:14}}>Enter Invite Code</Text>
         </View>
             <Pressable
               style={{  right: 10,padding:5}}
               onPress={onClose}
             >
             <AntDesign name="close" size={20} color="black" style={{opacity: 0.5,}} />
             </Pressable>
         </View>
            <TextInput
              placeholder=" Invite code"
              style={{
                width: "90%",
                height: 50,
                padding: 10,
                
                backgroundColor: "#fff",
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 4,
                justifyContent:"center",
                display:"flex",
                flexDirection:"column"
              }}
            />
            <View style={{display: 'flex',flexDirection:"column",justifyContent:"flex-start",paddingRight:15}}>
            <Text style={{fontSize:13,opacity: 0.6,}}>
            Not applicable to the numbers that are already registered!
            </Text>
            </View>
            <Pressable
            style={{backgroundColor: "#3757E2",width:"90%",padding:10,display:"flex",flexDirection:"column",justifyContent: 'center',alignItems: 'center',borderRadius:4}}
            >
            <Text style={{color:"#fff",fontWeight: 'bold',fontSize:14}}>
            Apply
            </Text>
            </Pressable>
          </View>
    </View>
    </Modal>
  )
}

export default InviteCode

const styles = StyleSheet.create({})