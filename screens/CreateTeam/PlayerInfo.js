import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Navigation from "../../Navigation";

const PlayerInfo = () => {

  const navigation = useNavigation();


  return (
    <ScrollView>
      <LinearGradient
        style={{
          height: 250,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        colors={["#3b53bd", "#243373", "#192451", "#020202"]}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "85%",
            width: "100%",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "100%",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                padding: 10,
              }}
            >
              <View>
                <Text
                  style={{ fontWeight: "700", fontSize: 16, color: "#fff" }}
                >
                  Player Info
                </Text>
              </View>
              <Pressable onPress={()=>navigation.goBack()}>
                <Ionicons name="close" size={24} color="#fff" />
              </Pressable>
            </View>

            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "35%",
                  padding: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../assets/MS Dhoni.png")}
                  style={{ width: 100, height: 150 }}
                />
              </View>
              <View
                style={{
                  width: "65%",
                  display: "flex",
                  gap: 3,
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  height: "70%",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 18,paddingLeft:8,color:"#fff" }}>
                  M S DHONI
                </Text>
                <Text
                  style={{ fontWeight: "600", fontSize: 14, color: "#cecece",paddingLeft:8 }}
                >
                  wicketkeeper, Right hand Batter
                </Text>
                <View style={{ display: "flex", flexDirection: "row", gap: 5,paddingLeft:8 }}>
                  <View>
                    <Text
                      style={{ fontWeight: "600", fontSize: 14, color: "#fff" }}
                    >
                      Nationality :{" "}
                      <Text
                        style={{
                          fontWeight: "500",
                          fontSize: 14,
                          color: "#cecece",
                        }}
                      >
                        India
                      </Text>
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{ fontWeight: "600", fontSize: 14, color: "#fff" }}
                    >
                      Born :{" "}
                      <Text
                        style={{
                          fontWeight: "500",
                          fontSize: 14,
                          color: "#cecece",
                        }}
                      >
                        July 7, 1981
                      </Text>
                    </Text>
                  </View>
                </View>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
                  <View>
                    <Entypo name="dot-single" size={24} color="#ff8c00" />
                  </View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "#ff8c00",
                    }}
                  >
                    Played Last Match
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default PlayerInfo;

const styles = StyleSheet.create({});
