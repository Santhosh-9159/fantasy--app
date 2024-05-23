import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

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
 style={{width:"55%",backgroundColor:"#3385ff",padding:9,borderRadius: 5,justifyContent:"center",alignItems:"center"}}>
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