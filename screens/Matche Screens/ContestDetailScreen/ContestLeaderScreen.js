import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const ContestLeaderScreen = () => {
  return (
    <ScrollView>
      <View
        style={{
          gap: 20,
          padding: 10,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          width: "100%",
          flex: 1,
        }}
      >
        <View style={{}}>
          <Text>All Teams(5,49,108)</Text>
        </View>




        <View 
        style={{gap:5}}
        >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            borderBottomWidth: 2,
            borderColor:"#d9d9d9",
            paddingBottom:10,

          }}
        >
          <View style={{backgroundColor: "#fff",borderRadius: 20,overflow:"hidden"}}>
            <Image
              source={require("../../../assets/UserProfile.png")}
              style={{ width: 35, height: 35,borderRadius: 20,overflow:"hidden"}}
            />
          </View>
          <View>
            <Text>Super Kings </Text>
          </View>
          <View
            style={{ padding: 2, borderRadius: 5, backgroundColor: "#ebebeb" }}
          >
            <Text style={{ fontSize: 10 }}>T1</Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            borderBottomWidth: 2,
            borderColor:"#d9d9d9",
            paddingBottom:10,
            
          }}
        >
        <View style={{backgroundColor: "#fff",borderRadius: 20,overflow:"hidden"}}>
        <Image
          source={require("../../../assets/UserProfile.png")}
          style={{ width: 35, height: 35,borderRadius: 20,overflow:"hidden"}}
        />
      </View>
          <View>
            <Text>Super Kings </Text>
          </View>
          <View
            style={{ padding: 2, borderRadius: 5, backgroundColor: "#ebebeb" }}
          >
            <Text style={{ fontSize: 10 }}>T1</Text>
          </View>
        </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ContestLeaderScreen;

const styles = StyleSheet.create({});
