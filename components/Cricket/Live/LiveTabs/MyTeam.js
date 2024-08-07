import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const MyTeam = () => {
  const navigation = useNavigation()
  return (
    <View style={{padding:10,backgroundColor:"#fff",height: hp("100%")}}>
       <View style={{ display:"flex",
        flexDirection:"column",gap:15,elevation:10}}>
<View style={{ display: "flex", width: wp("95%"), flexDirection: "column", }}>
        <View
          style={{
            width: wp("95%"),
            backgroundColor: "#979797",
            borderWidth: 2,
            borderColor: "#fff",
            height: hp(32),
            borderRadius: 8,
            position: "relative",
            elevation: 10,
          }}
        >
          <Image
            source={require("../../../../assets/CreateTeamPreview.png")}
            style={{
              width: wp("95%"),
              height: hp(32),
              borderRadius: 8,
              opacity: 0.9,
            }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            display: "flex",
            width: wp("96%"),
            flexDirection: "column",
            padding: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <View
            style={{
              display: "flex",
              width: wp("95%"),
              flexDirection: "row",
              padding: 10,
              justifyContent: "space-between",
              backgroundColor: "#0101013d",
              borderTopLeftRadius: 8,
              borderTopRightRadius: 8,
            }}
          >
            <View
              style={{
                display: "flex",
                width: wp("25%"),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#fff" }}>
                Shivam11’s
              </Text>
              <Text style={{ fontWeight: "bold", color: "#fff" }}>(T1)</Text>
            </View>
            <View
              style={{
                display: "flex",
                width: wp("30%"),
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Pressable>
                <Octicons name="pencil" size={20} color="#fff" />
              </Pressable>
              <Pressable>
                <FontAwesome6 name="copy" size={20} color="#fff" />
              </Pressable>
              <Pressable>
                <Entypo name="share" size={24} color="#fff" />
              </Pressable>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              width: wp("100%"),
              flexDirection: "row",
              padding: 5,
            }}
          >
            <View
              style={{
                display: "flex",
                width: wp("62%"),
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  display: "flex",
                  width: wp("60%"),
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Image
                    source={require("../../../../assets/MS Dhoni.png")}
                    style={{ width: 85, height: 85 }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      bottom: 0,
                      width: wp("22%"),
                      backgroundColor: "#fff",
                      borderRadius: 8,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", color: "#000" }}>
                      CSK
                    </Text>
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      backgroundColor: "#000",
                      borderRadius: 20,
                      paddingLeft: 8,
                      paddingRight: 8,
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      left: 0,
                      padding: 2,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#fff",
                        fontSize: hp(2),
                      }}
                    >
                      C
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                  }}
                >
                  <Image
                    source={require("../../../../assets/MS Dhoni.png")}
                    style={{ width: 85, height: 85 }}
                  />
                  <View
                    style={{
                      position: "absolute",
                      top: 0,
                      backgroundColor: "#000",
                      borderRadius: 20,
                      paddingLeft: 5,
                      paddingRight: 5,
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      left: 0,
                      padding: 2,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "#fff",
                        fontSize: hp(1.8),
                      }}
                    >
                      VC
                    </Text>
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      bottom: 0,
                      width: wp("22%"),
                      backgroundColor: "#f27",
                      borderRadius: 8,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "bold", color: "#fff" }}>
                      RCB
                    </Text>
                  </View>
                </View>
              </View>

            
            </View>
            <View  style={{
              display: "flex",
              width: wp("40%"),
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                width: wp("22%")

              }}
            >
              <Image
                source={require("../../../../assets/MS Dhoni.png")}
                style={{ width: 85, height: 85 }}
                />
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  backgroundColor: "#000",
                  borderRadius: 20,
                  paddingLeft: 5,
                  paddingRight: 5,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  left: 0,
                  padding: 2,
                }}
              >
                <Image
                  source={require("../../../../assets/ImpactPreviewNotSelected.png")}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: wp("22%"),
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#000" }}>RCB</Text>
              </View>
            </View>
            
            </View>
          </View>

          <View  style={{
              display: "flex",
              width: wp("100%"),
              flexDirection: "row",
              padding: 5,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}>

          <View
                style={{
                  display: "flex",
                  width: wp("35%"),
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  backgroundColor: "#0101013d",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#fff" }}>CSK</Text>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>7</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  width: wp("35%"),
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  backgroundColor: "#0101013d",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#fff" }}>RCB</Text>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>4</Text>
              </View>
          </View>

          <View
            style={{
              display: "flex",
              width: wp("100%"),
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "#fff" }}>WK 2</Text>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>BAT 2</Text>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>AR 2</Text>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>BOWL 2</Text>
          </View>
        </View>
      </View>

      
      </View>
    </View>
  )
}

export default MyTeam

const styles = StyleSheet.create({})