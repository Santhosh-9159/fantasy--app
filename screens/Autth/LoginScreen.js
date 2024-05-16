import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import InviteCode from "../../components/Model/InviteCode";


const LoginScreen = () => {
  const navigation = useNavigation();
  
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <ImageBackground
        source={require("../../assets/Loginbg.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center", width: "100%" }}
      >
        <View style={{ height: "50%" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>
              LOGIN
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              width: "100%",
              paddingLeft: 15,
            }}
          >
            <Text
              style={{
                padding: 10,
                color: "#fff",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              Mobile Number
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 5,
              gap: 25,
              paddingBottom: 15,
            }}
          >
            <TextInput
              placeholder="Mobile Number"
              style={{
                width: "90%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 5,
                borderRadius: 7,
                backgroundColor: "#fff",
                alignItems: "center",
              }}
            />
            <Pressable
              onPress={() => navigation.navigate("OTP")}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                backgroundColor: "#3757E2",
                borderRadius: 7,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
                Continue
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: 5,
              gap: 30,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 20,
              }}
            >
              <Pressable onPress={() => setModalVisible(true)}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}
                >
                  Have a Invite Code
                </Text>
              </Pressable>
              <InviteCode visible={modalVisible} onClose={() => setModalVisible(false)} /> 
              <Text style={{ color: "#fff", fontSize: 20 }}>|</Text>
              <Pressable
                onPress={() => navigation.navigate("Email")}
                style={{
                  display: "flex",
                  flexDirection: "row",

                  alignItems: "center",
                  padding: 5,
                }}
              >
                <Text style={{ fontSize: 14, color: "#fff" }}>
                  Login with Email
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
