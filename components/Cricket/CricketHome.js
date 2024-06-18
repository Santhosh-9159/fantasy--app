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
import { getMatchCountdown, getTeam1logo, getTeam2logo, getteam1shortform, getteam2shortform } from "../../Redux/Slice";

export default function Home() {
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);
  const [countdowns, setCountdowns] = useState({});
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTeamsAndMatches = async () => {
      try {
        // Fetch teams
        const teamsResponse = await fetch("http://192.168.0.119:5000/api/teams");
        const teamsData = await teamsResponse.json();
        setTeams(teamsData.data);

        // Fetch matches
        const matchesResponse = await fetch(
          "http://192.168.0.119:5000/api/matches"
        );
        const matchesData = await matchesResponse.json();
        setMatches(matchesData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTeamsAndMatches();
  }, []);

  useEffect(() => {
    const updateCountdowns = () => {
      const newCountdowns = matches.reduce((acc, match) => {
        const matchTime = new Date(match.dateAndTime).getTime();
        const currentTime = new Date().getTime();
        const timeDifference = matchTime - currentTime;

        if (timeDifference > 0) {
          const hoursDifference = Math.floor(timeDifference / 3600000); // Convert milliseconds to hours
          const minutesDifference = Math.floor((timeDifference % 3600000) / 60000); // Remaining minutes
          const secondsDifference = Math.floor((timeDifference % 60000) / 1000); // Remaining seconds

          if (timeDifference <= 7200000) { // Less than or equal to 2 hours
            acc[match._id] = `${hoursDifference * 60 + minutesDifference}min ${secondsDifference}s left`;
          } else {
            acc[match._id] = `${hoursDifference}h ${minutesDifference}m ${secondsDifference}s left`;
          }
        } else {
          acc[match._id] = "The match has started";
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

        // Find teams for the current match
        const team1 = teams.find((team) => team._id === match.teamId1);
        const team2 = teams.find((team) => team._id === match.teamId2);

        if (!team1 || !team2) {
          return null;
        }

        const logoUri1 = match.team1LogoUri;
        const logoUri2 = match.team2LogoUri;

        return (
          <View key={index} style={{ gap: 10, paddingBottom: 20 }}>
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pressable
                onPress={() => {
                  navigation.navigate("ContestScreen");
                  dispatch(getteam1shortform(team1.shortName));
                  dispatch(getteam2shortform(team2.shortName));
                  dispatch(getMatchCountdown(countdown));
                  dispatch(getTeam1logo(logoUri1));
                  dispatch(getTeam2logo(logoUri2));
                }}
                style={{
                  borderRadius: 5,
                  overflow: "hidden",
                  width: "95%",
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
                    width: "100%",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <View
                      style={{
                        width: "60%",
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
                          fontSize: 10,
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
                        width: "40%",
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
                          fontSize: 10,
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
                      width: "100%",
                      padding: 10,
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "35%",
                        gap: 5,
                        // backgroundColor:"#f267"
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
                          gap: 10,
                        }}
                      >
                        <View style={{ padding: 2 }}>
                          
                          <Image
                                    source={require("../../assets/CSK logo.png")}

                            //source={{ uri: logoUri1 }}
                            style={{
                              backgroundColor: "#fff",
                              resizeMode: "contain",
                              width: 60,
                              height: 60,
                              borderRadius: 50,

                            }}
                          />
                        </View>
                        <View>
                          <Text style={{ fontWeight: "bold" }}>
                          {team1.shortName}

                          </Text>
                        </View>
                      </View>
                      <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width:"100%",
                      }}>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          width: 135,
                          justifyContent: "center",

                        }}
                      >
                        <Text style={{ fontSize: 10 }} numberOfLines={1}>
                        {team1.teamName}
                        {/* Chennai super kings */}
                        </Text>
                      </View>
                      </View>
                      
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "30%",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 5,
                      }}
                    >
                      {/* <View style={{ backgroundColor: "#e7ecff", padding: 5 }}>
                        <Text
                          style={{
                            fontSize: 10,
                            color: "#ff0c0c",
                            fontWeight: "900",
                          }}
                        >
                          {new Date(match.dateAndTime).toLocaleDateString()}
                        </Text>
                      </View> */}
                       <View style={{backgroundColor:"#E7ECFF",padding:5}}>
                        <Text style={{ fontSize: 10, color: "red",textAlign:"center",fontWeight:"bold" }}>
                          {countdown}
                        </Text>
                      </View>
                      <View>
                        <Text style={{ fontSize: 10 }}>
                          {new Date(match.dateAndTime).toLocaleTimeString()}
                        </Text>
                      </View>
                     
                    </View>

                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "35%",
                        gap: 5,
                        // backgroundColor:"#f267"
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "100%",
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
                                    source={require("../../assets/RCB logo.png")}

                            //source={{ uri: logoUri2 }}
                            style={{
                              backgroundColor: "#fff",
                              resizeMode: "contain",
                              width: 60,
                              height: 60,
                              borderRadius: 50,
                            }}
                          />
                        </View>
                        
                      </View>
                      <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width:"100%",
                      }}>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          width: 135,
                          justifyContent: "center",

                        }}
                      >
                        <Text style={{ fontSize: 10 }} numberOfLines={1}>
                        {team2.teamName}
                        {/* Chennai super kings */}
                        </Text>
                      </View>
                      </View>
                      
                    </View>
                    
                  </View>
                
                  <View
                    style={{
                      padding: 5,
                      width: "100%",
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
                    <View
                      style={{
                        padding: 1,
                        opacity: 0.5,
                      }}
                    >
                      <MaterialCommunityIcons
                        name="bell-circle"
                        size={27}
                        color="black"
                      />
                    </View>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
