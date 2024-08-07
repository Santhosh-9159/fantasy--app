import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from "react-native-progress";
import { FontAwesome5 } from '@expo/vector-icons';
import { useSport } from '../../components/SportContext';

import { useNavigation } from '@react-navigation/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const TireScreen = () => {
  const { Tier} = useSport();
  const { ImpactScore} = useSport();
  const navigation = useNavigation();
 

  return (
    <LinearGradient
    colors={['#3247A0','#1B2656','#020202','#020202']}
        style={styles.background}
    >
       <View style={{justifyContent:"center",width: wp("100%"),display:"flex",flexDirection:"column",}}>
       <Pressable onPress={()=>navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={30} color="#fff" />
        </Pressable>
        <View style={styles.tierBox}>
          <View style={styles.heading}>
             <Text style={{color:"#fff",fontSize: hp(2.3),fontWeight:"bold"}}>My Tier</Text>
          </View>
          <View style={styles.tier}>
            <View style={styles.TierImageBg}>
             
              {
                Tier == 'BRONZE' && <Image source={require('../../assets/Bronze.png')} style={styles.TierImage}/>
              }
              {
                Tier == 'SILVER' && <Image source={require('../../assets/Silver.png')} style={styles.TierImage}/>
              }
              {
                Tier == 'GOLD' && <Image source={require('../../assets/Gold.png')} style={styles.TierImage}/>
              }
              {
                Tier == 'DIAMOND' && <Image source={require('../../assets/Diamond.png')} style={styles.TierImage}/>
              }
              {
                Tier == 'THE STAR' && <Image source={require('../../assets/starplace.png')} style={styles.TierImage}/>
              }
              {
                Tier == 'LEGEND' && <Image source={require('../../assets/Legend.png')} style={styles.TierImage}/>
              }
            </View>
            <View style={{alignItems:"center"}}>
              <Text style={{color:"#fff",fontSize:hp(3),fontWeight:"bold",paddingBottom:13}}>{Tier}</Text>
            </View>
            <View style={styles.flowImages}>
            <View style={styles.tiertest}>
            <Image source={require('../../assets/Bronze.png')} style={styles.bronzeimg}/>
            </View>
            <View style={styles.tiertest}>
            <Image source={require('../../assets/Bronze.png')} style={styles.bronzeimg}/>
            </View>
            <View style={styles.tiertest}>
            <Image source={require('../../assets/Bronze.png')} style={styles.bronzeimg}/>
            </View>
            <View style={styles.tiertest}>
            <Image source={require('../../assets/Bronze.png')} style={styles.bronzeimg}/>
            </View>
            <View style={styles.tiertest}>
            <Image source={require('../../assets/Bronze.png')} style={styles.bronzeimg}/>
            </View>
            <View style={styles.tiertest}>
            <Image source={require('../../assets/Bronze.png')} style={styles.bronzeimg}/>
            </View>
        </View>
          </View>
        </View>
       
        
        <View style={{padding:20}}>
          <Text style={{color:"#fff",fontWeight:"bold",fontSize: hp(2.3)}}>Total Impacts</Text>
        </View>
       <View style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}}>
       <View style={styles.impactScoreBg}>
        <Text style={styles.impactScore}>{ImpactScore}</Text>
      </View>
       </View>

       <View style={styles.progressbar}>
       <Progress.Bar
                  progress={0.3}
                  width={243}
                  height={3}
                  borderWidth={0.2}
                  backgroundColor="#ABABAB"
                />
       </View>

       <View style={{width:wp("100%"),flexDirection:"column",display:"flex",justifyContent:"center",gap:5}}>
       <View style={{width:wp("100%"),display:"flex",flexDirection:"row",justifyContent:"center"}}>
       <View style={{width: wp("90%"),display:"flex",flexDirection:"row",justifyContent:"center"}}>
        <Text style={{color:"#fff",fontSize:hp(2),textAlign:"justify"}}>Total Impacts points is based on performance of your last
       25 matches you played in Impact11(Includes all sports).Total impacts affected by all matches you play, so make sure you consistently perform well.</Text>
       </View>
       </View>
       
       <View style={{width:wp("100%"),display:"flex",flexDirection:"row",justifyContent:"center",padding:10}}>
       <View style={{width:wp("90%"),display:"flex",flexDirection:"row",justifyContent:"flex-start",gap:5}}>
        <View>
        <FontAwesome5 name="question-circle" size={20} color="#fff" />
        </View>
        <View>
        <Text style={{color:"#fff",fontSize:hp(2),fontWeight:"bold"}}>
         How is your Total Impact calculated?
       </Text>
        </View>

       </View>

       </View>
       <View style={{width:wp("100%"),display:"flex",flexDirection:"row",justifyContent:"center",padding:10}}>
       <View style={{width: wp("90%"),display:"flex",flexDirection:"column",justifyContent:"flex-start",gap:2}} >
        <Text style={{color:"#fff",fontSize:hp(2),textAlign:"justify"}}>Maximum achievable Impact point is 999</Text>
        <Text style={{color:"#fff",fontSize:hp(2),textAlign:"justify"}}>Total Impacts is only for evaluating your most Recent
        form in Impact11 and it will not affect your Impact11 
        experience in anyway.</Text>
       </View>
       </View>
     
       </View>

       </View>
        
    </LinearGradient>
  )
}

export default TireScreen

const styles = StyleSheet.create({
    container:{
          flex:1,  
    },
    
    background: {
        flex:1,  
        height:850   
      },
      back:{
           paddingTop:40,
           paddingLeft:20
      },
      tierBox:{
        flexDirection:"column",
        width:wp("100%"),
        display:"flex",
        justifyContent:"center",
        // alignItems:'center',
        gap:10,
        
      },

      heading:{
         width: wp("100%"),
         display:"flex",
         justifyContent:"center",
         flexDirection:"column",
         alignItems:"center"
      },
      tier:{
        flexDirection:"column",
        width: wp("100%"),
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      },
      TierImage:{
        height:hp(15),
        width: wp(20),
       
      },
      TierImageBg:{
        flexDirection:"column",
        width:wp("100%"),
        display:"flex",
        alignItems:"center"
      },
      flowImages:{
        flexDirection:"row",
        display:"flex",
        width:wp("95%"),
        justifyContent:"space-between",
        padding:13,
        backgroundColor:"#196",

      },
      bronzeimg:{
         height: hp(4),
         width:wp(7),
         
      },
      tiertest:{
        borderRadius:40,
        padding:5,
        borderWidth:2,
        borderColor:"#fff"    ,
        
        },
        impactScoreBg:{
                    
          width: wp("40%"),
          justifyContent:"center",
          display:"flex",
          flexDirection:"row",
          backgroundColor:"#000",
          borderWidth:1,
          borderColor:"#fff",
          borderRadius:6

        },
        
        impactScore:{
          color:"#fff",
          
          padding:8,
          fontWeight:"bold",
          fontSize:30
        },
        progressbar:{
          width:wp("100%"),display:"flex",flexDirection:"row",justifyContent:"center",padding:20
        },


})