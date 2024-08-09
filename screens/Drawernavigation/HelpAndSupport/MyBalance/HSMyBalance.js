import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign,Entypo} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HSMyBalance = () => {
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
                <Text style={{fontWeight:"bold",fontSize:15}}>My Balance</Text>
            </View>
            <View style={{flexDirection:"column",gap:10}}>
               <View>
               <Text style={{fontWeight:"bold"}}>Withdrawal:</Text>
               </View>
               <Pressable onPress={()=>navigation.navigate('WithDrawWinnings')}>
               <Text style={{color:"#6F6F6F"}}>How do I withdraw my winnings?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('WithdrawalRequest')}>
               <Text style={{color:"#6F6F6F"}}>I’ve placed a withdrawal request, when will I receive 
               my money?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('CheckStatusWithdrawal')}>
               <Text style={{color:"#6F6F6F"}}>How can I check the status of my withdrawal?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('WithdrawalBankAccDetails')}>
               <Text style={{color:"#6F6F6F"}}>What bank account details do I need to provide for
               withdrawal/verification?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('WithdrawalRequestCancel')}>
               <Text style={{color:"#6F6F6F"}}>My withdrawal request is cancelled, what should I do 
               now?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('DiscountBonus')}>
               <Text style={{color:"#6F6F6F"}}>Can I withdraw my Discount bonus?</Text>
               </Pressable>

            </View>

            <View>
                <Text style={{fontWeight:"bold",fontSize:15}}>Deposit:</Text>
            </View>
            <View style={{flexDirection:"column",gap:10}}>
                <Pressable onPress={()=>navigation.navigate('AddCashMyBalance')}>
                <Text style={{color:"#6F6F6F"}}>How do I add cash to my Impact11 account?</Text>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('ManageWallets')}>
                <Text style={{color:"#6F6F6F"}}>How do I manage PhonePe/Paytm wallets on Impact11?</Text>
                </Pressable>
                <Pressable  onPress={()=>navigation.navigate('ManageCards')}>
                <Text style={{color:"#6F6F6F"}}>How do I manage my cards on Impact11?</Text>
                </Pressable>

            </View>
          </View>
</View>

</View>
  )
}

export default HSMyBalance

const styles = StyleSheet.create({})