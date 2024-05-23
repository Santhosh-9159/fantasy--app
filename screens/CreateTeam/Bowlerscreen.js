import { Image, Pressable, ScrollView, Text, View } from "react-native";
import React, { Component } from "react";
import { Feather } from "@expo/vector-icons";

export class Bowlerscreen extends Component {
  render() {
    return (
      <ScrollView
        style={{
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <View style={{ padding: 5 }}>
            <Text style={{fontSize:12}}>Pick 1-8 Bowlers</Text>
          </View>


          <View
            style={{
              backgroundColor: "#dee4fa",
              width: "100%",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12 }}>Player</Text>
              </View>
              <View
                style={{
                  width: "20%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12 }}>Points</Text>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "30%",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 12 }}>Selected By %</Text>
              </View>
            </View>
          </View>

          <View  style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap:10
            }}>
          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderBottomWidth:1,
              borderColor:"#000",
              paddingBottom:10
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "48%",
                gap: 10,
              }}
            >
              <View
                style={{
                  padding: 2,
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  width: "30%",
                  position:"relative",
                  justifyContent: "center",
                      alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/UserProfile.png")}
                  style={{ width: 50, height: 50, borderRadius: 30 }}
                />
                <View style={{ paddingLeft: 5,paddingRight: 5,
                      backgroundColor: "#7f7f7f",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      borderRadius:8,
                      bottom:0,
                      position:'absolute',}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color:"#fff",
                    }}
                  >
                    CSK
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 3,
                }}
              >
                <View style={{}}>
                  <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                    M.S. Dhoni
                  </Text>
                </View>
                <View style={{}}>
                  <Text style={{ fontSize: 12 }}>Played Last Match</Text>
                </View>
              </View>
            </View>
             <View
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{fontWeight:"bold"}}>700</Text>
            </View>
            <View
              style={{
                width: "30%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text>80%</Text>
              </View>
              <View style={{ width: "30%" }}>
                <Feather name="plus-square" size={24} color="#35b367" />
              </View>
            </View>
          </Pressable>

          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderBottomWidth:1,
              borderColor:"#000",
              paddingBottom:10
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "48%",
                gap: 10,
              }}
            >
              <View
                style={{
                  padding: 2,
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  width: "30%",
                  position:"relative",
                  justifyContent: "center",
                      alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/UserProfile.png")}
                  style={{ width: 50, height: 50, borderRadius: 30 }}
                />
                <View style={{ paddingLeft: 5,paddingRight: 5,
                      backgroundColor: "#7f7f7f",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      borderRadius:8,
                      bottom:0,
                      position:'absolute',}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color:"#fff",
                    }}
                  >
                    CSK
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 3,
                }}
              >
                <View style={{}}>
                  <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                    M.S. Dhoni
                  </Text>
                </View>
                <View style={{}}>
                  <Text style={{ fontSize: 12 }}>Played Last Match</Text>
                </View>
              </View>
            </View>
             <View
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{fontWeight:"bold"}}>700</Text>
            </View>
            <View
              style={{
                width: "30%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text>80%</Text>
              </View>
              <View style={{ width: "30%" }}>
                <Feather name="plus-square" size={24} color="#35b367" />
              </View>
            </View>
          </Pressable>

          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderBottomWidth:1,
              borderColor:"#000",
              paddingBottom:10
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "48%",
                gap: 10,
              }}
            >
              <View
                style={{
                  padding: 2,
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  width: "30%",
                  position:"relative",
                  justifyContent: "center",
                      alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/UserProfile.png")}
                  style={{ width: 50, height: 50, borderRadius: 30 }}
                />
                <View style={{ paddingLeft: 5,paddingRight: 5,
                      backgroundColor: "#7f7f7f",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      borderRadius:8,
                      bottom:0,
                      position:'absolute',}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color:"#fff",
                    }}
                  >
                    CSK
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 3,
                }}
              >
                <View style={{}}>
                  <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                    M.S. Dhoni
                  </Text>
                </View>
                <View style={{}}>
                  <Text style={{ fontSize: 12 }}>Played Last Match</Text>
                </View>
              </View>
            </View>
             <View
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{fontWeight:"bold"}}>700</Text>
            </View>
            <View
              style={{
                width: "30%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text>80%</Text>
              </View>
              <View style={{ width: "30%" }}>
                <Feather name="plus-square" size={24} color="#35b367" />
              </View>
            </View>
          </Pressable>

          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderBottomWidth:1,
              borderColor:"#000",
              paddingBottom:10
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "48%",
                gap: 10,
              }}
            >
              <View
                style={{
                  padding: 2,
                  backgroundColor: "#fff",
                  overflow: "hidden",
                  width: "30%",
                  position:"relative",
                  justifyContent: "center",
                      alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/UserProfile.png")}
                  style={{ width: 50, height: 50, borderRadius: 30 }}
                />
                <View style={{ paddingLeft: 5,paddingRight: 5,
                      backgroundColor: "#7f7f7f",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      borderRadius:8,
                      bottom:0,
                      position:'absolute',}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color:"#fff",
                    }}
                  >
                    CSK
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: 3,
                }}
              >
                <View style={{}}>
                  <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                    M.S. Dhoni
                  </Text>
                </View>
                <View style={{}}>
                  <Text style={{ fontSize: 12 }}>Played Last Match</Text>
                </View>
              </View>
            </View>
             <View
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{fontWeight:"bold"}}>700</Text>
            </View>
            <View
              style={{
                width: "30%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "70%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Text>80%</Text>
              </View>
              <View style={{ width: "30%" }}>
                <Feather name="plus-square" size={24} color="#35b367" />
              </View>
            </View>
          </Pressable>
          </View>


        </View>
      </ScrollView>
    );

  }
}

export default Bowlerscreen