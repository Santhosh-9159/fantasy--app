import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign,Entypo} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileAndVerification = () => {
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
                <Text style={{fontWeight:"bold",fontSize:15}}>Profile & Verification</Text>
            </View>
            <View style={{flexDirection:"column",gap:10}}>
               <View>
               <Text style={{fontWeight:"bold"}}>Managing my profile:</Text>
               </View>
               <Pressable onPress={()=>navigation.navigate('ChangeMobileNumber')}>
               <Text style={{color:"#6F6F6F"}}>How to change my mobile number?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('ChangeMailId')}>
               <Text style={{color:"#6F6F6F"}}>How to change my email id?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('ChangeTeamName')}>
               <Text style={{color:"#6F6F6F"}}>Can I change my team name?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('ChangeState')}>
               <Text style={{color:"#6F6F6F"}}>How to change my state?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('Calculate')}>
               <Text style={{color:"#6F6F6F"}}>How are My Matches and Contests calculated?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('NotReceivingMail')}>
               <Text style={{color:"#6F6F6F"}}>Why am I not receiving mails from Impact11?</Text>
               </Pressable>

            </View>

            <View>
                <Text style={{fontWeight:"bold",fontSize:15}}>Verify my account:</Text>
            </View>
            <View style={{flexDirection:"column",gap:10}}>
                <Pressable onPress={()=>navigation.navigate('VerifyImapact11P')}>
                <Text style={{color:"#6F6F6F"}}>How to verify my Impact11 account?</Text>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('PanVerify')}>
                <Text style={{color:"#6F6F6F"}}>Is PAN and bank verification mandatory?</Text>
                </Pressable>
                <Pressable  onPress={()=>navigation.navigate('AadharVerifyWhy')}>
                <Text style={{color:"#6F6F6F"}}>Why do I need to verify my Aadhar?</Text>
                </Pressable>
                <Pressable  onPress={()=>navigation.navigate('PanReject')}>
                <Text style={{color:"#6F6F6F"}}>Why is my PAN verification getting rejected?</Text>
                </Pressable>
                <Pressable  onPress={()=>navigation.navigate('BankAccReject')}>
                <Text style={{color:"#6F6F6F"}}>Why is my Bank account verification getting rejected?</Text>
                </Pressable>
                <Pressable  onPress={()=>navigation.navigate('ChangePan')}>
                <Text style={{color:"#6F6F6F"}}>Can I change the verified PAN card?</Text>
                </Pressable>
                <Pressable  onPress={()=>navigation.navigate('BankAccChange')}>
                <Text style={{color:"#6F6F6F"}}>Can I change the verified Bank account?</Text>
                </Pressable>
                <Pressable  onPress={()=>navigation.navigate('CompleteVerification')}>
                <Text style={{color:"#6F6F6F"}}>I don’t have an Aadhar. How to complete my 
                verification?</Text>
                </Pressable>

            </View>
          </View>
</View>

</View>
  )
}

export default ProfileAndVerification

const styles = StyleSheet.create({})