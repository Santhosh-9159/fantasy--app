import { Image, Pressable, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  getfinalPlayerSelected,
  getplayerProfileInfo,
} from "../../Redux/Slice";
import base64 from "base-64";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Allrounderscreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getTeams = useSelector((state) => state.tasks.teamPlayers);
  const [teams, setTeams] = useState([]);
  const [playerRole, setPlayerRole] = useState([]);

  console.log(getTeams.length, "getTeams");

  useEffect(() => {
    const fetchPlayerRoleandTeam = async () => {
      try {
        // Fetch player roles
        const playerroleResponse = await fetch(
          "http://192.168.0.143:5000/api/playerrole"
        );
        const playerroleData = await playerroleResponse.json();
        console.log(playerroleData, "playerrole Data");
        setPlayerRole(playerroleData);

        // Fetch teams
        const playerTeamsResponse = await fetch(
          "http://192.168.0.143:5000/api/teams"
        );
        const teamsData = await playerTeamsResponse.json();
        setTeams(teamsData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPlayerRoleandTeam();
  }, []);

  // Function to find the short form for the player's team
  const findTeamShortForm = (playerRoleId) => {
    const team = teams.find((team) => team._id === playerRoleId);
    return team ? team.shortName : "Nil";
  };

  // Function to filter All Rounder players
  const filterAllRounderPlayers = (players) => {
    return players.filter((player) => {
      // Assuming playerRoleId is the correct identifier in player object
      return player.playerRoleId === "6656e6307a97ed40e430f329"; // Replace with your specific ID for All Rounders
    });
  };

  // Utility function to convert binary data to Base64
  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return base64.encode(binary);
  };

  return (
    <ScrollView
      style={{ backgroundColor: "#fff", width: wp("100%"), height: hp("100%")  }}
    >
      <View style={{ flex: 1, alignItems: "center", gap: 5 }}>
        <View style={{ padding: 5 }}>
          <Text style={{ fontSize: hp(1.7)  }}>Pick 1-8 All-rounder</Text>
        </View>
        <View
          style={{
            backgroundColor: "#dee4fa",
            width:  wp("100%"),
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width:  wp("100%"),
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width:  wp("50%"),
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize:  hp(1.7) }}>Player</Text>
            </View>
            <View
              style={{
                width: wp("20%"),
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: hp(1.7) }}>Points</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: wp("40%"),
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize:hp(1.7) }}>Selected By %</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{ flex: 1, alignItems: "center", gap: 10 }}>
            {filterAllRounderPlayers(getTeams).map((player, id) => {
              // Convert binary data to Base64 string
              const base64Image = arrayBufferToBase64(player.playerImage);
              const imageUrl = `data:image/jpeg;base64,${base64Image}`;
              console.log(player.playerImage, "playerImage fbdfbd");

              return (
                <Pressable
                  key={id}
                  style={{
                    flexDirection: "row",
                    width:  wp("100%"),
                    justifyContent: "center",
                    alignItems: "center",
                    borderBottomWidth: 0.5,
                    borderColor: "#ababab",
                    paddingBottom: 10,
                    backgroundColor: "#f7f7f7",
                    padding: 3,
                  }}
                >
                  <View style={{ flexDirection: "row", width: wp("48%"), gap: 10 }}>
                    <Pressable
                      onPress={() => {
                        // navigation.navigate("PlayerInfo");
                        // dispatch(getplayerProfileInfo(player));
                      }}
                      style={{
                        padding: 2,
                        backgroundColor: "#f27",
                        overflow: "hidden",
                        width: wp("15%"),
                        position: "relative",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={{ uri: imageUrl }}
                        style={{ width: 50, height: 50, borderRadius: 30 }}
                      />
                      <View
                        style={{
                          paddingLeft: 5,
                          paddingRight: 5,
                          backgroundColor: "#7f7f7f",
                          justifyContent: "center",
                          alignItems: "center",
                          width:  wp("15%"),
                          borderRadius: 8,
                          position: "absolute",
                          bottom: 0,
                        }}
                      >
                        <Text style={{ fontSize:  hp(1.7), color: "#fff" }}>
                          {findTeamShortForm(player.teamId)}
                        </Text>
                      </View>
                    </Pressable>
                    <View
                      style={{ width: wp("70%"), justifyContent: "center", gap: 3 }}
                    >
                      <Text style={{ fontSize: hp(1.8), fontWeight: "bold" }}>
                        {player.name}
                      </Text>
                      <Text style={{ fontSize: hp(1.8) }}>Played Last Match</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      width: wp("20%"),
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ fontWeight: "bold",fontSize: hp(1.8) }}>100</Text>
                  </View>
                  <View
                    style={{
                      width: wp("25%"),
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ width: wp("17%"), justifyContent: "center" }}>
                      <Text style={{ fontWeight: "bold",fontSize: hp(1.8) }}>80%</Text>
                    </View>
                    <AntDesign name="minussquareo" size={24} color="#ffae36" />
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Allrounderscreen;
