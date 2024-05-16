import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const LoginWithEmail = () => {
  const navigation = useNavigation();
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
              Email
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
              placeholder="Email Address"
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
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Pressable onPress={() => navigation.navigate("login")}>
                <Text
                  style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}
                >
                  Login With Mobile Number
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginWithEmail;

const styles = StyleSheet.create({});
