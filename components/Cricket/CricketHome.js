import React, { useState, useEffect } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  Platform,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {
  getMatchCountdown,
  getTeam1logo,
  getTeam2logo,
  getTeamPlayers,
  getteam1shortform,
  getteam2shortform,
} from "../../Redux/Slice";
import MatchReminder from "../Model/MatchReminder";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Home() {
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);
  const [countdowns, setCountdowns] = useState({});
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [teamId1, setTeamId1] = useState({});
  const [teamId2, setTeamId2] = useState({});
  const [selectTeams, setSelectTeams] = useState([]);

  useEffect(() => {
    const fetchTeamsAndMatches = async () => {
      try {
        // Fetch teams
        const teamsResponse = await fetch(
          "http://192.168.0.172:5000/api/teams"
        );
        const teamsData = await teamsResponse.json();
        setTeams(teamsData.data);

        // Fetch matches
        const matchesResponse = await fetch(
          "http://192.168.0.172:5000/api/matches"
        );
        const matchesData = await matchesResponse.json();
        setMatches(matchesData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTeamsAndMatches();
  }, []);

  const selectTeamId = async () => {
    console.log("start running selectTeamId");
    console.log(teamId1, "teamId1");
    try {
      const response = await axios.post(
        "http://192.168.0.172:5000/api/getteamplayers",
        {
          team1id: teamId1,
          team2id: teamId2,
        }
      );

      const teamsData = response.data;
      // Assuming setSelectTeams is a state updater function from useState hook
      setSelectTeams(teamsData.data);
      dispatch(getTeamPlayers(teamsData.data));
      console.log(teamsData.data, "filtered team players"); // Logging teamsData.data after updating state
    } catch (error) {
      console.error("Error sending team id data:", error);
    }
  };
  
  useEffect(() => {
    const updateCountdowns = () => {
      const newCountdowns = matches.reduce((acc, match) => {
        const matchTime = new Date(match.dateAndTime).getTime();
        const currentTime = new Date().getTime();
        const timeDifference = matchTime - currentTime;
        const timeAfterStart = currentTime - matchTime;

        if (timeDifference > 0) {
          const hoursDifference = Math.floor(timeDifference / 3600000); // Convert milliseconds to hours
          const minutesDifference = Math.floor(
            (timeDifference % 3600000) / 60000
          ); // Remaining minutes
          const secondsDifference = Math.floor((timeDifference % 60000) / 1000); // Remaining seconds

          if (timeDifference < 3600000) {
            // Less than 1 hour
            acc[
              match._id
            ] = `${minutesDifference}min ${secondsDifference}s left`;
          } else {
            acc[match._id] = `${hoursDifference}h ${minutesDifference}m left`;
          }
        } else if (timeAfterStart < 14400000) {
          // Match started less than 4 hours ago
          acc[match._id] = "Live";
        } else {
          acc[match._id] = "The match has ended";
        }

        return acc;
      }, {});

      setCountdowns(newCountdowns);
    };

    updateCountdowns();
    const intervalId = setInterval(updateCountdowns, 1000);

    return () => clearInterval(intervalId);
  }, [matches]);

  const { width } = Dimensions.get("window");
  const height = (width * 5) / 50;

  return (
    <ScrollView>
      <View
        style={{
          height,
          width,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          marginLeft: 10,
          padding: 5,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>My Matches</Text>
      </View>
      {matches.map((match, index) => {
        const matchTime = new Date(match.dateAndTime);
        const countdown = countdowns[match._id];
        const team1id = match.team1Id;
        const team2id = match.team2Id;

        // Find teams for the current match
        const team1 = teams.find((team) => team._id === match.team1Id);
        const team2 = teams.find((team) => team._id === match.team2Id);

        if (!team1 || !team2) {
          return null;
        }

        const logoUri1 = match.team1LogoUri;
        const logoUri2 = match.team2LogoUri;

        return (
          <View key={index} style={{ gap: 10, paddingBottom: 20 }}>
            <View
              style={{
                width: wp("100%"),
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pressable
                onPress={() => {
                  selectTeamId();
                  navigation.navigate("ContestScreen");
                  dispatch(getteam1shortform(team1.shortName));
                  dispatch(getteam2shortform(team2.shortName));
                  dispatch(getMatchCountdown(countdown));
                  dispatch(getTeam1logo(logoUri1));
                  dispatch(getTeam2logo(logoUri2));
                  setTeamId1(team1id);
                  setTeamId2(team2id);

                  console.log(team1id, "team no 1");
                  console.log(team2id, "team no 2");
                }}
                style={{
                  borderRadius: 5,
                  overflow: "hidden",
                  width: wp("95%"),
                  backgroundColor: "#fff",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  ...Platform.select({
                    ios: {
                      shadowColor: "red",
                      shadowOpacity: 0.8,
                      shadowRadius: 10,
                      shadowOffset: { width: 20, height: 10 },
                    },
                    android: {
                      elevation: 15,
                    },
                  }),
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: wp("95%"),
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: wp("100%"),
                    }}
                  >
                    <View
                      style={{
                        width: wp("60%"),
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        borderBottomRightRadius: 50,
                        position: "relative",
                      }}
                    >
                      <Image
                        source={require("../../assets/Borderradius.png")}
                        style={{ height: 20, width: 200 }}
                      />
                      <Text
                        style={{
                          fontSize: hp(1.5),
                          padding: 5,
                          color: "#fff",
                          fontWeight: "bold",
                          position: "absolute",
                        }}
                      >
                        INDIAN T20 LEAGUE
                      </Text>
                    </View>
                    <View
                      style={{
                        width: wp("40%"),
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <Ionicons
                        name="megaphone-outline"
                        size={16}
                        color="#19c869"
                      />
                      <Text
                        style={{
                          fontSize: hp(1.5),
                          color: "#19c869",
                          fontWeight: "900",
                        }}
                      >
                        LINEUPS OUT
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      width: wp("100%"),
                      padding: 10,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: wp("25%"),
                        gap: 5,
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          width: wp("25%"),
                          gap: 10,
                        }}
                      >
                        <View style={{ padding: 2 }}>
                          <Image
                            // source={require("../../assets/CSK logo.png")}
                            source={{ uri: logoUri1 }}
                            style={{
                              backgroundColor: "#fff",
                              resizeMode: "contain",
                              width: 60,
                              height: 60,
                              //borderRadius: 50,
                            }}
                          />
                        </View>
                        <View>
                          <Text style={{ fontWeight: "bold" }}>
                            {team1.shortName}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            width: 135,
                            justifyContent: "center",
                          }}
                        >
                          <Text style={{ fontSize: hp(1.5)}} numberOfLines={1}>
                            {team1.name}
                            {/* Chennai super kings */}
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: wp("40%"),
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 5,
                      }}
                    >
                      <View style={{ backgroundColor: "#E7ECFF", padding: 5 }}>
                        <Text
                          style={{
                            fontSize: hp(1.5),
                            color: "red",
                            textAlign: "center",
                            fontWeight: "bold",
                          }}
                        >
                          {countdown}
                        </Text>
                      </View>
                      {countdown !== "Live" &&
                        countdown !== "The match has ended" && (
                          <View>
                            <Text style={{ fontSize: hp(1.5) }}>
                              {new Date(match.dateAndTime).toLocaleTimeString()}
                            </Text>
                          </View>
                        )}
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: wp("35%"),
                        gap: 5,
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          width: wp("35%"),
                          gap: 10,
                        }}
                      >
                        <View>
                          <Text style={{ fontWeight: "bold" }}>
                            {team2.shortName}
                          </Text>
                        </View>

                        <View>
                          <Image
                            //source={require("../../assets/RCB logo.png")}
                            source={{ uri: logoUri2 }}
                            style={{
                              backgroundColor: "#fff",
                              resizeMode: "contain",
                              width: 60,
                              height: 60,
                              //borderRadius: 50,
                            }}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          width: wp("100%"),
                        }}
                      >
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            width: 135,
                            justifyContent: "center",
                          }}
                        >
                          <Text style={{ fontSize: hp(1.5) }} numberOfLines={1}>
                            {team2.name}
                            {/* Chennai super kings */}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      padding: 5,
                      width: wp("95%"),
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTopWidth: 0.5,
                      borderColor: "#cccccc",
                      paddingLeft: 10,
                      paddingRight: 10,
                    }}
                  >
                    <View>
                      <Text style={{ fontWeight: "bold" }}>
                        1 Team 3 Contests
                      </Text>
                    </View>
                    <Pressable
                      onPress={() => setModal(true)}
                      style={{ padding: 1, opacity: 0.5 }}
                    >
                      <MaterialCommunityIcons
                        name="bell-circle"
                        size={27}
                        color="black"
                      />
                    </Pressable>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        );
      })}
      <MatchReminder visible={modal} onclose={() => setModal(false)} />
    </ScrollView>
   
  );
}
