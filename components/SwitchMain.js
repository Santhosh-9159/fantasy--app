import React, { useState } from "react";

import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { useSport } from "./SportContext";



const SwitchMain = () => {
  const { setToggle,Toggle } = useSport();


  const CustomSwitch = ({ selectionMode, selectionColor }) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);
    const [getRoundCorner, setRoundCorner] = useState(true);

   
    const Fantacy = () =>{
      setToggle(1);
     
    }
    const Prediction = () =>{
      setToggle(2);
    }

   

    return (
      <View>
        <View
          style={{
            height: 44,
            width: "90%",
            backgroundColor: "white",
            borderRadius: 25,
            borderWidth: 2,
            borderColor: "#d9d9d9",
            flexDirection: "row",
            justifyContent: "center",
            padding: 2,
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => Fantacy()}
            style={{
              flex: 1,

              backgroundColor: getSelectionMode == 1 ? selectionColor : "white",
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: getSelectionMode == 1 ? "white" : "#000",
                fontWeight:"bold",
                fontSize:18
              }}
            >
              FANTASY
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            TouchableOpacity
            activeOpacity={1}
            onPress={() => Prediction()}
            style={{
              flex: 1,
              backgroundColor: getSelectionMode == 2 ? "#000" : "white",
              borderRadius: getRoundCorner ? 25 : 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: getSelectionMode == 2 ? "white" : "#000",
                fontWeight:"bold",
                fontSize:18
              }}
            >
              PREDICTION
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ alignItems: "center" }}>
        <CustomSwitch
          selectionMode={Toggle}
       
          selectionColor={"#3385ff"}
        />
      </View>
    </View>
  );
};

export default SwitchMain;