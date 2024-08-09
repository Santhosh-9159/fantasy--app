import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign,Entypo} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const PlayingOnImpact = () => {
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
                <Text style={{fontWeight:"bold",fontSize:15}}>Playing on Impact11</Text>
            </View>
            <View style={{flexDirection:"column",gap:10}}>
               <View>
               <Text style={{fontWeight:"bold"}}>Managing Teams</Text>
               </View>
               <Pressable onPress={()=>navigation.navigate('EditTeams')}>
               <Text style={{color:"#6F6F6F"}}>How do I edit my teams?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('EditAfterMatch')}>
               <Text style={{color:"#6F6F6F"}}>Can I edit a team after the match starts?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('DeleteTeam')}>
               <Text style={{color:"#6F6F6F"}}>Can I delete a team?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('SwitchTeams')}>
               <Text style={{color:"#6F6F6F"}}>How to switch teams in a contest?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('MultipleTeam')}>
               <Text style={{color:"#6F6F6F"}}>Can I Join a Impact11 contest with multiple team?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('IncorrectLineup')}>
               <Text style={{color:"#6F6F6F"}}>What happens if an incorrect starting lineup is 
               officially announced?</Text>
               </Pressable>
               <Pressable onPress={()=>navigation.navigate('PlayerDoNotPlay')}>
               <Text style={{color:"#6F6F6F"}}>What happens when one or more of my selected 
               players do not play in the match?</Text>
               </Pressable>
            </View>

            <View>
                <Text style={{fontWeight:"bold",fontSize:15}}>Joining Contest</Text>
            </View>
            <View style={{flexDirection:"column",gap:10}}>
                <Pressable onPress={()=>navigation.navigate('ContestJoin')}>
                <Text style={{color:"#6F6F6F"}}>What type of contest can I join?</Text>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('PublicPrivateContest')}>
                <Text style={{color:"#6F6F6F"}}>What are Public and Private contests?</Text>
                </Pressable>
                <Pressable  onPress={()=>navigation.navigate('FlexibileContest')}>
                <Text style={{color:"#6F6F6F"}}>What is Flexible contest?</Text>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('UnfilledContest')}>
                <Text style={{color:"#6F6F6F"}}>Does unfilled public contest get cancelled?</Text>
                </Pressable>
                <Pressable onPress={()=>navigation.navigate('FindContest')}>
                <Text style={{color:"#6F6F6F"}}>Where can I find the contests I've joined?</Text>
                </Pressable>
            </View>
          </View>
</View>

</View>
  )
}

export default PlayingOnImpact

const styles = StyleSheet.create({})