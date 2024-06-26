import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const All = () => {
  return (
    <ScrollView>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#CCCCCC",
          padding: 10,
        }}
      >
        <View style={{ width: "96%", flexDirection: "row" }}>
          <View style={{ width: "25%" }}>
            <View>
              <Image
                source={require("../../assets/Discount.png")}
                style={{ height: 55, width: 55 }}
              />
            </View>
          </View>
          <View style={{ width: "75%", flexDirection: "column", gap: 5 }}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>
                You’ve got 10% Discount
              </Text>
              <Text style={{ color: "#4D4D4D" }}>10 hours ago</Text>
            </View>
            <View>
              <Text style={{ fontSize: 13 }}>
                Congratulation Shivam, you discount and join your Favorite
                contests
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#CCCCCC",
          padding: 10,
        }}
      >
        <View style={{ width: "96%", flexDirection: "row" }}>
          <View style={{ width: "25%" }}>
            <View>
              <Image
                source={require("../../assets/LevelUp.png")}
                style={{ height: 55, width: 55 }}
              />
            </View>
          </View>
          <View style={{ width: "75%", flexDirection: "column", gap: 5 }}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>You’ve Leveled Up</Text>
              <Text style={{ color: "#4D4D4D" }}>10 hours ago</Text>
            </View>
            <View>
              <Text style={{ fontSize: 13 }}>
                You showed your skills, You’ve leveled up from Silver to Gold
                tier.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#CCCCCC",
          padding: 10,
        }}
      >
        <View style={{ width: "96%", flexDirection: "row" }}>
          <View style={{ width: "25%" }}>
            <View>
              <Image
                source={require("../../assets/Deposit.png")}
                style={{ height: 55, width: 55 }}
              />
            </View>
          </View>
          <View style={{ width: "75%", flexDirection: "column", gap: 5 }}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>Deposit Successfull</Text>
              <Text style={{ color: "#4D4D4D" }}>10 hours ago</Text>
            </View>
            <View>
              <Text style={{ fontSize: 13 }}>
                Hi Shivam, Your deposit of ₹100 has been successfull
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#CCCCCC",
          padding: 10,
        }}
      >
        <View style={{ width: "96%", flexDirection: "row" }}>
          <View style={{ width: "25%" }}>
            <View>
              <Image
                source={require("../../assets/Winnings.png")}
                style={{ height: 55, width: 55 }}
              />
            </View>
          </View>
          <View style={{ width: "75%", flexDirection: "column", gap: 5 }}>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>woohoo! You won ₹1000</Text>
              <Text style={{ color: "#4D4D4D" }}>10 hours ago</Text>
            </View>
            <View>
              <Text style={{ fontSize: 13 }}>
                You won ₹1000 is last series, Join more contest and continue
                winning more.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default All;

const styles = StyleSheet.create({});
