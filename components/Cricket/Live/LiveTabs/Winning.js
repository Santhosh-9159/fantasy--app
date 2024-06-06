import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Winning = () => {
  return (
    <View>
    <View style={{padding:10}}>
    <Pressable style={{flexDirection:"column",gap:5,padding:10,borderWidth:2,borderColor:"#b3b3b3",borderRadius:8}}>
 <View style={{flexDirection:"row",width:"100%",display:"flex",justifyContent:"space-between"}}>
      <Text>Prize Pool</Text>
      <Text style={{fontWeight:"bold"}}>Sports</Text>
      <Text>Entry</Text>
 </View>
 <View style={{flexDirection:"row",width:"100%",display:"flex",justifyContent:"space-between"}}>
      <Text style={{fontWeight:"bold"}}>₹8 Crores</Text>
      <Text >28,89,129 posts</Text>
      <Text style={{fontWeight:"bold"}}>₹39</Text>
 </View>
</Pressable>
    </View>
    </View>
  )
}

export default Winning

const styles = StyleSheet.create({})