import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { resetFinalPlayerSelected } from "../../Redux/Slice";
import { useNavigation } from "@react-navigation/native";

const DiscardTeam = ({ visible, onclose }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handleResetSelection = () => {
    dispatch(resetFinalPlayerSelected());
    navigation.navigate("MYTeam");
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onclose}
    >
      <Pressable
        onPress={onclose}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ebebeb",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
        >
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 10,
            }}
          >
            <View style={{ width: "100%" }}>
              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0.04,
                  position: "relative",
                }}
              >
                <Image
                  source={require("../../assets/Logo Final-Black.png")}
                  style={{ width: 270, height: 120 }}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={{ fontWeight: "500", fontSize: 18 }}>
                    Go Back?
                  </Text>
                </View>
                <View>
                  <Image
                    source={require("../../assets/warningimg.png")}
                    style={{ width: 70, height: 70 }}
                  />
                </View>
                <View>
                  <Text style={{ fontSize: 16 }}>
                    The Team will not be saved!
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Pressable
                onPress={handleResetSelection}
                style={{
                  width: "50%",
                  backgroundColor: "green",
                  padding: 8,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontWeight: "500", fontSize: 18, color: "#fff" }}
                >
                  Discard Team
                </Text>
              </Pressable>
              <Pressable
                onPress={onclose}
                style={{
                  width: "50%",
                  backgroundColor: "#fff",
                  padding: 7,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#000",
                }}
              >
                <Text
                  style={{ fontWeight: "500", fontSize: 18, color: "#000" }}
                >
                  Continue Editing
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

export default DiscardTeam;

const styles = StyleSheet.create({});
