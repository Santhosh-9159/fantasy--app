import {
  Image,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ReferalInstruction from "../../components/Model/ReferalInstruction";
const ReferAndEarn = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const url = "https://www.whatsapp.com/";
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("shared with activity type of: ", result.activityType);
        } else {
          console.log("shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("dismissedAction");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <View
        style={{
          height: "73%",
          backgroundColor: "#3385ff",

          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
          borderBottomEndRadius: 15,
          borderBottomStartRadius: 15,
           
        }}
      >
        <View
          style={{
            width: "100%",
            height: "15%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",         

          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "85%",
            }}
          >
          <Pressable onPress={() => setModalVisible(true)}>
          <AntDesign name="questioncircleo" size={24} color="#fff" />
        </Pressable>
        <ReferalInstruction visible={modalVisible} onClose={() => setModalVisible(false)} />  
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "88%",
          }}
        >
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 17, color: "#fff" }}>
                Invite Friends & Earn
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 30, color: "#fff" }}>
                ₹500
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 17,
                  color: "#fff",
                  paddingTop: 10,
                }}
              >
                /Friends
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              gap: 10,
              alignItems:"center"
            }}
          >
            <Image
              source={require("../../assets/Refer&Earn.png")}
              resizeMode="cover"
              style={{ width: 300, height: 300 }}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-evenly",
              paddingBottom: 10,
              padding:10
            }}
          >
            <Pressable
              style={{
                padding: 10,
                backgroundColor: "#25D366",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                borderRadius: 5,
                width: "40%",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name="logo-whatsapp"
                size={24}
                color="#fff"
                style={{ fontWeight: "bold" }}
              />
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                INVITE NOW
              </Text>
            </Pressable>
            <View>
              <Pressable
                onPress={onShare}
                style={{
                  padding: 10,
                  backgroundColor: "#D4D4D4",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  borderRadius: 5,
                }}
              >
                <Ionicons name="share-social-outline" size={24} color="black" />
                <Text>OTHER OPTIONS</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "27%",
          justifyContent: "space-around",
          backgroundColor: "#fff",
          padding: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>HOW IT WORKS</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "25%",
              justifyContent: "center",
              gap: 10,
              alignItems:"center"
            }}
          >
            <Image
              source={require("../../assets/Hand Shake.jpg")}
              style={{ width: 70, height: 70 }}
            />
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  fontSize: 12,
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Invite your friends
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "25%",
              justifyContent: "center",
              gap: 10,
              alignItems:"center"
            }}
          >
            <Image
              source={require("../../assets/Friends Play.jpg")}
              style={{ width: 70, height: 70 }}
            />
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  fontSize: 12,
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Friends join and play
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "25%",
              justifyContent: "center",
              gap: 10,
              alignItems:"center"
            }}
          >
            <Image
              source={require("../../assets/cash wallet.png")}
              style={{ width: 70, height: 70 }}
            />
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  fontSize: 12,
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                You earn Rewards
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReferAndEarn;

const styles = StyleSheet.create({});
