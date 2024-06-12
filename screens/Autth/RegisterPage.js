import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import CheckBox from "react-native-check-box";

const RegisterPage = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);

  return (
    <LinearGradient
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        position: "relative",
      }}
      colors={["#3b53bd", "#243373", "#192451", "#020202"]}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          zIndex: 1000,
          position: "absolute",
          top: 0,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            width: "100%",
            height: 100,
            padding: 20,
          }}
        >
          <View style={{ width: "30%" }}>
            <Pressable onPress={() => navigation.goBack()} style={styles.back}>
              <Ionicons name="arrow-back" size={25} color="#fff" />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,

            width: "90%",
          }}
        >
          <View
            style={{
              padding: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Image
              source={require("../../assets/RegisterPage.png")}
              style={{ width: 200, height: 160 }}
            />
            <Text style={{ fontSize: 25, color: "#fff", fontWeight: "bold" }}>
              Hi! Register and Start Winning
            </Text>
          </View>
          <View>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: 10,
                  paddingLeft: 13,
                }}
              >
                <View>
                  <Text style={{ color: "#fff", fontSize: 16 }}>Name</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    borderBottomWidth: 2,
                    borderColor: "#fff ",
                    gap: 10,
                    paddingLeft: 13,
                  }}
                >
                  <FontAwesome5 name="user" size={18} color="#fff" />
                  <TextInput style={{ width: "100%", color: "#fff" }} />
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: 10,
                  paddingLeft: 13,
                }}
              >
                <View>
                  <Text style={{ color: "#fff", fontSize: 16 }}>
                    Mobile Number
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    borderBottomWidth: 2,
                    borderColor: "#fff ",
                    gap: 10,
                    paddingLeft: 13,
                  }}
                >
                  <AntDesign name="mobile1" size={20} color="#fff" />
                  <TextInput
                    style={{ width: "100%", color: "#fff" }}
                    keyboardType="number-pad"
                  />
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  gap: 10,
                  paddingLeft: 13,
                }}
              >
                <View>
                  <Text style={{ color: "#fff", fontSize: 16 }}>Email</Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    borderBottomWidth: 2,
                    borderColor: "#fff ",
                    gap: 10,
                    paddingLeft: 13,
                  }}
                >
                  <Feather name="mail" size={20} color="#fff" />
                  <TextInput style={{ width: "100%", color: "#fff" }} />
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 10,
              paddingLeft: 13,
              backgroundColor: "#505b8d",
              padding: 15,
              borderRadius: 5,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 16 }}>
                Have an Invite code?
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                borderBottomWidth: 2,
                borderColor: "#fff ",
                gap: 10,
                paddingLeft: 13,
              }}
            >
              <Feather name="gift" size={24} color="#fff" />
              <TextInput
                style={{ width: "100%", color: "#fff", fontSize: 18 }}
                placeholder="Invite code"
                placeholderTextColor="#ababab"
              />
            </View>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "95%",
              paddingRight: 0,
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <View>
              {isSelected == true ? (
                <Pressable onPress={() => setSelection(false)}>
                  <Ionicons name="checkbox" size={24} color="#fff" />
                </Pressable>
              ) : (
                <CheckBox
                  onClick={() => setSelection(true)}
                  checked={isSelected}
                  checkBoxColor="#fff"
                  uncheckedCheckBoxColor="#ababab"
                  containerStyle={styles.checkboxContainer}
                />
              )}
            </View>
            <View>
              <Text style={{ color: "#fff" }}>
                I hereby confirm to be 18 year old and provide my acceptance to
                Terms & Conditions and Privacy Policy of Impact11
              </Text>
            </View>
          </View>


{isSelected == true ? <Pressable
            onPress={() => navigation.navigate("NameRegister")}
            style={{
              width: "100%",
              padding: 10,
              backgroundColor: "#3757E2",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <View style={{}}>
              <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 16 }}>
                CONTINUE
              </Text>
            </View>
          </Pressable>: <Pressable
            onPress={() => navigation.navigate("NameRegister")}
            style={{
              width: "100%",
              padding: 10,
              backgroundColor: "#ababab",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <View style={{}}>
              <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 16 }}>
                CONTINUE
              </Text>
            </View>
          </Pressable> }
          

          <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Text style={{ color: "#fff" }}>Already Have an account?</Text>
            <Pressable onPress={() => navigation.navigate("login")}>
              <Text style={{ color: "#fff" }}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: "center",
    color: "#fff",
  },
});
