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
import * as Clipboard from "expo-clipboard";

import { Ionicons, FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ReferalInstruction from "../../components/Model/ReferalInstruction";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ReferAndEarn = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const url = "https://www.whatsapp.com/";
  const code = "123QWER";
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

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(code);
  };
  return (
    <View>
      <ScrollView>
      <View
        style={{
          height: hp("80%"),
          backgroundColor: "#3385ff",

          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          width: wp("100%"),
          borderBottomEndRadius: 15,
          borderBottomStartRadius: 15,
        }}
      >
        <View
          style={{
            width: wp("100%"),
            height: hp("15%"),
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
              width: wp("85%"),
            }}
          >
            <Pressable onPress={() => setModalVisible(true)}>
              <AntDesign name="questioncircleo" size={24} color="#fff" />
            </Pressable>
            <ReferalInstruction
              visible={modalVisible}
              onClose={() => setModalVisible(false)}
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: wp("100%"),
            height: hp(72),
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
              <Text style={{ fontWeight: "500", fontSize: hp(2.8), color: "#fff" }}>
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
              <Text style={{ fontWeight: "bold", fontSize: hp(4.8), color: "#fff" }}>
                ₹500
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: hp(2),
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
              width: wp("100%"),
              justifyContent: "center",
              gap: 10, 
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/Refer&Earn.png")}
              resizeMode="cover"
              style={{ width: wp(70), height:hp(35) }}
            />
            <Pressable style={{ flexDirection: "column", gap: 5, }}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                YOUR REFFERAL CODE :
              </Text>
              <Pressable
                onPress={() => {
                  copyToClipboard();
                }}
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  backgroundColor: "#C8D2FF",
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>{code}</Text>

                <FontAwesome6
                  name="copy"
                  size={24}
                  color="black"
                  style={{ opacity: 0.9 }}
                />
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: wp("100%"),
              justifyContent: "space-evenly",
              // paddingBottom: 10,
              padding: 10,
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
                width: wp("40%"),
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
          width: wp("100%"),
          height: hp("27%"),
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
          <Text style={{ fontSize: hp(1.8), fontWeight: "800"}}>HOW IT WORKS</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: wp("100%"),
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("25%"),
              justifyContent: "center",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/Hand Shake.jpg")}
              style={{ width: 70, height: 70 }}
            />
            <View style={{ width: wp("100%") }}>
              <Text
                style={{
                  fontSize: hp(1.7),
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
              width: wp("25%"),
              justifyContent: "center",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/Friends Play.jpg")}
              style={{ width: 70, height: 70 }}
            />
            <View style={{ width: wp("20%") }}>
              <Text
                style={{
                  fontSize: hp(1.7),
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
              width: wp("25%"),
              justifyContent: "center",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../../assets/cash wallet.png")}
              style={{ width: 70, height: 70 }}
            />
            <View style={{ width: wp("100%") }}>
              <Text
                style={{
                  fontSize: hp(1.7),
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
      </ScrollView>
    </View>
  );
};

export default ReferAndEarn;

const styles = StyleSheet.create({});