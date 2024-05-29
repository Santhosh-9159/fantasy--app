import React, { useState, useEffect } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Platform,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';


import teamData from '../../Team.json';
import matchData from '../../Match.json';

export default function Home({ navigation }) {
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
   
    setTeams(teamData);

   
    setMatches(matchData);
  }, []);

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
          marginLeft: 15,
          padding: 5,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>My Matches</Text>
      </View>
      {
        matches.map((match, index) => {
          const team1 = teams.find(team => team._id.$oid === match.teamId1.$oid);
          const team2 = teams.find(team => team._id.$oid === match.teamId2.$oid);

          const logoUri1 = `data:image/png;base64,${team1.logo.$binary.base64}`;
          const logoUri2 = `data:image/png;base64,${team2.logo.$binary.base64}`;

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
                  onPress={() => navigation.navigate("ContestScreen")}
                  style={{
                    borderRadius: 5,
                    overflow: "hidden",
                    width: "90%",
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
                          position: "relative"
                        }}
                      >
                        <Image source={require("../../assets/Borderradius.png")} style={{ height: 20, width: 200 }} />
                        <Text style={{ fontSize: 10, padding: 5, color: "#fff", fontWeight: "bold", position: 'absolute' }}>
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
                          <View style={{ padding: 2, }}>
                            <Image
                              source={{ uri: logoUri1 }}
                              style={{
                                backgroundColor: "#fff",
                                resizeMode: "contain",
                                width: 50,
                                height: 50,
                              }}
                            />
                          </View>
                          <View>
                            <Text style={{ fontWeight: "bold" }}>{team1.teamName}</Text>
                          </View>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 100,
                          }}
                        >
                          <Text style={{ fontSize: 10 }} numberOfLines={1}>
                            {team1.shortName}
                          </Text>
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
                        <View style={{ backgroundColor: "#e7ecff", padding: 5 }}>
                          <Text style={{ fontSize: 10, color: "#ff0c0c", fontWeight: "900" }}>{new Date(match.dateAndTime).toLocaleDateString()}</Text>
                        </View>
                        <View>
                          <Text style={{ fontSize: 10 }}>{new Date(match.dateAndTime).toLocaleTimeString()}</Text>
                        </View>
                      </View>

                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "35%",
                          gap: 5,
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
                            <Text style={{ fontWeight: "bold" }}>{team2.shortName}</Text>
                          </View>

                          <View>
                            <Image
                              source={{ uri: logoUri2 }}
                              style={{
                                backgroundColor: "#fff",
                                resizeMode: "contain",
                                width: 60,
                                height: 60,
                             
                              }}
                            />
                          </View>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 100,
                          }}
                        >
                          <Text style={{ fontSize: 10 }} numberOfLines={1}>
                            {team2.teamName}
                          </Text>
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
                        paddingRight: 10
                      }}
                    >
                      <View>
                        <Text style={{ fontWeight: 'bold' }}>1 Team 3 Contests</Text>
                      </View>
                      <View style={{ borderWidth: 2, borderColor: "#666666", borderRadius: 8, padding: 1, opacity: 0.8 }}>
                        <MaterialCommunityIcons name="bell-plus-outline" size={20} color="#666666" style={{ opacity: 0.8 }} />
                      </View>
                    </View>
                  </View>
                </Pressable>
              </View>
            </View>
          )
        })
      }
    </ScrollView>
  );
}
