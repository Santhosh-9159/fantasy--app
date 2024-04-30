import { useLayoutEffect } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          marginLeft: 15,
          padding: 5,
        }}
      >
        <Text style={{fontWeight: 'bold',}}>My Matches</Text>
      </View>
      <View style={{ gap: 10 }}>
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
          height: 119,
          borderRadius: 10,
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
                backgroundColor: "#3385ff",
                borderBottomRightRadius: 50,
              }}
            >
              <Text style={{ fontSize: 10, padding: 5 }}>
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
                color="#7EE0AB"
              />
              <Text style={{ fontSize: 10, color: "#7EE0AB" }}>
                LINEUPS OUT
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Image
              source={require("../../assets/csk.png")}
              style={{
                backgroundColor: "#fff",
                resizeMode: "contain",
                width: 60,
                height: 60,
                borderRadius: 30,
              }}
            />
            <Text>CSK</Text>
            <View>
              <Text style={{ color: "red" }}>21M 30S</Text>
            </View>
            <View>
              <Text>RCB</Text>
            </View>
            <View>
              <Image
                source={require("../../assets/rcb.png")}
                style={{
                  backgroundColor: "#fff",
                  resizeMode: "contain",
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            padding: 5,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
           
          }}
        >
          <Text>1 TEAM 3 CONTEST</Text>
        </View>
      </Pressable>
    </View>

        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginLeft: 20,
          }}
        >
          <Text>Upcoming Matches</Text>
        </View>

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
              height: 119,
              borderRadius: 10,
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
                    backgroundColor: "#3385ff",
                    borderBottomRightRadius: 50,
                  }}
                >
                  <Text style={{ fontSize: 10, padding: 5 }}>
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
                    color="#7EE0AB"
                  />
                  <Text style={{ fontSize: 10, color: "#7EE0AB" }}>
                    LINEUPS OUT
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Image
                  source={require("../../assets/csk.png")}
                  style={{
                    backgroundColor: "#fff",
                    resizeMode: "contain",
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                  }}
                />
                <Text>CSK</Text>
                <View>
                  <Text style={{ color: "red" }}>21M 30S</Text>
                </View>
                <View>
                  <Text>RCB</Text>
                </View>
                <View>
                  <Image
                    source={require("../../assets/rcb.png")}
                    style={{
                      backgroundColor: "#fff",
                      resizeMode: "contain",
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                    }}
                  />
                </View>
              </View>
            </View>
            <View
              style={{
                padding: 5,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
               
              }}
            >
              <Text>1 TEAM 3 CONTEST</Text>
            </View>
          </Pressable>
        </View>

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
              height: 119,
              borderRadius: 10,
              overflow: "hidden",
              width: "90%",
              backgroundColor: "#fff",
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
                    backgroundColor: "#3385ff",
                    borderBottomRightRadius: 50,
                  }}
                >
                  <Text style={{ fontSize: 10, padding: 5 }}>
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
                  }}
                >
                  <Text style={{ fontSize: 10 }}>LINEUPS OUT</Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Image
                  source={require("../../assets/csk.png")}
                  style={{
                    backgroundColor: "#fff",
                    resizeMode: "contain",
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                  }}
                />
                <Text>CSK</Text>
                <View>
                  <Text style={{ color: "red" }}>21M 30S</Text>
                </View>
                <View>
                  <Text>RCB</Text>
                </View>
                <View>
                  <Image
                    source={require("../../assets/rcb.png")}
                    style={{
                      backgroundColor: "#fff",
                      resizeMode: "contain",
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                    }}
                  />
                </View>
              </View>
            </View>
          </Pressable>
        </View>

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
              height: 119,
              borderRadius: 10,
              overflow: "hidden",
              width: "90%",
              backgroundColor: "#fff",
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
                    backgroundColor: "#3385ff",
                    borderBottomRightRadius: 50,
                  }}
                >
                  <Text style={{ fontSize: 10, padding: 5 }}>
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
                  }}
                >
                  <Text style={{ fontSize: 10 }}>LINEUPS OUT</Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Image
                  source={require("../../assets/csk.png")}
                  style={{
                    backgroundColor: "#fff",
                    resizeMode: "contain",
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                  }}
                />
                <Text>CSK</Text>
                <View>
                  <Text style={{ color: "red" }}>21M 30S</Text>
                </View>
                <View>
                  <Text>RCB</Text>
                </View>
                <View>
                  <Image
                    source={require("../../assets/rcb.png")}
                    style={{
                      backgroundColor: "#fff",
                      resizeMode: "contain",
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                    }}
                  />
                </View>
              </View>
            </View>
          </Pressable>
        </View>
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
              height: 119,
              borderRadius: 10,
              overflow: "hidden",
              width: "90%",
              backgroundColor: "#fff",
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
                    backgroundColor: "#3385ff",
                    borderBottomRightRadius: 50,
                  }}
                >
                  <Text style={{ fontSize: 10, padding: 5 }}>
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
                  }}
                >
                  <Text style={{ fontSize: 10 }}>LINEUPS OUT</Text>
                </View>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Image
                  source={require("../../assets/csk.png")}
                  style={{
                    backgroundColor: "#fff",
                    resizeMode: "contain",
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                  }}
                />
                <Text>CSK</Text>
                <View>
                  <Text style={{ color: "red" }}>21M 30S</Text>
                </View>
                <View>
                  <Text>RCB</Text>
                </View>
                <View>
                  <Image
                    source={require("../../assets/rcb.png")}
                    style={{
                      backgroundColor: "#fff",
                      resizeMode: "contain",
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                    }}
                  />
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
