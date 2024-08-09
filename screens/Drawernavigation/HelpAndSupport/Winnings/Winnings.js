import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign,Entypo} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Winnings = () => {
    const navigation = useNavigation();

  return (
    <View style={{height:"100%",width:"100%"}}>
    <View style={{height:"15%",width:"100%",position:"relative"}}>
  <LinearGradient
  style={{
    flex: 1,
  }}
  colors={["#101632", "#2A3A83", "#374DAD"]}
>
   <View style={{flexDirection:"column",display:"flex",justifyContent:"center",width:"100%",alignItems:"center",paddingTop:40,gap:20}}>
   <View style={{width:"90%",flexDirection:"row",justifyContent:"space-between",display:"flex"}}>
      <Pressable onPress={()=>navigation.goBack()}>
      <AntDesign name="arrowleft" size={24} color="#fff" />
      </Pressable>
      <View>
        <Text style={{color:"#fff",fontWeight:"bold",fontSize:15}}>Help & Support</Text>
      </View>
      <View>
        
      </View>
  </View>

  <View  style={{width:"90%",flexDirection:"row",justifyContent:"space-between",display:"flex"}}>
        <View style={{flexDirection:"row",gap:5,alignItems:"center"}}>
            <Image source={require('../../../../assets/IMPACT11 Logo extended.png')}style={{height:15,width:80}}/>
            <Text style={{fontWeight:"bold",color:"#fff",fontSize:28}}>|</Text>
            <Text style={{fontWeight:"bold",color:"#fff",}}>Help Center</Text>
        </View>
        <View>
        <Entypo name="back-in-time" size={24} color="#fff" />
        </View>
  </View>
   </View>
</LinearGradient>

</View>



<View style={{width:"100%",flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",paddingTop:35}}>
          <View style={{width:"90%",flexDirection:"column",display:"flex",justifyContent:"center",backgroundColor:"#fff",padding:15,gap:15}}>
            <View>
                <Text style={{fontWeight:"bold",fontSize:15}}>Winnings</Text>
            </View>
            <View style={{flexDirection:"column",gap:10}}>
              
               <Pressable onPress={()=>navigation.navigate('InformCashPrize')}>
               <Text style={{color:"#6F6F6F"}}>How will I Informed if I win a cash Prize?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('ReceiveMyWinnings')}>
               <Text style={{color:"#6F6F6F"}}>When will I receive my winnings?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('Distributed')}>
               <Text style={{color:"#6F6F6F"}}>If there is a tie between user, how will the winning be
               distributed?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('TaxWinnings')}>
               <Text style={{color:"#6F6F6F"}}>Is Tax deducted on my Winnings?</Text>
               </Pressable>
              
            </View>

            
          </View>
</View>

</View>
  )
}

export default Winnings

const styles = StyleSheet.create({})