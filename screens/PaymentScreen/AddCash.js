import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  Platform,
  UIManager,
  LayoutAnimation,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AddCash = () => {
  const [amount, setAmount] = useState("");
  const [walletDropdown, setWalletDropdown] = useState(false);
  const navigation = useNavigation()
  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
  };
  const toggleDropdown = () => {
    // Animate the layout changes
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setWalletDropdown(!walletDropdown);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View style={{ backgroundColor: "#f5f" }}></View>

      <View
        style={{
          backgroundColor: "#3385ff",
          padding: 20,
          alignItems: "center",
          borderBottomEndRadius: 15,
          borderBottomStartRadius: 15,
        }}
      >
        <View style={{ flexDirection: "row", gap: 5 }}>
          <View>
            <Ionicons name="wallet-outline" size={24} color="#fff" />
          </View>
          <View>
            <Text style={{ color: "#FFFFFF", fontSize: hp(2.4), fontWeight: "700" }}>
              My Balance
            </Text>
          </View>
        </View>
        <Pressable
          onPress={toggleDropdown}
          style={{
            flexDirection: "row",
            gap: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 30,
                fontWeight: "bold",
                marginVertical: 10,
              }}
            >
              ₹100
            </Text>
          </View>

          <View>
            {walletDropdown === true ? (
              <Entypo name="chevron-up" size={24} color="#fff" />
            ) : (
              <Entypo name="chevron-down" size={24} color="#fff" />
            )}
          </View>
        </Pressable>
        {walletDropdown && (
          <View style={{ width: wp("45%") }}>
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  width: wp("45%"),
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#FFFFFF", fontSize: hp(2) }}>
                  Amount unutilised :
                </Text>
                <Text style={{ color: "#FFFFFF", fontSize: hp(2) }}>₹0</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: wp("45%"),
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#FFFFFF", fontSize: hp(2)}}>
                  Winnings :
                </Text>
                <Text style={{ color: "#FFFFFF", fontSize: hp(2) }}>₹0</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#FFFFFF", fontSize: hp(2) }}>
                  Discount :
                </Text>
                <Text style={{ color: "#FFFFFF", fontSize: hp(2) }}>₹ 0</Text>
              </View>
            </View>
          </View>
        )}
      </View>

      <View
        style={{
          backgroundColor: "#F0F0F0",
          padding: 10,
          margin: 15,
          marginVertical: 20,
          alignItems: "center",
          borderRadius: 8,
        }}
      >
        <View
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: wp("90%"),
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: hp(2.7), marginBottom: 10, fontWeight: "600" }}>
            Add cash
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: wp("35%"),
              borderWidth: 2,
              borderColor: "#35b276",
              borderRadius: 5,
              alignItems: "center",
              padding: 5,
            }}
          >
            <View style={{ width: wp("6%") }}>
              <Text style={{ fontSize: hp(3), fontWeight: "400" }}>₹ </Text>
            </View>
            <TextInput
              style={{
                width:wp("6%"),
                fontSize: hp(1.8),
              }}
              value={amount}
              onChangeText={handleAmountChange}
              keyboardType="numeric"
            />
            <View style={{ width: wp("6%") }}>
              <Pressable onPress={() => handleAmountChange("")}>
                <AntDesign name="closecircleo" size={20} color="black" />
              </Pressable>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
            width:wp("88%"),
            marginTop: 10,
            gap: 5,
            paddingTop:10,
            paddingBottom:10
          }}
        >
          <View>
            <Text>Choose amount:</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: wp("89%"),
              justifyContent: "space-around",
            }}
          >
            {["200", "300", "500", "1000"].map((option) => (
              <TouchableOpacity
                key={option}
                style={{
                  width: wp("20%"),
                  backgroundColor: "#FFFFFF",
                  padding: 5,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: "#000",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => handleAmountChange(option)}
              >
                <View style={{ width: wp("4%") }}>
                  <Text style={{ fontSize: hp(2), fontWeight: "400" }}>₹ </Text>
                </View>
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          width: wp("100%"),
          padding: 10,
          position: "absolute",
          bottom: 15,
        }}
      >
        <Pressable
        onPress={()=>navigation.navigate("PAYMENT OPTIONS")}
          style={{
            backgroundColor: "#00A000",
            padding: 10,
            width: wp("95%"),
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: hp(2.5), fontWeight: "bold" }}>
            ADD ₹ {amount}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddCash