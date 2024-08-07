import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Pressable,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { showMessage } from "react-native-flash-message";

const OtpScreen = ({ route }) => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputs = useRef([]);
  const { email } = route.params;

  const focusNextField = (index, value) => {
    if (index < otp.length - 1 && value) {
      inputs.current[index + 1].focus();
    }
    if (index === otp.length - 1) {
      inputs.current[index].blur();
    }
    const otpArray = [...otp];
    otpArray[index] = value;
    setOtp(otpArray);
  };

  const verifyOtp = async () => {
    try {
      const otpString = otp.join("");
      const response = await axios.post(
        "http://192.168.0.172:5000/auth/verify-Otp",
        { identifier: email, otp: otpString }
      );
      const { token } = response.data;
      console.log(token, "token");
      await AsyncStorage.setItem("userToken", token);
      await AsyncStorage.setItem("email", email);

      showMessage({
        message: "OTP Verified Successfully ",
        // description: "OTP has been sent to your email. Please check your email",
        icon: (props) => (
          <Image source={require("../../assets/Logo.png")} {...props} />
        ),
        type: "success",
      });
      navigation.navigate("NameRegister");
    } catch (error) {
      console.error("Error verifying OTP:", error);
      showMessage({
        message: "Verification Failed",
        description: "Invalid OTP. Please try again.",
        icon: (props) => (
          <Image source={require("../../assets/Logo.png")} {...props} />
        ),
        type: "danger",
      });
    }
  };

  const checkLoginStatus = async () => {
    const token = await AsyncStorage.getItem("userToken");
    if (token) {
      navigation.navigate("NameRegister");
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const resendOtp = async () => {
    try {
      await axios.post("http://192.168.0.172:5000/auth/resend-otp", {
        identifier: email,
      });
      Alert.alert("OTP Resent", "A new OTP has been sent to your email.");
    } catch (error) {
      console.error("Error resending OTP:", error);
      Alert.alert(
        "Error",
        "An error occurred while resending the OTP. Please try again later."
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.otpInputContainer}>
        {otp.map((data, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            textAlign="center"
            maxLength={1}
            ref={(ref) => (inputs.current[index] = ref)}
            onChangeText={(value) => focusNextField(index, value)}
            value={data}
          />
        ))}
      </View>
      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Didn't receive the OTP?</Text>
        <Pressable onPress={resendOtp}>
          <Text style={styles.resendButton}>RESEND OTP</Text>
        </Pressable>
      </View>
      <Pressable onPress={verifyOtp} style={styles.button}>
        <Text style={styles.buttonText}>LET'S PLAY</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingTop: 30,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  otpInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  otpInput: {
    width: 40,
    height: 40,
    margin: 5,
    borderWidth: 1,
    borderColor: "#000",
    opacity: 0.5,
    fontSize: 18,
    borderRadius: 5,
  },
  resendContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  resendText: {
    opacity: 0.6,
  },
  resendButton: {
    fontWeight: "bold",
    marginLeft: 5,
  },
  button: {
    padding: 10,
    width: "90%",
    backgroundColor: "#3385ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default OtpScreen;
