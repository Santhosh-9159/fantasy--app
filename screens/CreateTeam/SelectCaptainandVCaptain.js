import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons, FontAwesome5, Feather, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { teamsArray } from "../../jsondata/cskjson";
import { useDispatch, useSelector } from "react-redux";
import { Entypo } from '@expo/vector-icons';
import { getplayerProfileInfo } from "../../Redux/Slice";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SelectCaptainandVCaptain = () => {
  const selectedPlayer = useSelector((state) => state.tasks.finalPlayerSelected);

  const navigation = useNavigation();
  const allPlayers = teamsArray.flatMap(team => team.players);
  const Wicketkeepers = (role) => {
    return allPlayers.filter(player => player.role === role);
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
const [number2x, setNumber2x] = useState(false);
const dispatch = useDispatch();
  return (
    <View style={{ width: wp("100%"), height: hp(120),backgroundColor:"#fff" }}>
      <View style={{ height: hp("37%"), backgroundColor: "#DEE4FA" }}>
        <LinearGradient
          style={{
            flex: 1,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          }}
          colors={["#3247A0", "#1B2656", "#020202"]}
        >
          <View
            style={{
              height: wp("23%"),
              width: wp("100%"),
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 20,
                width: wp("100%"),
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", gap: 7 }}>
                <Pressable
                  onPress={() => navigation.goBack()}
                  style={styles.back}
                >
                  <Ionicons name="arrow-back" size={24} color="#fff" />
                </Pressable>
                <View style={{ flexDirection: "column" }}>
                  <Text style={{ color: "#fff", fontWeight: "bold" ,fontSize: hp(2)}}>
                    CREATE TEAM 1
                  </Text>
                  <Text style={{ color: "#fff", fontSize: hp(1.5) }}>
                    21M 30S left
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 20,
                }}
              >
                <View>
                  <FontAwesome5 name="question-circle" size={27} color="#fff" />
                </View>
                <View
                  style={{
                    borderWidth: 2.5,
                    borderColor: "#fff",
                    borderRadius: 30,
                    fontWeight: "700",
                    paddingTop: 4,
                    paddingBottom: 4,
                    paddingRight: 2,
                    paddingLeft: 2,
                  }}
                >
                  <Text
                    style={{ fontWeight: "700", fontSize: hp(1.5), color: "#fff" }}
                  >
                    PTS
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              height: hp("23%"),
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap:10,
              paddingBottom:20
            }}
          >
            <View>
              <Text style={{ fontSize: hp(2), color: "#fff" }}>
                Select Captain and Vice-captain
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: wp("70%"),
                justifyContent: "space-evenly",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: wp("35%"),
                  gap:10,
                }}
              >
                <View
                  style={{
                    height: hp(14),
                    width: wp(22),
                    borderWidth: 2,
                    borderColor: "#fff",
                    borderRadius: 5,
                    position:"relative",
                  justifyContent: "center",
                  alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../../assets/MS Dhoni.png")}
                    style={{ width: "90%", height: "85%" }}
                  />
                  <View style={{backgroundColor:"#fff",width: wp("18%"),
                  justifyContent: "center",
                  alignItems: "center",borderRadius:8}}><Text style={{fontWeight:"bold",color:"#000",fontSize: hp(1.5)}}>CSK</Text></View>
                  <View style={{
                    position:"absolute",
                    top:3,
                    left:5
                  }}><Text style={{fontWeight:"bold",color:"#fff"}}>C</Text></View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: wp("100%"),
                  }}
                >
                  <Text style={{ fontSize: hp(1.9), color: "#fff" }}>
                    Get 2x Points
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: wp("35%"),
                  gap:10

                }}
              >
                <View
                  style={{
                    height: hp(14),
                    width: wp(22),
                    borderWidth: 2,
                    borderColor: "#fff",
                    borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  }}
                >
                 <Text style={{fontWeight:"900",color:"#fff",fontSize: hp(2)}}>VC</Text>
                </View>
                <Text
                  style={{
                    fontSize: hp(1.9),
                    color: "#fff",
                    width: wp("100%"),
                    textAlign: "center",
                  }}
                >
                  Get 1.5x Points
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>

      <View style={{display:"flex",flexDirection:"column",width: wp("100%"),height: hp("63%"),justifyContent:"space-between"}}>
      <View
          style={{
            backgroundColor: "#DEE4FA",
            width: wp("100%"),
            flexDirection: "row",
          }}
        ><View
        style={{
          width: wp("25%"),
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingLeft:20
        }}
      >
        <Text style={{ fontSize: hp(1.7),fontWeight:"bold" }}>Team</Text>
      </View>
          <View
            style={{
              width: wp("45%"),
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Text style={{ fontSize: hp(1.7),fontWeight:"bold" }}>Points</Text>
          </View>
          <View style={{ width: wp("15%") }}>
            <Text style={{ fontSize: hp(1.7),fontWeight:"bold"}}>  C %</Text>
          </View>
          <View style={{ width: wp("15%") }}>
            <Text style={{ fontSize: hp(1.7),fontWeight:"bold" }}>VC %</Text>
          </View>
        </View>

<ScrollView>
  <View style={{}}>
  <View style={{padding:5,flexDirection: "row",
                width: wp("100%"),
                justifyContent: "center",
                alignItems: "center",backgroundColor:"#DEE4FA"}}>
                  <Text style={{color:"#000",fontWeight: "bold",fontSize: hp(2)}}>Wicket-Keeper</Text></View>
  <View style={{ flex: 1, alignItems: "center", gap: 5,}}>
          {Wicketkeepers("Wicketkeeper").map((player,id) => (
            <Pressable
              key={id}
              style={{
                flexDirection: "row",
                width:   wp("100%"),
                justifyContent: "center",
                alignItems: "center",
                borderBottomWidth: 0.5,
                borderColor: "#ababab",
                paddingBottom: 10,
  backgroundColor:selectedPlayer.includes(player.id) ? "#ccd6ff" : "#fff",
              }}
            >
              <Pressable
                  onPress={() => {
                    navigation.navigate("PlayerInfo");
                    dispatch(getplayerProfileInfo(player));
                  }}
                  style={{
                    padding: 2,
                    backgroundColor: "#fff",
                    overflow: "hidden",
                    width:  wp("20%"),
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={{ uri: player.image }} style={{ width: 50, height: 50, borderRadius: 30 }} />
                  <View
                    style={{
                      paddingLeft: 5,
                      paddingRight: 5,
                      backgroundColor: "#7f7f7f",
                      justifyContent: "center",
                      alignItems: "center",
                      width: wp("10%"),
                      borderRadius: 8,
                      position: 'absolute',
                      bottom: 0,
                    }}
                  >
                    <Text style={{ fontSize: hp(1.5), color: "#fff" }}>
                      {findTeamShortForm(player.id)}
                    </Text>
                  </View>
                </Pressable>
              <View style={{ flexDirection: "row", width: wp("50%"), gap: 10 }}>
                
                <View style={{ width: wp("100%"), justifyContent: "center", gap: 3 }}>
                  <Text style={{ fontSize: hp(1.9), fontWeight: "bold" }}>{player.name}</Text>
                  <Text style={{ fontSize: hp(1.7) }}>{player.points} Points</Text>
                </View>
              </View>
              <View style={{ width: wp("15%") }}>
                <Pressable onPress={()=> setNumber2x(!number2x)}>{number2x ? <View style={{}}><Entypo name="circle" size={32} color="#979797" /></View> : <View style={{backgroundColor:"#35b267",width:30,justifyContent:"center",alignItems:"center",padding:5,borderRadius:25,paddingLeft:5,paddingRight:5}}>
                  <Text style={{color:"#fff",fontWeight:"bold", fontSize: hp(2)}}>2x</Text></View>}</Pressable>
              </View>
                <View style={{ width: wp("15%") }}>
                <View style={{backgroundColor:"#35b267",width:30,justifyContent:"center",alignItems:"center",padding:5,borderRadius:25,paddingLeft:5,paddingRight:5}}>
                  <Text style={{color:"#fff",fontWeight:"bold",fontSize: hp(2)}}>2x</Text>
                  </View>
              </View>
            </Pressable>
          ))}
        </View>
  </View>


  <View style={{}}>
  <View style={{padding:5,flexDirection: "row",
                width: wp("100%"),
                justifyContent: "center",
                alignItems: "center",backgroundColor:"#DEE4FA"}}>
                  <Text style={{color:"#000",fontWeight: "bold",fontSize: hp(2)}}>Batsman</Text></View>
  <View style={{ flex: 1, alignItems: "center", gap: 5,}}>
          {Wicketkeepers("Batsman").map((player,id) => (
            <Pressable
              key={id}
              style={{
                flexDirection: "row",
                width: wp("100%"),
                justifyContent: "center",
                alignItems: "center",
                borderBottomWidth: 0.5,
                borderColor: "#ababab",
                paddingBottom: 10,
  backgroundColor:selectedPlayer.includes(player.id) ? "#ccd6ff" : "#fff",
              }}
            >
              <Pressable
                  onPress={() => {
                    navigation.navigate("PlayerInfo");
                    dispatch(getplayerProfileInfo(player));
                  }}
                  style={{
                    padding: 2,
                    backgroundColor: "#fff",
                    overflow: "hidden",
                    width:wp("20%"),
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={{ uri: player.image }} style={{ width: 50, height: 50, borderRadius: 30 }} />
                  <View
                    style={{
                      paddingLeft: 5,
                      paddingRight: 5,
                      backgroundColor: "#7f7f7f",
                      justifyContent: "center",
                      alignItems: "center",
                      width: wp("10%"),
                      borderRadius: 8,
                      position: 'absolute',
                      bottom: 0,
                    }}
                  >
                    <Text style={{ fontSize: hp(1.5), color: "#fff" }}>
                      {findTeamShortForm(player.id)}
                    </Text>
                  </View>
                </Pressable>
              <View style={{ flexDirection: "row", width: wp("50%"), gap: 10 }}>
                
                <View style={{ width: wp("100%"), justifyContent: "center", gap: 3 }}>
                  <Text style={{ fontSize: hp(2), fontWeight: "bold" }}>{player.name}</Text>
                  <Text style={{ fontSize: hp(1.7) }}>{player.points} Points </Text>
                </View>
              </View>
              <View style={{ width: wp("17%") }}>
                <Text style={{ fontWeight: "bold",}}>{player.points} Points</Text>
              </View>
                <View style={{ width: wp("15%") }}>
                  <Text style={{ fontWeight: "bold" }}> 80%</Text>
              </View>
            </Pressable>
          ))}
        </View>
  </View>


  <View style={{}}>
  <View style={{padding:5,flexDirection: "row",
                width: wp("100%"),
                justifyContent: "center",
                alignItems: "center",backgroundColor:"#DEE4FA"}}><Text style={{color:"#000",fontWeight: "bold"}}>All-rounder</Text></View>
  <View style={{ flex: 1, alignItems: "center", gap: 5,}}>
          {Wicketkeepers("All-rounder").map((player,id) => (
            <Pressable
              key={id}
              style={{
                flexDirection: "row",
                width: wp("100%"),
                justifyContent: "center",
                alignItems: "center",
                borderBottomWidth: 0.5,
                borderColor: "#ababab",
                paddingBottom: 10,
  backgroundColor:selectedPlayer.includes(player.id) ? "#ccd6ff" : "#fff",
              }}
            >
              <Pressable
                  onPress={() => {
                    navigation.navigate("PlayerInfo");
                    dispatch(getplayerProfileInfo(player));
                  }}
                  style={{
                    padding: 2,
                    backgroundColor: "#fff",
                    overflow: "hidden",
                    width: wp("20%"),
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={{ uri: player.image }} style={{ width: 50, height: 50, borderRadius: 30 }} />
                  <View
                    style={{
                      paddingLeft: 5,
                      paddingRight: 5,
                      backgroundColor: "#7f7f7f",
                      justifyContent: "center",
                      alignItems: "center",
                      width: wp("10%"),
                      borderRadius: 8,
                      position: 'absolute',
                      bottom: 0,
                    }}
                  >
                    <Text style={{ fontSize: hp(1.5), color: "#fff" }}>
                      {findTeamShortForm(player.id)}
                    </Text>
                  </View>
                </Pressable>
              <View style={{ flexDirection: "row", width: "50%", gap: 10 }}>
                
                <View style={{ width: wp("100%"), justifyContent: "center", gap: 3 }}>
                  <Text style={{ fontSize:  hp(2), fontWeight: "bold" }}>{player.name}</Text>
                  <Text style={{ fontSize: hp(1.7) }}>{player.points} Points</Text>
                </View>
              </View>
              <View style={{ width:wp("17%")}}>
                <Text style={{ fontWeight: "bold" }}>{player.points} Points</Text>
              </View>
                <View style={{ width: wp("15%") }}>
                  <Text style={{ fontWeight: "bold" }}>80%</Text>
              </View>
            </Pressable>
          ))}
        </View>
  </View>


  <View style={{}}>
  <View style={{padding:5,flexDirection: "row",
                width: wp("100%"),
                justifyContent: "center",
                alignItems: "center",backgroundColor:"#DEE4FA"}}>
                  <Text style={{color:"#000",fontWeight: "bold", fontSize: hp(2)}}>Bowler</Text></View>
  <View style={{ flex: 1, alignItems: "center", gap: 5,}}>
          {Wicketkeepers("Bowler").map((player,id) => (
            <Pressable
              key={id}
              style={{
                flexDirection: "row",
                width: wp("100%"),
                justifyContent: "center",
                alignItems: "center",
                borderBottomWidth: 0.5,
                borderColor: "#ababab",
                paddingBottom: 10,
  backgroundColor:selectedPlayer.includes(player.id) ? "#ccd6ff" : "#fff",
              }}
            >
              <Pressable
                  onPress={() => {
                    navigation.navigate("PlayerInfo");
                    dispatch(getplayerProfileInfo(player));
                  }}
                  style={{
                    padding: 2,
                    backgroundColor: "#fff",
                    overflow: "hidden",
                    width: wp("20%"),
                    position: "relative",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image source={{ uri: player.image }} style={{ width: 50, height: 50, borderRadius: 30 }} />
                  <View
                    style={{
                      paddingLeft: 5,
                      paddingRight: 5,
                      backgroundColor: "#7f7f7f",
                      justifyContent: "center",
                      alignItems: "center",
                      width: wp("10%"),
                      borderRadius: 8,
                      position: 'absolute',
                      bottom: 0,
                    }}
                  >
                    <Text style={{ fontSize: hp(1.5), color: "#fff" }}>
                      {findTeamShortForm(player.id)}
                    </Text>
                  </View>
                </Pressable>
              <View style={{ flexDirection: "row", width: wp("50%"), gap: 10 }}>
                
                <View style={{ width: wp("100%"), justifyContent: "center", gap: 3 }}>
                  <Text style={{ fontSize: hp(2), fontWeight: "bold" }}>{player.name}</Text>
                  <Text style={{ fontSize: hp(1.7) }}>{player.points}Points</Text>
                </View>
              </View>
              
              <View style={{ width: wp("15%") }}>
                <Text style={{ fontWeight: "bold" }}>{player.points} Points</Text>
              </View>
                <View style={{ width: wp("15%") }}>
                  <Text style={{ fontWeight: "bold" }}>80%</Text>
              </View>
            </Pressable>
          ))}
        </View>
  </View>



</ScrollView>


        <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width:  wp("100%"),
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 10,
            }}
          >
            <Pressable onPress={() => navigation.navigate("TeamPreview")}
              style={{
                backgroundColor: '#000',
                width: wp('45%'),
                borderWidth: 1.5,
                borderColor: '#000',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 7,
                gap: 3
              }}
            >
              <View style={{}}><AntDesign name="eyeo" size={24} color="#fff" /></View>
              <Text style={{ color: '#fff', paddingRight: 5, fontWeight: "bold", fontSize:hp(2) }}>TEAM PREVIEW</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("SelectCaptainandVCaptain")}
              style={{
                backgroundColor: '#3e57c4',
                width: wp('45%'),
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
                padding: 7,
                gap: 3
              }}
            >
              <Text style={{ color: '#fff', paddingLeft: 5, fontWeight: "bold" , fontSize:hp(2)}}>NEXT</Text>
              <View style={{}}><MaterialIcons name="skip-next" size={24} color="#fff" /></View>
            </Pressable>
          </View>
      </View>

    </View>
  );
};

export default SelectCaptainandVCaptain;

const styles = StyleSheet.create({});
