import { Image, Pressable, StyleSheet, Text, View, Platform} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const CricketLiveMatches = () => {

   const [Display, setDisplay] = useState(true)
   const navigation = useNavigation();
  const initialLive = () =>{
    return(
      <View style={styles.content}>
          
      <Image source={require('../../../assets/ContestScreen.png')} style={styles.image} />
      <Text style={styles.text}>You haven’t join any contests that are live join contest for any of the upcoming matches.</Text>
      <Pressable style={styles.pressable} onPress={()=>navigation.navigate('Home')}>
        <Text style={styles.pressText}>VIEW UPCOMING MATCHES</Text>
      </Pressable>
      </View>
    )
  }

  const livematches = () =>{
    return(
          <View
            style={{
              width: wp("100%"),
              height: hp(65),
              display: "flex",
              flexDirection: "column",
              justifyContent:"flex-start",
              alignItems:"center",
              padding:10
            }}
          >
            <Pressable 
            onPress={()=>navigation.navigate('CricketLive')}
              style={{
                borderRadius: 5,
                overflow: "hidden",
                width: "95%",
                backgroundColor: "#fff",
                flexDirection: "column",
                justifyContent: "space-between",
                ...Platform.select({
                  ios: {
                    shadowColor: "red",
                    shadowOpacity: 0.8,
                    shadowRadius: 10,
                    shadowOffset: { width: 20, height: 10 },
                  },
                  android: {
                    elevation: 15,
                  },
                }),
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: wp("95%"),
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: wp("100%"),
                  }}
                >
                   <View
                    style={{
                      width: wp("60%"),
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      borderBottomRightRadius: 50,
                      position:"relative"
                    }}
                  >
                    <Image source={require("../../../assets/Borderradius.png")} style={{height:20,width:200}}/>
                    <Text style={{ fontSize: hp(1.5), padding: 5, color: "#fff",fontWeight:"bold",position:'absolute' }}>
                      INDIAN T20 LEAGUE
                    </Text>
                  </View>
                  <View
                    style={{
                      width: wp("40%"),
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                  
                   
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    width: wp("95%"),
                    padding: 10,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: wp("25%"),
                      gap: 5,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        width: wp("30%"),
                        gap: 10,
                      }}
                    >
                      <View>
                        <Image
                          source={require("../../../assets/csk.png")}
                          style={{
                            backgroundColor: "#fff",
                            resizeMode: "contain",
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                          }}
                        />
                      </View>
                      <View>
                        <Text style={{ fontWeight: "bold" }}>CSK</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 100,
                      }}
                    >
                      <Text style={{ fontSize: hp(1.5) }} numberOfLines={1}>
                        Chennai Super Kings  
                      </Text>
                    </View>
                  </View>
  
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: wp("40%"),
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 5,
                    }}
                  >
                    <View style={{ backgroundColor: "#e7ecff", padding: 5 }}>
                      <Text style={{ fontSize: hp(1.5) ,color:"#ff0c0c",fontWeight:"900"}}>LIVE</Text>
                    </View>
                    
                  </View>
  
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: wp("30%"),
                      gap: 5,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        width: wp("28%"),
                        gap: 10,
                      }}
                    >
                      <View>
                        <Text style={{ fontWeight: "bold" }}>RCB</Text>
                      </View>
  
                      <View>
                        <Image
                          source={require("../../../assets/rcb.png")}
                          style={{
                            backgroundColor: "#fff",
                            resizeMode: "contain",
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 100,
                      }}
                    >
                      <Text style={{ fontSize: hp(1.5) }} numberOfLines={1}>
                        Royal Challenger Bangalore
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                style={{
                  padding: 5,
                  width: wp("100%"),
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems:"center",
                  borderTopWidth:0.5,
                  borderColor:"#cccccc",
                  paddingLeft:10,
                  paddingRight:10
                }}
              >
                <View style={{display: "flex",
                  flexDirection: "row",gap:6,alignItems: "center",
                  justifyContent: "center",}}>
                <Text style={{padding:3,paddingLeft:5,borderRadius:15,fontSize:hp(1.9),fontWeight:"bold"}}>1 Team</Text>
                <Text style={{fontSize:hp(1.9),fontWeight:"bold"}} >3 Contests</Text>
                </View>
               
              </View>
              </View>
              
            </Pressable>
          </View>
          
          )
  }
  
  return (
    <View style={styles.container}>
      
        {
          Display ? livematches() : initialLive()
        } 
    </View>
  )
}

export default CricketLiveMatches

const styles = StyleSheet.create({
  
  content:{
    
     height:hp("63%"),
     width: wp("100%"),
     justifyContent:"center",
      alignItems:"center",
      padding:35,
      gap:15
      
  },
   
    image:{
     height:350,
     width:290,
     opacity:0.30
     
    },
    pressable:{
          backgroundColor:"#3385ff",
          padding:10,
          borderRadius:6
    },
    text:{
     fontSize:hp(2),
     fontWeight:"bold",
     textAlign:"justify"
 
    },
    pressText:{
     fontWeight:"bold",
     color:"#fff",
     fontSize:hp(2)
    }
 })