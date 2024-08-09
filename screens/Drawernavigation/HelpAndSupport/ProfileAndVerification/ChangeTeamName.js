import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign,Entypo} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChangeTeamName = () => {
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



<View style={{width:"100%",flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center",position:"relative",paddingTop:20,gap:15}}>
          <View style={{width:"90%",flexDirection:"column",display:"flex",justifyContent:"center",backgroundColor:"#fff",padding:15,gap:15}}>
            <View style={{flexDirection:"row",gap:5}}>
                <Text style={{fontWeight:"bold",fontSize:17}}>Profile & Verification</Text>
                <Text style={{color:"#6F6F6F"}}>/ Managing my profile</Text>
            </View>
            <View style={{flexDirection:"column",gap:40}}>
                 <View style={{flexDirection:"column",gap:15}}>
                    <Text style={{fontWeight:"bold",fontSize:17}}>Can I change my team name?</Text>
                    <Text>Team names can only be changed once!</Text>
                    <Text>To change your default team name,</Text>
                    <View style={{flexDirection:"column",width:"98%"}}>
                          <View style={{flexDirection:"row"}}>
                          <Entypo name="dot-single" size={24} color="black" />
                          <Text>Head to your Profile page by clicking on your profile pic on bottom right corner.</Text>
                          </View>
                          <View style={{flexDirection:"row",alignItems:"center"}}>
                          <Entypo name="dot-single" size={24} color="black" />
                          <Text>Tap the edit (pencil) icon next to your team name</Text>
                          </View>
                          <View style={{flexDirection:"row",alignItems:"center"}}>
                          <Entypo name="dot-single" size={24} color="black" />
                          <Text>Select a team name of your choice and save it</Text>
                          </View>
                          <View style={{flexDirection:"row",alignItems:"center"}}>
                          <Entypo name="dot-single" size={24} color="black" />
                          <Text>If it is already taken, you will need to select a different one.</Text>
                          </View>
                          <View style={{flexDirection:"row",alignItems:"center"}}>
                          <Entypo name="dot-single" size={24} color="black" />
                          <Text>While changing your team name, please remember:</Text>
                          </View>
                          <View style={{flexDirection:"row",alignItems:"center"}}>
                          <Entypo name="dot-single" size={24} color="black" />
                          <Text>Your team name is your identity on Impact11 and is visible to everyone</Text>
                          </View>
                          <View style={{flexDirection:"row",alignItems:"center"}}>
                          <Entypo name="dot-single" size={24} color="black" />
                          <Text>Have a unique combination of letters and numbers, avoiding any personal information such as phone numbers, names, or email addresses.</Text>
                          </View>
                          <View style={{flexDirection:"row",alignItems:"center"}}>
                          <Entypo name="dot-single" size={24} color="black" />
                          <Text>Avoid using inappropriate words or anything that has religious inclinations.</Text>
                          </View>
                          <View style={{flexDirection:"row",alignItems:"center"}}>
                          <Entypo name="dot-single" size={24} color="black" />
                          <Text>Ensure that your team name doesn't resemble Impact11 in any way.</Text>
                          </View>
                    </View>
                    <Text>PS: If you’ve changed your team name previously after registration, you won't see the pencil icon next to your team name, and you won’t be able to change it again!</Text>
                    
                    
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
          <View style={{flexDirection:"row",width:"90%",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
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

</View>
  )
}

export default ChangeTeamName

const styles = StyleSheet.create({})