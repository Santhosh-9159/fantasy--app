  import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
  import React, { useState } from "react";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { Ionicons } from "@expo/vector-icons";
  import { FontAwesome } from "@expo/vector-icons";

  const MatchReminder = ({ visible, onclose }) => {
    return (
      <Modal animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onclose}>
        <Pressable onPress={onclose}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          //backgroundColor:"rgba(0,0,0,0.5)"
        }}
      >
        <View
          style={{
            height: "35%",
            backgroundColor: "#fff",
            width: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "row",
                padding: 5,
              }}
            >
              <Ionicons
                name="close"
                size={30}
                color="#000"
                style={{ opacity: 0 }}
              />
              <View>
                <MaterialCommunityIcons
                  name="bell-circle"
                  size={70}
                  color="#3F58C5"
                />
              </View>
              <Pressable  onPress={onclose}>
                <Ionicons name="close" size={30} color="black" />
              </Pressable>
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "500" }}>
                Match Reminder
              </Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                gap: 10,
              }}
            >
              <View
                style={{
                  width: "90%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  Before 30 Minutes
                </Text>
                <View>
                  <FontAwesome name="toggle-on" size={30} color="#196" />
                </View>
              </View>
              <View
                style={{
                  width: "90%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  Before 20 Minutes
                </Text>
                <View>
                  <FontAwesome name="toggle-on" size={30} color="#196" />
                </View>
              </View>
              <View
                style={{
                  width: "90%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  Before 15 Minutes
                </Text>
                <View>
                  <FontAwesome name="toggle-on" size={30} color="#196" />
                </View>
              </View>
            </View>

            <Pressable
              style={{
                width: "90%",
                padding: 10,
                backgroundColor: "#3F58C5",
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
                Set Reminder
              </Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
      </Modal>
    );
  };

  export default MatchReminder;

  const styles = StyleSheet.create({});
