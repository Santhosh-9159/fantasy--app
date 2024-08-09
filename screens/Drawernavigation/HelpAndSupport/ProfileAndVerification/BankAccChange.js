import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign,Entypo} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BankAccChange = () => {
    const navigation = useNavigation();
    const [Like, setLike] = useState(false)
    const [Dislike, setDislike] = useState(false)
  
    const handleLike = () =>{
        return(
            <>
            {setLike(!Like)}
            {setDislike(false)}
            </>
        )
    }
    const handleDisLike = () =>{
        return(
            <>
            {setDislike(!Dislike)}
            {setLike(false)}          
            </>
        )
    }
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
  </View>
   </View>
</LinearGradient>

</View>



<ScrollView>
<View style={{width:"100%",flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",paddingTop:20,gap:15}}>
          <View style={{width:"90%",flexDirection:"column",display:"flex",justifyContent:"center",backgroundColor:"#fff",padding:15,gap:15}}>
            <View style={{flexDirection:"row",gap:5}}>
                <Text style={{fontWeight:"bold",fontSize:17}}>Profile & Verification</Text>
                <Text style={{color:"#6F6F6F"}}>/ Verify my account</Text>
            </View>
            <View style={{flexDirection:"column",gap:40}}>
                 <View style={{flexDirection:"column",gap:15}}>
                    <Text style={{fontWeight:"bold",fontSize:17}}>Can I change the verified Bank account?</Text>
                    <Text>First, you'll need to unlink your bank account and place a verification request for a new one.</Text>
                    <Text>To unlink your Bank account Go to My Balance from Side Navigation menu and go to My KYC details page and click on the bank account , Scroll down and click on unlink.</Text>
                    <Text>Now, link your new bank account from the same KYC tab. For this:</Text>
                    <View style={{flexDirection:"column",width:"98%"}}>
                        <View style={{flexDirection:"row"}}>
                        <Entypo name="dot-single" size={24} color="black" />
                        <Text>Tap Bank Account and type your bank account details</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Entypo name="dot-single" size={24} color="black" />
                        <Text>Upload a bank proof, and that's it!</Text>
                        </View>
                    </View>
                    <Text>Here are some important points to keep in mind while changing your bank account: </Text>
                    <View style={{flexDirection:"column",width:"98%"}}>
                        <View style={{flexDirection:"row"}}>
                        <Entypo name="dot-single" size={24} color="black" />
                        <Text>Once verified, the same bank account can't be verified on any other Impact11 account</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                        <Entypo name="dot-single" size={24} color="black" />
                        <Text>You can verify a bank account in your name only where the bank account name matches the name on the verified PAN</Text>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                        <Entypo name="dot-single" size={24} color="black" />
                        <Text>NRE accounts and Wallets can't be verified.</Text>
                        </View>
                    </View>
                 </View>

                 <View style={{flexDirection:"row",gap:1}}>
                 <Text>In case you still need help you may contact us</Text>
                 <Pressable>
                    <Text style={{color:"#374DAD"}}>here.</Text>
                 </Pressable>
                 </View>

                 <View style={{flexDirection:"column",gap:15}}>
                     <Text style={{fontWeight:"bold",fontSize:17}}>Was this article helpful</Text>
                     <View style={{flexDirection:"row",gap:20}}>
                     <Pressable onPress={()=>handleLike()}>
                     {
                        Like ? <AntDesign name="like1" size={24} color="#3E57C4" /> : <AntDesign name="like2" size={24} color="#000" />
                     }
                     </Pressable>
                     <Pressable onPress={()=>handleDisLike()}>
                     {
                        Dislike ? <AntDesign name="dislike1" size={24} color="#3E57C4" /> : <AntDesign name="dislike2" size={24} color="#000" />
                     }
                     </Pressable>
                     </View>
                 </View>
               
            </View>
          </View>
          <View style={{flexDirection:"row",width:"90%",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                <Text style={{fontWeight:"bold"}}>Can't find what you are looking for</Text>
          </View>
          <View style={{flexDirection:"row",width:"90%",display:"flex",justifyContent:"flex-start",alignItems:"center",paddingBottom:10}}>
          <LinearGradient
          style={{
            flex: 1,borderRadius:10
          }}
          colors={["#101632", "#2A3A83", "#374DAD"]}
        >
           <View style={{width:"100%",flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center"}}>

            <View style={{width:"100%",flexDirection:"row",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <View style={{flexDirection:"column",gap:10,alignItems:"center",paddingLeft:20}}>
                <Text style={{fontWeight:"bold",color:"#fff",fontSize:20,}}>We are here to help!</Text>
                <Pressable style={{borderRadius:5,borderColor:"#fff",borderWidth:1,alignItems:"center",flexDirection:"row",justifyContent:"space-around",width:100,padding:5}}>
                     <Image source={require('../../../../assets/WriteToUsLogo.png')} style={{height:20,width:20}}/>
                     <Text style={{fontWeight:"bold",color:"#fff",fontSize:15}}>Write to us</Text>
                </Pressable>
            </View>

            <View>
            <Image source={require('../../../../assets/WriteToUs.png')} style={{width:150,height:150}}/>
            </View> 
            </View> 

           </View>
          </LinearGradient>
          </View>
</View>
</ScrollView>

</View>
  )
}

export default BankAccChange

const styles = StyleSheet.create({})