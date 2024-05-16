import {  Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const ReferalInstruction = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ backgroundColor: "#fff" , display: "flex",
      flexDirection: "column",
      width: "100%",
      justifyContent: "center",}}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text>How it Works?</Text>
          <Pressable onPress={onClose}>
            <AntDesign
              name="close"
              size={20}
              color="black"
              style={{ opacity: 0.5 }}
            />
          </Pressable>
        </View>
        <View style={{ display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        padding:10
    }}>
        <Text>Referral Bonus </Text>
        <View
        style={{ display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: 'center',
        padding:10
        }}
         >
        <Text>

        Join the realm of <Text style={{fontWeight:"bold"}}>Impact11</Text> and uncover a world where every referral brings forth real cash rewards! Our referral program offers you the key to unlock exciting bonuses for every friend you introduce to the exhilarating world of cash gaming.
        </Text>
        </View>
       
        </View>
      </View>
    </Modal>
  );
};

export default ReferalInstruction;

const styles = StyleSheet.create({});
