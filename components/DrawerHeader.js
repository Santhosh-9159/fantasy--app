import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DrawerHeader = (props) => {
    const navigation = useNavigation()
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        {/* User profile show name and level in star */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: wp("80%"),
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 8,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Image
                source={require("../assets/UserProfile.png")} // Replace with your profile picture URL
                style={styles.profileImage}
              />
            </View>
            <View style={{ gap: 5 }}>
              <Text
                style={{ fontSize:  hp(2.5), fontWeight: "700", color: "#3f58c5" }}
              >
                shivam11s
              </Text>
              <Text style={{ fontSize: hp(2.4), fontWeight: "500" }}>
                Total Impacts: 767
              </Text>
            </View>
          </View>
          <View style={{}}>
            <Image
              source={require("../assets/starplace.png")} // Replace with your profile picture URL
              style={{ height: hp(11), width: wp(16), borderRadius: 7 }}
            />
          </View>
        </View>

        
{/* wallet balace show container */}
        <Pressable style={styles.balanceContainer}
        onPress={()=>navigation.navigate('MyBalance')}
        >
          
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: wp("73%"),
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <Ionicons name="wallet-outline" size={24} color="black" />
              </View>
              <Pressable 
               onPress={()=>navigation.navigate('MyBalance')}
              >
                <Text style={styles.balanceText}>My Balance</Text>
              </Pressable>
            </View>
            <View>
              <Text style={styles.balanceAmount}>₹100</Text>
            </View>
          </View>
          <View></View>
          <View style={styles.balanceButtons}>
            <Pressable
            onPress={()=>navigation.navigate("ADD CASH")}
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#37b469",
                paddingRight: 20,
                paddingLeft: 20,
                padding: 5,
                borderRadius:4

              }}
            >
              <Text style={styles.addCash}>+ ADD CASH</Text>
            </Pressable>
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 8,
                backgroundColor: "#37b469",
                paddingRight: 20,
                paddingLeft: 20,
                padding: 5,
                borderRadius:4
              }}
              onPress={()=>navigation.navigate('WITHDRAW')}
            >
              <View>
                <Image
                  source={require("../assets/Withdraw.png")}
                  style={{ width: 20, height: 20 }}
                />
              </View>
              
                <Pressable  style={styles.withdraw}
                
                >
                <Text style={{color:"#fff"}}>WITHDRAW</Text>
                </Pressable>
              
            </Pressable>
          </View>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Fantasy Point System"
        onPress={() => alert("Fantasy Point System")}
      />
      {/* <DrawerItem label="About us" onPress={() => alert("About us")} /> */}
      <DrawerItem label="More" onPress={()=>navigation.navigate('More')} />
      <Text style={styles.version}>VERSION 1.22.0</Text>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    padding: 10,
    alignItems: "center",
    // backgroundColor: "#eeeeee",
  },
  profileImage: {
    width: wp(19),
    height: hp(11),
    borderRadius: 40,
  },

  balanceContainer: {
    marginTop: 20,
    width: wp("80%"),
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    borderRadius:8,
    elevation:15
  },
  balanceText: {
    fontSize: hp(2.5),
    fontWeight: "500",
  },
  balanceAmount: {
    fontSize: hp(2.7),
    fontWeight: "bold",
    color: "#000",
    marginTop: 5,
  },
  balanceButtons: {
    flexDirection: "row",
    justifyContent:"space-between",
    marginTop: 10,
    width: wp ("74%")
  },
  addCash: {
    marginRight: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  withdraw: {
    color: "#fff",
    fontWeight: "bold",
  },
  version: {
    marginTop: 20,
    textAlign: "center",
    color: "gray",
  },
});

export default DrawerHeader;