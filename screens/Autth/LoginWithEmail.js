import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Image,
  SafeAreaView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import FlashMessage, { showMessage } from "react-native-flash-message";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from "expo-linear-gradient";

const LoginWithEmail = () => {
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const sendOtp = async () => {
    try {
      await axios.post("http://192.168.0.172:5000/auth/login/email", { email });
      // Alert.alert("OTP Resent", "OTP has been sent to your email.");
      await showMessage({
        message: "OTP Verification ",
        description: "OTP has been sent to your email. Please check your email",
        icon: (props) => (
          <Image
            source={require("../../assets/Logo.png")}
            style={{ width: 50, height: 130 }}
            {...props}
          />
        ),
        type: "success",
        duration: 2000,
      });
      console.log(email);
      navigation.navigate("OTP", { email });
    } catch (error) {
      console.error("msger", error);
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    


    <SafeAreaView style={{ flex: 1 }}>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "andriod" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
          colors={["#020202", "#192451", "#243373", "#3b53bd"]}
        >
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "space-between",
            }}
            keyboardShouldPersistTaps="handled"
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: wp("100%"),
                paddingTop: 50,
              }}
            >
              <Image
                source={require("../../assets/Logo Final.png")}
                style={{ width: wp(53), height: hp(15) }}
                resizeMode="contain"
              />
            </View>

            <View style={{ flex: 1, justifyContent: "center", width: wp("100%") }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: wp("100%"),
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 30,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: hp(2), color: "#fff" }}>
                  LOGIN
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  width: wp("100%"),
                  paddingLeft: 15,
                }}
              >
                <Text
                  style={{
                    padding: 10,
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: hp(2),
                  }}
                >
                  Email
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: wp("100%"),
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
                    width: wp("90%"),
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 1,
                    borderColor: "#fff",
                    gap: 2,
                  }}
                >
                  <AntDesign name="mail" size={24} color="white" />
                  <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor="#ababab"
                    placeholder="Email"
                    style={{
                      width: wp("80%"),
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      padding: 5,
                      borderRadius: 7,
                      alignItems: "center",
                      color: "#fff",
                      fontSize: hp(2),
                    }}
                  />
                </View>
                <Pressable
                  onPress={sendOtp}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: wp("90%"),
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                    backgroundColor: "#3757E2",
                    borderRadius: 7,
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: hp(2), color: "#fff" }}>
                    Continue
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: wp("100%"),
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
                    <Text style={{ fontWeight: "bold", fontSize: hp(1.9), color: "#fff" }}>
                      Login With Mobile Number
                    </Text>
                  </Pressable>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={styles.footerText}>Don't have an account?</Text>
                  <Pressable onPress={() => navigation.navigate("RegisterPage")}>
                    <Text style={styles.footerText}>Signup</Text>
                  </Pressable>
                </View>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Image
                source={require("../../assets/Final img.png")}
                style={{ width: wp("100%"), height: hp("36%") }}
                resizeMode="contain"
              />
            </View>
          </ScrollView>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  </SafeAreaView>




  )
};

export default LoginWithEmail;

const styles = StyleSheet.create({
  footerText: {
    fontWeight: "bold",
    fontSize: hp(2),
    color: "#fff",
  },
});



