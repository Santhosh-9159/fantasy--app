import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
  import React, { useState } from "react";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { Ionicons } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";
import { Switch } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


  const MatchReminder = ({ visible, onclose }) => {

    const [Enable , setEnable]  = useState(false); 
    const [twenty , setTwenty]  = useState(false); 
    const [thirty , setThirty]  = useState(false); 

    const toggle = (state)=>{ 
      setEnable(state); 
     
      
    }
    const toggle2 = (state)=>{ 
      setTwenty(state)
    }
    const toggle3 = (state)=>{ 
      setThirty(state)
    }
    return (
      <Modal animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onclose}>
        <Pressable onPress={onclose}
        style={{
          width: wp("100%"),
          height: hp("100%"),
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          // backgroundColor:"rgba(0,0,0,0.5)"
        }}
      >
        <View
          style={{
            height: hp("50%"),
            backgroundColor: "#fff",
            width: wp("100%"),
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <View
            style={{
              width: wp("100%"),
              height: hp("100%"),
              justifyContent: "flex-start",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                width: wp("100%"),
                justifyContent: "space-between",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "row",
                padding: 5,
              }}
            >
              <Ionicons
                name="close"
                size={30}
                color="#000"
                style={{ opacity: 0 }}
              />
              <View>
                <MaterialCommunityIcons
                  name="bell-circle"
                  size={70}
                  color="#3385ff"
                />
              </View>
              <Pressable  onPress={onclose}>
                <Ionicons name="close" size={25} color="black" />
              </Pressable>
            </View>
            <View
              style={{
                width: wp("100%"),
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: hp(3), fontWeight: "500" }}>
                Match Reminder
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: wp("100%"),
                justifyContent: "center",
                alignItems: "center",
                padding: 5,
                gap: 5,
              }}
            >
              <View
                style={{
                  width: wp("85%"),
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontSize: hp(2.5), fontWeight: "500" }}>
                  Before 30 Minutes
                </Text>
                <View>
                <Switch 
                trackColor={{ false: "#c0c0c0", true: "#c0c0c0" }} 
                thumbColor={Enable ? "#3385ff" : "#000"} 
                onValueChange={toggle} 
                value={Enable} 
              />
                </View>
              </View>
              <View
                style={{
                  width: wp("85%"),
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontSize: hp(2.5), fontWeight: "500" }}>
                  Before 20 Minutes
                </Text>
                <View>
                <Switch 
                trackColor={{ false: "#c0c0c0", true: "#c0c0c0" }} 
                thumbColor={twenty ? "#3385ff" : "#000"} 
                onValueChange={toggle2} 
                value={twenty} 
              />
                </View>
              </View>
              <View
                style={{
                  width: wp("85%"),
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontSize: hp(2.5), fontWeight: "500" }}>
                  Before 15 Minutes
                </Text>
                <View>
                <Switch 
                trackColor={{ false: "#c0c0c0", true: "#c0c0c0" }} 
                thumbColor={thirty ? "#3385ff" : "#000"} 
                onValueChange={toggle3} 
                value={thirty} 
              />
                </View>
              </View>
            </View>

            <Pressable
              style={{
                width: wp("85%"),
                padding: 10,
                backgroundColor: "#3385ff",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: hp(2.2), color: "#fff", fontWeight: "bold" }}>
                Set Reminder
              </Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
      </Modal>
    );
  };

  export default MatchReminder;

  const styles = StyleSheet.create({});