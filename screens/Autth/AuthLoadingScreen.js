import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { LinearProgress } from "@rneui/themed";

const AuthLoadingScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  const checkAuthStatus = async () => {
    const token = await AsyncStorage.getItem("userToken");
    if (token !== null) {
      navigation.navigate('Tab');
      console.log("Token", token);
    } else {
      navigation.navigate("login");
    }
    setLoading(false);
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);
  return (
    <LinearGradient
      style={{
        height: 100,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",

        justifyContent: "center",
        alignItems: "center",
      }}
      colors={["#3b53bd", "#243373", "#192451", "#020202"]}
    >
      <View
        style={{
          gap: 10,
        }}
      >
        <View
          style={{
            width: "70%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/impact11.png")}
            style={{ width: 350, height: 170 }}
          />
        </View>
        <View>
        <LinearProgress style={{ marginVertical: 10 }} size="large" color="#fff" />
          {/* <ActivityIndicator animating={true} size="large" color={MD2Colors.white} /> */}
        </View>
      </View>
    </LinearGradient>
  );
};

export default AuthLoadingScreen;

const styles = StyleSheet.create({});
