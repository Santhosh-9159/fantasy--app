import { useLayoutEffect } from "react";
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

export default function Home({ navigation }) {
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
      <View style={{ gap: 10, paddingBottom: 20 }}>
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
                    position:"relative"
                  }}
                >
                  <Image source={require("../../assets/Borderradius.png")} style={{height:20,width:200}}/>
                  <Text style={{ fontSize: 10, padding: 5, color: "#fff",fontWeight:"bold",position:'absolute' }}>
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
                    width: "30%",
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
                    </View>
                    <View>
                      <Text style={{ fontWeight: "bold" }}>CSK</Text>
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
                      Chennai Super Kings  
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "40%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                  }}
                >
                  <View style={{ backgroundColor: "#e7ecff", padding: 5 }}>
                    <Text style={{ fontSize: 10 ,color:"#ff0c0c",fontWeight:"900"}}>12M 18S left</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>07:30 PM</Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "30%",
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
                      <Text style={{ fontWeight: "bold" }}>RCB</Text>
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
                      Royal Challenger Bangalore
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
                alignItems:"center",
                borderTopWidth:0.5,
                borderColor:"#cccccc",
                paddingLeft:10,
                paddingRight:10
              }}
            >
              <View>
              <Text style={{fontWeight:'bold'}}>1 Team 3 Contests</Text>
              </View>
              <View style={{borderWidth:2,borderColor:"#666666",borderRadius:8,padding:1,opacity:0.8}}>
              <MaterialCommunityIcons name="bell-plus-outline" size={20} color="#666666" style={{opacity:0.8}} />
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
                    position:"relative"
                  }}
                >
                  <Image source={require("../../assets/Borderradius.png")} style={{height:20,width:200}}/>
                  <Text style={{ fontSize: 10, padding: 5, color: "#fff",fontWeight:"bold",position:'absolute' }}>
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
                    width: "30%",
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
                    </View>
                    <View>
                      <Text style={{ fontWeight: "bold" }}>CSK</Text>
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
                      Chennai Super Kings  
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "40%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                  }}
                >
                  <View style={{ backgroundColor: "#e7ecff", padding: 5 }}>
                    <Text style={{ fontSize: 10 ,color:"#ff0c0c",fontWeight:"900"}}>12M 18S left</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>07:30 PM</Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "30%",
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
                      <Text style={{ fontWeight: "bold" }}>RCB</Text>
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
                      Royal Challenger Bangalore
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
                alignItems:"center",
                borderTopWidth:0.5,
                borderColor:"#cccccc",
                paddingLeft:10,
                paddingRight:10
              }}
            >
              <View style={{display: "flex",
                flexDirection: "row",gap:15,alignItems: "center",
                justifyContent: "center",}}>
              <Text style={{fontWeight:'bold',backgroundColor:"#ff5d5d",padding:3,paddingLeft:5,paddingRight:5,color:"#fff",borderRadius:15,fontSize:10}}>MEGA</Text>
              <Text style={{fontWeight:'bold'}}>₹ 1 CRORE</Text>
              </View>
              <View style={{borderWidth:2,borderColor:"#666666",borderRadius:8,padding:1,opacity:0.8}}>
              <MaterialCommunityIcons name="bell-plus-outline" size={20} color="#666666" style={{opacity:0.8}} />
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
                    position:"relative"
                  }}
                >
                  <Image source={require("../../assets/Borderradius.png")} style={{height:20,width:200}}/>
                  <Text style={{ fontSize: 10, padding: 5, color: "#fff",fontWeight:"bold",position:'absolute' }}>
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
                    width: "30%",
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
                    </View>
                    <View>
                      <Text style={{ fontWeight: "bold" }}>CSK</Text>
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
                      Chennai Super Kings  
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "40%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                  }}
                >
                  <View style={{ backgroundColor: "#e7ecff", padding: 5 }}>
                    <Text style={{ fontSize: 10 ,color:"#ff0c0c",fontWeight:"900"}}>12M 18S left</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>07:30 PM</Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "30%",
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
                      <Text style={{ fontWeight: "bold" }}>RCB</Text>
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
                      Royal Challenger Bangalore
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
                alignItems:"center",
                borderTopWidth:0.5,
                borderColor:"#cccccc",
                paddingLeft:10,
                paddingRight:10
              }}
            >
              <View style={{display: "flex",
                flexDirection: "row",gap:15,alignItems: "center",
                justifyContent: "center",}}>
              <Text style={{fontWeight:'bold',backgroundColor:"#ff5d5d",padding:3,paddingLeft:5,paddingRight:5,color:"#fff",borderRadius:15,fontSize:10}}>MEGA</Text>
              <Text style={{fontWeight:'bold'}}>₹ 1 CRORE</Text>
              </View>
              <View style={{borderWidth:2,borderColor:"#666666",borderRadius:8,padding:1,opacity:0.8}}>
              <MaterialCommunityIcons name="bell-plus-outline" size={20} color="#666666" style={{opacity:0.8}} />
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
                    position:"relative"
                  }}
                >
                  <Image source={require("../../assets/Borderradius.png")} style={{height:20,width:200}}/>
                  <Text style={{ fontSize: 10, padding: 5, color: "#fff",fontWeight:"bold",position:'absolute' }}>
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
                    width: "30%",
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
                    </View>
                    <View>
                      <Text style={{ fontWeight: "bold" }}>CSK</Text>
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
                      Chennai Super Kings  
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "40%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                  }}
                >
                  <View style={{ backgroundColor: "#e7ecff", padding: 5 }}>
                    <Text style={{ fontSize: 10 ,color:"#ff0c0c",fontWeight:"900"}}>12M 18S left</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>07:30 PM</Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "30%",
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
                      <Text style={{ fontWeight: "bold" }}>RCB</Text>
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
                      Royal Challenger Bangalore
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
                alignItems:"center",
                borderTopWidth:0.5,
                borderColor:"#cccccc",
                paddingLeft:10,
                paddingRight:10
              }}
            >
              <View style={{display: "flex",
                flexDirection: "row",gap:15,alignItems: "center",
                justifyContent: "center",}}>
              <Text style={{fontWeight:'bold',backgroundColor:"#ff5d5d",padding:3,paddingLeft:5,paddingRight:5,color:"#fff",borderRadius:15,fontSize:10}}>MEGA</Text>
              <Text style={{fontWeight:'bold'}}>₹ 1 CRORE</Text>
              </View>
              <View style={{borderWidth:2,borderColor:"#666666",borderRadius:8,padding:1,opacity:0.8}}>
              <MaterialCommunityIcons name="bell-plus-outline" size={20} color="#666666" style={{opacity:0.8}} />
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
                    position:"relative"
                  }}
                >
                  <Image source={require("../../assets/Borderradius.png")} style={{height:20,width:200}}/>
                  <Text style={{ fontSize: 10, padding: 5, color: "#fff",fontWeight:"bold",position:'absolute' }}>
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
                    width: "30%",
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
                    </View>
                    <View>
                      <Text style={{ fontWeight: "bold" }}>CSK</Text>
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
                      Chennai Super Kings  
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "40%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                  }}
                >
                  <View style={{ backgroundColor: "#e7ecff", padding: 5 }}>
                    <Text style={{ fontSize: 10 ,color:"#ff0c0c",fontWeight:"900"}}>12M 18S left</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>07:30 PM</Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "30%",
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
                      <Text style={{ fontWeight: "bold" }}>RCB</Text>
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
                      Royal Challenger Bangalore
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
                alignItems:"center",
                borderTopWidth:0.5,
                borderColor:"#cccccc",
                paddingLeft:10,
                paddingRight:10
              }}
            >
              <View style={{display: "flex",
                flexDirection: "row",gap:15,alignItems: "center",
                justifyContent: "center",}}>
              <Text style={{fontWeight:'bold',backgroundColor:"#ff5d5d",padding:3,paddingLeft:5,paddingRight:5,color:"#fff",borderRadius:15,fontSize:10}}>MEGA</Text>
              <Text style={{fontWeight:'bold'}}>₹ 1 CRORE</Text>
              </View>
              <View style={{borderWidth:2,borderColor:"#666666",borderRadius:8,padding:1,opacity:0.8}}>
              <MaterialCommunityIcons name="bell-plus-outline" size={20} color="#666666" style={{opacity:0.8}} />
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
                    position:"relative"
                  }}
                >
                  <Image source={require("../../assets/Borderradius.png")} style={{height:20,width:200}}/>
                  <Text style={{ fontSize: 10, padding: 5, color: "#fff",fontWeight:"bold",position:'absolute' }}>
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
                    width: "30%",
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
                    </View>
                    <View>
                      <Text style={{ fontWeight: "bold" }}>CSK</Text>
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
                      Chennai Super Kings  
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "40%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 5,
                  }}
                >
                  <View style={{ backgroundColor: "#e7ecff", padding: 5 }}>
                    <Text style={{ fontSize: 10 ,color:"#ff0c0c",fontWeight:"900"}}>12M 18S left</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 10 }}>07:30 PM</Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "30%",
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
                      <Text style={{ fontWeight: "bold" }}>RCB</Text>
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
                      Royal Challenger Bangalore
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
                alignItems:"center",
                borderTopWidth:0.5,
                borderColor:"#cccccc",
                paddingLeft:10,
                paddingRight:10
              }}
            >
              <View style={{display: "flex",
                flexDirection: "row",gap:15,alignItems: "center",
                justifyContent: "center",}}>
              <Text style={{fontWeight:'bold',backgroundColor:"#ff5d5d",padding:3,paddingLeft:5,paddingRight:5,color:"#fff",borderRadius:15,fontSize:10}}>MEGA</Text>
              <Text style={{fontWeight:'bold'}}>₹ 1 CRORE</Text>
              </View>
              <View style={{borderWidth:2,borderColor:"#666666",borderRadius:8,padding:1,opacity:0.8}}>
              <MaterialCommunityIcons name="bell-plus-outline" size={20} color="#666666" style={{opacity:0.8}} />
              </View>
            </View>
            </View>
            
          </Pressable>
        </View>

       

       
      </View>
    </ScrollView>
  );
}