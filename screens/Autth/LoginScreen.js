import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import InviteCode from "../../components/Model/InviteCode";
import { OTPWidget } from "@msg91comm/sendotp-react-native";


const widgetId = "346543686978353039333132";
const tokenAuth = { authToken:"384577TwCDcUNKMXxm6656eba5P1" };
const LoginScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    OTPWidget.initializeWidget(widgetId, tokenAuth); // Initialize OTP widget
  }, []);

  const sendOtp = async () => {
    try {
      const data = {
        identifier: phone // Use the entered phone number as the identifier
      };
      const response = await OTPWidget.sendOTP(data.identifier); // Send OTP
      console.log(response);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%" }}>
      <ImageBackground
        source={require("../../assets/Loginbg.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center", width: "100%" }}
      >
        <View style={{ height: "50%" }}>
          <View style={styles.header}>
            <Text style={styles.headerText}>LOGIN</Text>
          </View>
          <View style={styles.inputLabelContainer}>
            <Text style={styles.inputLabel}>Mobile Number</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              <AntDesign name="mobile1" size={24} color="white" />
              <TextInput
              keyboardType="numeric"
                placeholder="Mobile Number"
                placeholderTextColor="#ababab"
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
              />
            </View>
            <Pressable style={styles.button} onPress={sendOtp}>
              <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerContent}>
              <Pressable onPress={() => setModalVisible(true)}>
                <Text style={styles.footerText}>Have an Invite Code</Text>
              </Pressable>
              <InviteCode visible={modalVisible} onClose={() => setModalVisible(false)} />
              <Text style={styles.footerSeparator}>|</Text>
              <Pressable onPress={() => navigation.navigate("Email")}>
                <Text style={styles.footerText}>Login with Email</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
  inputLabelContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    paddingLeft: 15,
  },
  inputLabel: {
    padding: 10,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 5,
    gap: 25,
    paddingBottom: 15,
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#fff",
    gap: 2,
  },
  input: {
    width: "90%",
    padding: 5,
    borderRadius: 7,
    color: "#fff",
  },
  button: {
    display: "flex",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#3757E2",
    borderRadius: 7,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#fff",
  },
  footer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    gap: 30,
  },
  footerContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  footerText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#fff",
  },
  footerSeparator: {
    color: "#fff",
    fontSize: 20,
  },
});

export default LoginScreen;
