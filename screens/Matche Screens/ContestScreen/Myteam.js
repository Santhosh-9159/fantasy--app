import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
const Myteam = () => {
  const navigation = useNavigation();
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
    <Text>You haven’t created a team yet!
    
    </Text>
    <Text>Create and start winning</Text>
    </View>
    <View style={{width:"100%",justifyContent: 'center',alignItems:"center"}}>
    <Pressable               onPress={() => navigation.navigate("Teamscreen")}
 style={{display:"flex",flexDirection: 'row',gap:5,width:"55%",backgroundColor:"#3E57C4",padding:9,borderRadius: 20,justifyContent:"center",alignItems:"center"}}>
  <View><Feather name="plus-circle" size={20} color="#fff" /></View>
    <Text style={{color:"#fff",alignItems:"center",fontWeight:"bold"}}>
    CREATE A TEAM
    </Text>
    </Pressable>
    </View>
    </View>
      </View>
  )
}

export default Myteam

const styles = StyleSheet.create({})