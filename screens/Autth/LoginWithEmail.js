import React, { useState, useEffect } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import FlashMessage, { showMessage } from "react-native-flash-message";

const LoginWithEmail = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const sendOtp = async () => {
    try {
      await axios.post("http://192.168.0.119:5000/auth/login/email", { email });
      // Alert.alert("OTP Resent", "OTP has been sent to your email.");
      await showMessage({
        message: "OTP Verification ",
        description: "OTP has been sent to your email. Please check your email",
        icon: props => <Image source={require("../../assets/Logo.png")}   style={{ width: 50, height: 30 }}  {...props} />,
        type: "success",
        duration: 2000,
      });
      console.log(email);
      navigation.navigate("OTP", { email });
    } catch (error) {
      console.error("msg", error);
    }
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
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "90%",
                justifyContent: "center",
                alignItems: "center",
                borderBottomWidth: 1,
                borderColor: "#fff",
                gap: 2,
              }}
            >
              <View>
                <AntDesign name="mail" size={24} color="white" />
              </View>
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor="#ababab"
                placeholder="Email"
                style={{
                  width: "90%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: 5,
                  borderRadius: 7,
                  alignItems: "center",
                  color: "#fff",
                }}
              />
            </View>
            <Pressable
              onPress={sendOtp}
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
              gap: 15,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
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
            <View style={{display:"flex",flexDirection:"row"}}>
              <Text style={styles.footerText}>Don't have an account?</Text><Pressable onPress={() => navigation.navigate("RegisterPage")}>
                <Text style={styles.footerText}>Signup</Text>
              </Pressable>
              </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginWithEmail;

const styles = StyleSheet.create({
  footerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#fff",
  },
});
