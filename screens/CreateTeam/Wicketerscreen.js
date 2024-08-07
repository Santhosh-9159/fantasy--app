import { Image, Pressable, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  getfinalPlayerSelected,
  getplayerProfileInfo,
} from "../../Redux/Slice";
import { AntDesign } from "@expo/vector-icons";
import { teamsArray } from "../../jsondata/cskjson";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Wicketerscreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const allPlayers = teamsArray.flatMap((team) => team.players);
  const Wicketkeepers = (role) => {
    return allPlayers.filter((player) => player.role === role);
  };

  const findTeamShortForm = (playerId) => {
    for (let team of teamsArray) {
      for (let player of team.players) {
        if (player.id === playerId) {
          return team.team_short_form;
        }
      }
    }
    return "";
  };

  const [selectedPlayers, setSelectedPlayers] = useState({});
  const handlePlayerSelection = (playerId) => {
    setSelectedPlayers((prevState) => ({
      ...prevState,
      [playerId]: !prevState[playerId],
    }));
    dispatch(getfinalPlayerSelected(playerId));
  };

  const selectedPlayer = useSelector(
    (state) => state.tasks.finalPlayerSelected
  );

  return (
    <ScrollView
      style={{ backgroundColor: "#fff", width: wp("100%"), height: hp("100%") }}
    >
      <View style={{ flex: 1, alignItems: "center", gap: 5 }}>
        <View style={{ padding: 5 }}>
          <Text style={{ fontSize: hp(1.7) }}>Pick 1-8 All-rounder</Text>
        </View>
        <View
          style={{
            backgroundColor: "#dee4fa",
            width: wp("100%"),
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: wp("100%"),
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: wp("50%"),
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: hp(1.7) }}>Player</Text>
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
              <Text style={{ fontSize: hp(1.7) }}>Selected  By %</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, alignItems: "center", gap: 10 }}>
          {Wicketkeepers("Wicketkeeper").map((player, id) => (
            <Pressable
              key={id}
              onPress={() => {
                handlePlayerSelection(player.id), console.log(player);
              }}
              style={{
                flexDirection: "row",
                width: wp("100%"),
                justifyContent: "center",
                alignItems: "center",
                borderBottomWidth: 0.5,
                borderColor: "#ababab",
                paddingBottom: 10,
                backgroundColor: selectedPlayer.includes(player.id)
                  ? "#ccd6ff"
                  : "#fff",
                padding: 3,
              }}
            >
              <View style={{ flexDirection: "row", width: wp("48%"), gap: 10 }}>
                <Pressable
                  onPress={() => {
                    navigation.navigate("PlayerInfo");
                    dispatch(getplayerProfileInfo(player));
                  }}
                  style={{
                    padding: 2,
                    backgroundColor: "#fff",
                    overflow: "hidden",
                    width: wp("15%"),
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: player.image }}
                    style={{ width: 50, height: 50, borderRadius: 30 }}
                  />
                  <View
                    style={{
                      paddingLeft: 5,
                      paddingRight: 5,
                      backgroundColor: "#7f7f7f",
                      justifyContent: "center",
                      alignItems: "center",
                      width: wp("15%"),
                      borderRadius: 8,
                      position: "absolute",
                      bottom: 0,
                    }}
                  >
                    <Text style={{ fontSize: hp(1.7), color: "#fff" }}>
                      {findTeamShortForm(player.id)}
                    </Text>
                  </View>
                </Pressable>
                <View
                  style={{ width:  wp("70%"), justifyContent: "center", gap: 3 }}
                >
                  <Text style={{ fontSize: hp(1.8), fontWeight: "bold" }}>
                    {player.name}
                  </Text>
                  <Text style={{ fontSize: hp(1.8) }}>Played Last Match</Text>
                </View>
              </View>
              <View
                style={{
                  width:  wp("20%"),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: hp(1.8) }}>{player.points}</Text>
              </View>
              <View
                style={{
                  width: wp("25%"),
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View style={{ width: wp("17%"), justifyContent: "center", justifyContent:'space-evenly' }}>
                  <Text style={{ fontWeight: "bold" ,fontSize: hp(1.8)}}>80%</Text>
                </View>
                {selectedPlayer.includes(player.id) ? (
                  <AntDesign name="minussquareo" size={24} color="#ffae36" />
                ) : (
                  <Feather name="plus-square" size={24} color="#35b367" />
                )}
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Wicketerscreen;
