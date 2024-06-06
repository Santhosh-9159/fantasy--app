import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons, AntDesign, Feather } from "@expo/vector-icons";

const Leaderboard = () => {
  return (
    <View
      style={{
        padding: 5,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "#fff",
        gap: 15,
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 5,
          width: "90%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "50%",
            gap: 5,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View>
            <Feather name="download" size={24} color="black" />
          </View>
          <View>
            <Text>Download all teams</Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "50%",
            gap: 5,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <View>
            <Text>Compare</Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="select-compare"
              size={24}
              color="black"
            />
          </View>
        </View>
      </View>
      <View
        style={{
          padding: 10,
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: 2,
            borderColor: "#d9d9d9",
            paddingBottom: 6,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              gap: 6,
              paddingLeft: 10,
              width: "40%",
              backgroundColor: "#fff",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Shivam Dube</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <MaterialCommunityIcons
                name="party-popper"
                size={24}
                color="green"
              />
              <Text style={{ color: "green", fontSize: 12 }}>
                In Wining zone
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              width: "20%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#d9d9d9",
                height: 20,
                width: 25,
                borderRadius: 7,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>T1</Text>
            </View>
            <View>
              <Text>309</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              paddingRight: 10,
              justifyContent: "flex-end",
              alignItems: "center",
              width: "40%",
            }}
          >
            <AntDesign name="caretup" size={14} color="green" />
            <Text>#1</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            alignItems: "center",
            borderBottomWidth: 2,
            borderColor: "#d9d9d9",
            paddingBottom: 6,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              gap: 6,
              paddingLeft: 10,
              width: "40%",
              backgroundColor: "#fff",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Shivam Dube</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <MaterialCommunityIcons
                name="party-popper"
                size={24}
                color="green"
              />
              <Text style={{ color: "green", fontSize: 12 }}>
                In Wining zone
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              width: "20%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#d9d9d9",
                height: 20,
                width: 25,
                borderRadius: 7,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>T1</Text>
            </View>
            <View>
              <Text>309</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              paddingRight: 10,
              justifyContent: "flex-end",
              alignItems: "center",
              width: "40%",
            }}
          >
            <AntDesign name="caretdown" size={14} color="red" />
            <Text>#2</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            alignItems: "center",
            borderBottomWidth: 2,
            borderColor: "#d9d9d9",
            paddingBottom: 6,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              gap: 6,
              paddingLeft: 10,
              width: "40%",
              backgroundColor: "#fff",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Shivam Dube</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <MaterialCommunityIcons
                name="party-popper"
                size={24}
                color="green"
              />
              <Text style={{ color: "green", fontSize: 12 }}>
                In Wining zone
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              width: "20%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#d9d9d9",
                height: 20,
                width: 25,
                borderRadius: 7,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>T1</Text>
            </View>
            <View>
              <Text>309</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              paddingRight: 10,
              justifyContent: "flex-end",
              alignItems: "center",
              width: "40%",
            }}
          >
            <Text>-</Text>
            <Text>#3</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            alignItems: "center",
            borderBottomWidth: 2,
            borderColor: "#d9d9d9",
            paddingBottom: 6,
            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              gap: 6,
              paddingLeft: 10,
              width: "40%",
              backgroundColor: "#fff",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Shivam Dube</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              width: "20%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#d9d9d9",
                height: 20,
                width: 25,
                borderRadius: 7,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>T1</Text>
            </View>
            <View>
              <Text>309</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 5,
              paddingRight: 10,
              justifyContent: "flex-end",
              alignItems: "center",
              width: "40%",
            }}
          >
            <View>
              <AntDesign name="caretdown" size={14} color="red" />
            </View>
            <Text>##28,00,000</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Leaderboard;

const styles = StyleSheet.create({});