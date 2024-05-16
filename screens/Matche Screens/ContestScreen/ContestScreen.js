import React, { useState } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/core";
import ContestFilter from "../../../components/Model/ContestFilter";
const Contest = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            backgroundColor: "#fff",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "15%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable 
            onPress={() => setModalVisible(true)}
            style={styles.filterIcon}>
              <Ionicons name="filter" size={24} color="black" />
            </Pressable>
            <ContestFilter visible={modalVisible} onClose={() => setModalVisible(false)} /> 
          </View>
          <View
            style={{ flexDirection: "row", width: "90%", overflow: "scroll" }}
          >
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.scrollContainer}
              contentContainerStyle={styles.scrollContentContainer}
            >
              <View>
                <Pressable>
                  <Text style={styles.FliterText}>MEGA</Text>
                </Pressable>
              </View>
              <View>
                <Pressable>
                  <Text style={styles.FliterText}>H2H</Text>
                </Pressable>
              </View>
              <View>
                <Pressable>
                  <Text style={styles.FliterText}>LOW ENTRY</Text>
                </Pressable>
              </View>
              <View>
                <Pressable>
                  <Text style={styles.FliterText}>TRENDING</Text>
                </Pressable>
              </View>
              <View>
                <Pressable>
                  <Text style={styles.FliterText}>MULTIPLAYER</Text>
                </Pressable>
              </View>
              <View>
                <Pressable>
                  <Text style={styles.FliterText}>IMPACT LEAGUE</Text>
                </Pressable>
              </View>
            </ScrollView>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginLeft: 15,
            padding: 5,
            backgroundColor: "#fff",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Mega Contest</Text>
        </View>
        <View style={{ gap: 10, backgroundColor: "#fff" }}>
          <View style={{ gap: 10, backgroundColor: "#fff" }}>
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
              onPress={()=>navigation.navigate("DetailScreen")}
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
                      elevation: 10,
                    },
                  }),
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    paddingBottom: 5,
                    padding: 5,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      padding: 5,
                      backgroundColor: "#fff",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 5,
                      }}
                    >
                      <Text style={{ fontSize: 10 }}>Prize Pool</Text>
                      <Text style={{ fontWeight: "700" }}>₹8 Crores</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      <View style={{ paddingTop: 2 }}>
                        <Image
                          source={require("../../../assets/1stplace.png")}
                          style={{ width: 30, height: 30 }}
                        />
                      </View>
                      <View>
                        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                          ₹40 Lakhs
                        </Text>
                        <Text
                          style={{
                            fontSize: 10,
                            textAlign: "center",
                            fontWeight: "600",
                            color: "#606060",
                          }}
                        >
                          Cash Prize
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: 70,
                        gap: 3,
                        paddingTop: 3,
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ opacity: 0.5, fontSize: 10 }}>
                          Entry
                        </Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <Pressable
                          style={{
                            backgroundColor: "#3E57C4",
                            paddingLeft: 13,
                            paddingRight: 13,
                            padding: 3,
                            borderRadius: 3,
                          }}
                        >
                          <Text style={{ color: "#fff" }}>₹ 39</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 10,
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ padding: 3 }}>
                      <Progress.Bar
                        progress={0.9}
                        width={300}
                        height={3}
                        borderWidth={0.2}
                        backgroundColor="#ababab"
                      />
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: 2,
                      }}
                    >
                      <View style={{ paddingLeft: 6 }}>
                        <Text style={{ color: "red", fontSize: 12 }}>
                          23,40,021 Spots Left
                        </Text>
                      </View>
                      <View style={{ paddingRight: 5 }}>
                        <Text style={{ fontSize: 12 }}>28,89,129 Spots</Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    padding: 5,
                    backgroundColor: "#ebebeb",
                    width: "100%",
                    alignItems: "center",
                    paddingLeft: 11,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        borderRadius: 10,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,
                        width: 15,
                        height: 15,
                        paddingRight: 0.5,
                        justifyContent: "center",
                        paddingBottom: 0.5,
                      }}
                    >
                      <Text style={{ fontSize: 9 }}>M</Text>
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: 5,
                      }}
                    >
                      <Text style={{ fontSize: 12 }}>Upto 20</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Ionicons name="trophy-outline" size={15} color="black" />
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: 5,
                      }}
                    >
                      <Text style={{ fontSize: 12 }}>62%</Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              marginLeft: 15,
              padding: 5,
              backgroundColor: "#fff",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Specially For You</Text>
          </View>
          <View style={{ gap: 10, backgroundColor: "#fff" }}>
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
                      elevation: 10,
                    },
                  }),
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    paddingBottom: 5,
                    padding: 5,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      padding: 5,
                      backgroundColor: "#fff",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 5,
                      }}
                    >
                      <Text style={{ fontSize: 10 }}>Prize Pool</Text>
                      <Text style={{ fontWeight: "700" }}>₹5.5 Lakhs</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                      <View style={{ paddingTop: 2 }}>
                        <Image
                        source={require("../../../assets/1stplace.png")}
                          style={{ width: 30, height: 30 }}
                        />
                      </View>
                      <View>
                        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                          ₹50,000
                        </Text>
                        <Text
                          style={{
                            fontSize: 10,
                            textAlign: "center",
                            fontWeight: "600",
                            color: "#606060",
                          }}
                        >
                          Cash Prize
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: 70,
                        gap: 3,
                        paddingTop: 3,
                      }}
                    >
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ opacity: 0.5, fontSize: 10 }}>
                          Entry
                        </Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <Pressable
                          style={{
                            backgroundColor: "#3E57C4",
                            paddingLeft: 13,
                            paddingRight: 13,
                            padding: 3,
                            borderRadius: 3,
                          }}
                        >
                          <Text style={{ color: "#fff" }}>₹ 33</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 10,
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ padding: 3 }}>
                      <Progress.Bar
                        progress={0.9}
                        width={300}
                        height={3}
                        borderWidth={0.2}
                        backgroundColor="#ababab"
                      />
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: 2,
                      }}
                    >
                      <View style={{ paddingLeft: 6 }}>
                        <Text style={{ color: "red", fontSize: 12 }}>
                          23,40,021 Spots Left
                        </Text>
                      </View>
                      <View style={{ paddingRight: 5 }}>
                        <Text style={{ fontSize: 12 }}>28,89,129 Spots</Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    padding: 5,
                    backgroundColor: "#ebebeb",
                    width: "100%",
                    alignItems: "center",
                    paddingLeft: 11,
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        borderRadius: 10,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        borderWidth: 1,
                        width: 15,
                        height: 15,
                        paddingRight: 0.5,
                        justifyContent: "center",
                        paddingBottom: 0.5,
                      }}
                    >
                      <Text style={{ fontSize: 9 }}>M</Text>
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: 5,
                      }}
                    >
                      <Text style={{ fontSize: 12 }}>Upto 20</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Ionicons name="trophy-outline" size={15} color="black" />
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: 5,
                      }}
                    >
                      <Text style={{ fontSize: 12 }}>62%</Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          padding: 15,
          justifyContent: "space-evenly",
        }}>
        <View style={{ width: "45%" }}>
          <Pressable
          onPress={()=>navigation.navigate('MYContest')}
            style={{
              backgroundColor: "#3385ff",
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 5,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }} >
            <Text style={{ fontWeight: "800", color: "#fff" }}>
              MY CONTESTS
            </Text>
          </Pressable>
        </View>
        <View style={{ width: "45%" }}>
          <Pressable
          onPress={()=>navigation.navigate('MYTeam')}
            style={{
              backgroundColor: "#3385ff",
              paddingTop: 8,
              paddingBottom: 8,
              borderRadius: 5,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{ fontWeight: "800", color: "#fff" }}>MY TEAM</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 2,
  },
  scrollContentContainer: {
    alignItems: "center",
  },
  tab: {
    marginHorizontal: 10,
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#3385ff",
  },
  filterIcon: {},
  FliterText: {
    fontSize: 10,
    padding: 10,
  },
});
export default Contest;