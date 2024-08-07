import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign,Entypo,Feather,Ionicons,MaterialCommunityIcons,FontAwesome6,MaterialIcons,FontAwesome} from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const HelpAndSupport = () => {

      const navigation = useNavigation();
  return (


          <View style={{height:"100%",width:"100%"}}>
            <View style={{height:"20%",width:"100%",position:"relative"}}>
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
                    <Image source={require('../../assets/IMPACT11 Logo extended.png')}style={{height:15,width:80}}/>
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

       <View style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
       <View style={{position:"absolute",borderRadius:10,borderColor:"#cccc",padding:10,backgroundColor:"#fff",width:"80%",display:"flex",justifyContent:"flex-start",zIndex:1}}>
               <View style={{flexDirection:"row",gap:15,alignItems:"center"}}>
               <Feather name="search" size={24} color="black" />
               <TextInput  placeholder='How can we help you?' style={{width:"100%"}}/>
               </View>
        </View>
       </View>
      <ScrollView>
      <View style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",paddingTop:30,gap:20,flexDirection:"column",paddingBottom:20,position:"relative"}}>
          <View style={{width:"90%"}}>
            <Text style={{fontWeight:"bold",fontSize:16}}>Topics</Text>
          </View>
          <View style={{flexDirection:"column",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",gap:20}}>

          <View 
          
          style={{flexDirection:"row",width:"90%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Pressable
          onPress={()=>navigation.navigate('GettingStarted')}
           style={{borderRadius:10,backgroundColor:"#fff",padding:20,flexDirection:"column",gap:20,width:"47%",height:"100%"}}>
               <View style={{flexDirection:"row",width:"100%",display:"flex",justifyContent:"space-between"}}>
                     <Text style={{fontWeight:"bold",fontSize:16,width:"50%"}}>Getting Started</Text>
                     <AntDesign name="rocket1" size={24} color="black" />
               </View>
               <View>
                <Text style={{color:"#505050"}}>What is Impact11?, Login and register & more</Text>
               </View>
            </Pressable>
            <Pressable
            onPress={()=>navigation.navigate('PlayingOnImpact')}
             style={{borderRadius:10,backgroundColor:"#fff",padding:20,flexDirection:"column",gap:20,width:"47%",height:"100%"}}>
               <View style={{flexDirection:"row",width:"100%",display:"flex",justifyContent:"space-between"}}>
                     <Text style={{fontWeight:"bold",fontSize:16,width:"50%"}}>Playing on Impact11</Text>
                     <Ionicons name="game-controller-outline" size={24} color="black" />               
                </View>
               <View style={{width:"100%"}}>
                <Text style={{color:"#505050"}}>Managing teams, Joining contest</Text>
               </View>
            </Pressable>
          </View>
          <View
          style={{flexDirection:"row",width:"90%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Pressable 
          onPress={()=>navigation.navigate("ScoresAndPoints")}
          style={{borderRadius:10,backgroundColor:"#fff",padding:20,flexDirection:"column",gap:20,width:"47%",height:"100%"}}>
               <View style={{flexDirection:"row",width:"100%",display:"flex",justifyContent:"space-between"}}>
                     <Text style={{fontWeight:"bold",fontSize:16,width:"50%"}}>Scores & Points</Text>
                      {/* <Image source={require('../../assets/PTS.png')} style={{height:20,width:20}}/> */}
                    
               </View>
               <View>
                <Text style={{color:"#505050"}}>Anything & everything about point system</Text>
               </View>
            </Pressable>
            <Pressable
            onPress={()=>navigation.navigate('HSMyBalance')}
             style={{borderRadius:10,backgroundColor:"#fff",padding:20,flexDirection:"column",gap:20,width:"47%",height:"100%"}}>
               <View style={{flexDirection:"row",width:"100%",display:"flex",justifyContent:"space-between"}}>
                     <Text style={{fontWeight:"bold",fontSize:16,width:"50%"}}>My Balance</Text>
                     <MaterialCommunityIcons name="wallet-outline" size={24} color="black" />
               </View>
               <View style={{width:"100%"}}>
                <Text style={{color:"#505050"}}>Deposits, Withdrawal,& more</Text>
               </View>
            </Pressable>
          </View>
          <View style={{flexDirection:"row",width:"90%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Pressable
          onPress={()=>navigation.navigate("Winnings")}
           style={{borderRadius:10,backgroundColor:"#fff",padding:20,flexDirection:"column",gap:20,width:"47%",height:"100%"}}>
               <View style={{flexDirection:"row",width:"100%",display:"flex",justifyContent:"space-between"}}>
                     <Text style={{fontWeight:"bold",fontSize:16,width:"50%"}}>Winnings</Text>
                     <FontAwesome6 name="ranking-star" size={24} color="black" />
               </View>
               <View>
                <Text style={{color:"#505050"}}>All about your winnings</Text>
               </View>
            </Pressable>
            <Pressable
            onPress={()=>navigation.navigate("ProfileAndVerification")}
             style={{borderRadius:10,backgroundColor:"#fff",padding:20,flexDirection:"column",gap:20,width:"47%",height:"100%"}}>
               <View style={{flexDirection:"row",width:"100%",display:"flex",justifyContent:"space-between"}}>
                     <Text style={{fontWeight:"bold",fontSize:16,width:"56%"}}>Profile & Verification</Text>
                     <Ionicons name="person-outline" size={24} color="black" />
               </View>
               <View style={{width:"100%"}}>
                <Text style={{color:"#505050"}}>Managing profile, Verify accounts & more</Text>
               </View>
            </Pressable>
          </View>
          <View style={{flexDirection:"row",width:"90%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Pressable
          onPress={()=>navigation.navigate('OffersAndRewards')}
           style={{borderRadius:10,backgroundColor:"#fff",padding:20,flexDirection:"column",gap:20,width:"47%",height:"100%"}}>
               <View style={{flexDirection:"row",width:"100%",display:"flex",justifyContent:"space-between"}}>
                     <Text style={{fontWeight:"bold",fontSize:16,width:"50%"}}>Offers & Rewards</Text>
                     <AntDesign name="gift" size={24} color="black" />
               </View>
               <View>
                <Text style={{color:"#505050"}}>Inviting friends, Impact scores</Text>
               </View>
            </Pressable>
            <Pressable
            onPress={()=>navigation.navigate('Security')}
             style={{borderRadius:10,backgroundColor:"#fff",padding:20,flexDirection:"column",gap:20,width:"47%",height:"100%"}}>
               <View style={{flexDirection:"row",width:"100%",display:"flex",justifyContent:"space-between"}}>
                     <Text style={{fontWeight:"bold",fontSize:16,width:"50%"}}>Security</Text>
                     <MaterialIcons name="security" size={24} color="black" />
                </View>
               <View style={{width:"100%"}}>
                <Text style={{color:"#505050"}}>Account security,Responsible Play</Text>
               </View>
            </Pressable>
          </View>
          <View style={{flexDirection:"row",width:"90%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <Pressable
          onPress={()=>navigation.navigate("Legality")}
           style={{borderRadius:10,backgroundColor:"#fff",padding:20,flexDirection:"column",gap:20,width:"47%",height:"100%"}}>
               <View style={{flexDirection:"row",width:"100%",display:"flex",justifyContent:"space-between"}}>
                     <Text style={{fontWeight:"bold",fontSize:16,width:"50%"}}>Legality</Text>
                     <AntDesign name="rocket1" size={24} color="black" />
               </View>
               <View>
                <Text style={{color:"#505050"}}>How is Impact11 Legal?</Text>
               </View>
            </Pressable>
            <Pressable
            onPress={()=>navigation.navigate('FairPlay')}
             style={{borderRadius:10,backgroundColor:"#fff",padding:20,flexDirection:"column",gap:20,width:"47%",height:"100%"}}>
               <View style={{flexDirection:"row",width:"100%",display:"flex",justifyContent:"space-between"}}>
                     <Text style={{fontWeight:"bold",fontSize:16,width:"50%"}}>FairPlay</Text>
                     <MaterialCommunityIcons name="file-document-edit-outline" size={24} color="black" />
               </View>
               <View style={{width:"100%"}}>
                <Text style={{color:"#505050"}}>Things we don’t approve</Text>
               </View>
            </Pressable>
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
                     {/* <Image source={require('../../assets/WriteToUsLogo.png')} style={{height:20,width:20}}/> */}
                     <Text style={{fontWeight:"bold",color:"#fff",fontSize:15}}>Write to us</Text>
                </Pressable>
            </View>

            <View>
            {/* <Image source={require('../../assets/WriteToUs.png')} style={{width:150,height:150}}/> */}
            </View> 
            </View> 

           </View>
          </LinearGradient>
          </View>
               
          </View>
       </View>
      </ScrollView>
          </View>
  )
}

export default HelpAndSupport

const styles = StyleSheet.create({})