import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';


const CaptainandViceCaptain = () => {
    const navigation = useNavigation();


  return (
    <View style={{ backgroundColor: "#2d2d2d", width: "100%", height: "100%" }}>
        <View
        style={{
          height: "18%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: 15,
          top:20
        }}
      >
       <View style={{ display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          }}>
       <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={28} color="#fff" />
          </Pressable>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
            Shivam11s
            </Text>
            <Text
              style={{ color: "#fff", fontWeight: "400", fontSize: 16 }}
            >
              309 Pts
            </Text>
          </View>
        </View> 
        <View style={{ display: "flex",
                flexDirection: "row",gap:15,
                justifyContent: "center",
                alignItems: "center",}}>
        <View style={{borderWidth:3,borderRadius:17,borderColor:"#fff",padding:2.5,alignItems:"center"}}>
                <Text style={{color:"#fff",fontSize:10,textAlign:"center",fontWeight:"bold",paddingTop:3,paddingBottom:3,paddingRight:1}}>PTS</Text>
            </View>
            <View>
            <Entypo name="share" size={28} color="#fff" />
            </View>
        </View>
       </View>


          <View style={{ display: "flex",
                flexDirection: "row",gap:10,
                
          justifyContent: "flex-start",
          alignItems: "flex-start",width:"100%"}}>
          <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#fff",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 3,
                paddingRight: 3,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold" }}>CSK</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "red",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 3,
                paddingRight: 3,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "bold",color:"#000" }}>RCB</Text>
            </View>
          </View>



      </View>
        <View
        style={{
          height: "82%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Image
          source={require("../../assets/GroundPreview.png")}
          style={{ width: "100%", height: "100%", opacity: 0.9 }}
        />
         <View
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
            <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "25%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingTop: 10,
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 12 }}
                  >
                    WICKET-KEEPER
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "25%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 12 }}
                  >
                    BATTER
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "25%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 12 }}
                  >
                    ALL-ROUNDER
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "25%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 12 }}
                  >
                    BOWLER
                  </Text>
                </View>
              </View>
        </View>
        </View>
       
    </View>
  )
}

export default CaptainandViceCaptain

const styles = StyleSheet.create({})