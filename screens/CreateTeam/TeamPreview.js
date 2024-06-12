import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { teamsArray } from "../../jsondata/cskjson";

const TeamPreview = () => {
  const navigation = useNavigation();
  const playercount = useSelector(
    (state) => state.tasks.finalPlayerSelected.length
  );
  const remindplayer = 11 - playercount;
  const player = useSelector((state) => state.tasks.finalPlayerSelected);
    const impactPlayerprofile = useSelector((state) => state.tasks.impactPlayerSelected);
console.log("impact player",impactPlayerprofile);


const allPlayers = teamsArray.flatMap(team => team.players);
const selectedPlayer = useSelector((state) => state.tasks.finalPlayerSelected);

const selectedPlayers = allPlayers.filter(player =>
  selectedPlayer.includes(player.id)
);

const cskPlayersCount = selectedPlayers.filter(player => player.team_short_form === 'CSK').length;
const rcbPlayersCount = selectedPlayers.filter(player => player.team_short_form === 'RCB').length;

  return (
    <View style={{ backgroundColor: "#2d2d2d", width: "100%", height: "100%" }}>
      <View
        style={{
          height: "18%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            gap: 10,
            top: 30,
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={26} color="#fff" />
          </Pressable>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
              Team Preview
            </Text>
            <Text
              style={{ color: "#a4a4a4", fontWeight: "bold", fontSize: 10 }}
            >
              21M 30S left
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={{ width: "35%" }}>
            <Text
              style={{ color: "#a4a4a4", fontSize: 14, fontWeight: "bold" }}
            >
              Players
            </Text>
            <Text style={{ fontSize: 12, color: "#fff", fontWeight: "bold" }}>
              {playercount}/{remindplayer}
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              width: "30%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#fff",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 3,
                paddingRight: 3,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "bold" }}>CSK</Text>
            </View>
            <Text style={{ fontSize: 12, color: "#fff" }}>{cskPlayersCount} : {rcbPlayersCount}</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "red",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 3,
                paddingRight: 3,
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: "bold", color: "#fff" }}>
                RCB
              </Text>
            </View>
          </View>

          <View
            style={{
              width: "35%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >{impactPlayerprofile.length > 0 ? <Image
            source={require("../../assets/ImpactPreviewSelected.png")}
            style={{ width: 40, height: 40 }}
          /> :<Image
          source={require("../../assets/ImpactPreviewNotSelected.png")}
          style={{ width: 40, height: 40 }}
        /> }
            
          </View>
        </View>
      </View>

      <View
        style={{
          height: "82%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Image
          source={require("../../assets/GroundPreview.png")}
          style={{ width: "100%", height: "100%", opacity: 0.9 }}
        />
        <View
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <View style={{height:"95%",overflow:"scroll",zIndex:10}}>
            {playercount > 0 ? (
              <View style={{height:"92%",overflow:"visible",}}>
                <View style={{ width: "100%", height: playercount >= 1 ? "auto" : "20%",                    
 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      paddingTop:5
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: 12,
                      }}
                    >
                      Wicketkeeper
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: "100%",
                      gap: 5,
                    }}
                  >
                    {player.map((playerId, index) => {
                      // Find the player object from teamsArray using playerId
                      const selectedPlayer = teamsArray
                        .flatMap((team) => team.players)
                        .find((player) => player.id === playerId);
                      if (
                        selectedPlayer &&
                        selectedPlayer.role === "Wicketkeeper"
                      ) {
                        return (
                          <View
                            key={index}
                            style={{
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              marginBottom: 10,
                            }}
                          >
                            <Image
                              source={{ uri: selectedPlayer.image }}
                              style={{
                                width: 80,
                                height: 80,
                                borderRadius: 25,
                              }}
                            />
                           <View style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 110,
                    }}>
                            <Text
                              style={{
                                fontSize: 10,
                                backgroundColor: "#d9d9d9",
                                paddingLeft: 5,
                                paddingRight: 5,
                                borderRadius: 5,
                                fontWeight: "900",
                              }}
                              numberOfLines={1}
                            >
                              {selectedPlayer.name}
                            </Text>
                            </View>
                          </View>
                        );
                      } else {
                        return null; // Handle case where player is not found
                      }
                    })}
                  </View>
                </View>

                <View style={{ width: "100%", height: playercount >= 1 ? "auto" : null,                    
 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: 12,
                      }}
                    >
                      Batsman
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: "100%",
                      gap: 5,
                    }}
                  >
                    {player.map((playerId, index) => {
                      // Find the player object from teamsArray using playerId
                      const selectedPlayer = teamsArray
                        .flatMap((team) => team.players)
                        .find((player) => player.id === playerId);

                      if (selectedPlayer && selectedPlayer.role === "Batsman") {
                        return (
                          <View
                            key={index}
                            style={{
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              marginBottom: 10,
                            }}
                          >
                            <Image
                              source={{ uri: selectedPlayer.image }}
                              style={{
                                width: 80,
                                height: 80,
                                borderRadius: 25,
                              }}
                            />
                           <View style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 110,
                    }}>
                            <Text
                              style={{
                                fontSize: 10,
                                backgroundColor: "#d9d9d9",
                                paddingLeft: 5,
                                paddingRight: 5,
                                borderRadius: 5,
                                fontWeight: "900",
                              }}
                              numberOfLines={1}
                            >
                              {selectedPlayer.name}
                            </Text>
                            </View>
                          </View>
                        );
                      } else {
                        return null; // Handle case where player is not found
                      }
                    })}
                  </View>
                </View>

                <View style={{ width: "100%",    height: playercount >= 1 ? "auto" : null,                   
 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: 12,
                      }}
                    >
                      All-rounder
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    {player.map((playerId, index) => {
                      // Find the player object from teamsArray using playerId
                      const selectedPlayer = teamsArray
                        .flatMap((team) => team.players)
                        .find((player) => player.id === playerId);
                      if (
                        selectedPlayer &&
                        selectedPlayer.role === "All-rounder"
                      ) {
                        return (
                          <View
                            key={index}
                            style={{
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              marginBottom: 10,
                            }}
                          >
                            <Image
                              source={{ uri: selectedPlayer.image }}
                              style={{
                                width: 80,
                                height: 80,
                                borderRadius: 25,
                              }}
                            />
                           <View style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 110,
                    }}>
                            <Text
                              style={{
                                fontSize: 10,
                                backgroundColor: "#d9d9d9",
                                paddingLeft: 5,
                                paddingRight: 5,
                                borderRadius: 5,
                                fontWeight: "900",
                              }}
                              numberOfLines={1}
                            >
                              {selectedPlayer.name}
                            </Text>
                            </View>
                          </View>
                        );
                      } else {
                        return null; // Handle case where player is not found
                      }
                    })}
                  </View>
                </View>

                <View style={{ width: "100%",   height: playercount >= 1 ? "auto" : null,                    
 }}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      

                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: 12,
                      }}
                    >
                      Bowler
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "space-around",
                      alignItems: "center",
                      width: "100%",
                      gap:3
                    }}
                  >
                    {player.map((playerId, index) => {
                      // Find the player object from teamsArray using playerId
                      const selectedPlayer = teamsArray
                        .flatMap((team) => team.players)
                        .find((player) => player.id === playerId);
                      if (selectedPlayer && selectedPlayer.role === "Bowler") {
                        return (
                          <View
                            key={index}
                            style={{
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              marginBottom: 10,
                            }}
                          >
                            <Image
                              source={{ uri: selectedPlayer.image }}
                              style={{
                                width: 80,
                                height: 80,
                                borderRadius: 25,
                              }}
                            />
                            <View style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 110,
                    }}>
                            <Text
                              style={{
                                fontSize: 10,
                                backgroundColor: "#d9d9d9",
                                paddingLeft: 5,
                                paddingRight: 5,
                                borderRadius: 5,
                                fontWeight: "900",
                              }}
                              numberOfLines={1}
                            >
                              {selectedPlayer.name}
                            </Text>
                            </View>
                          </View>
                        );
                      } else {
                        return null; // Handle case where player is not found
                      }
                    })}
                  </View>
                </View>
              </View>
            ) : (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "25%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingTop: 10,
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 12 }}
                  >
                    WICKET-KEEPER
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "25%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 12 }}
                  >
                    BATTER
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "25%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 12 }}
                  >
                    ALL-ROUNDER
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "25%",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontWeight: "bold", fontSize: 12 }}
                  >
                    BOWLER
                  </Text>
                </View>
              </View>
            )}
          </View>

          <View
            style={{
              width: "100%",
              backgroundColor: "#2d2d2d",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "5%",
              gap:5
            }}
          >
            <View style={{ display: "flex",
            flexDirection: "row",
            justifyContent: "center",
              alignItems: "center",gap:3}}>
              <View>
              <Text style={{fontWeight:"bold",color:"#fff"}}>IMPACT PLAYER</Text>
              </View>
              <Image
              source={require("../../assets/ImpactPreviewNotSelected.png")}
              style={{ width: 40, height: 40 }}
            />
            </View>
            <View style={{ display: "flex",
            flexDirection: "row",justifyContent: "center",
            alignItems: "center",}}>
            {impactPlayerprofile.map((item, id) => (
  <View key={id} style={{ display: "flex",
  flexDirection: "row",justifyContent: "center",
  alignItems: "center",gap:5}}>
    <Image source={{ uri: item.image }} style={{width:30,height:30}}
 />
    <Text style={{color:"#fff"}}>{item.name}</Text>
  </View>
))}

            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TeamPreview;

const styles = StyleSheet.create({});