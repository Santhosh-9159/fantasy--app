import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { useSport } from "../../components/SportContext";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState();
  const [profileimg, setProfileimg] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    setProfileimg(result);
    console.log("Result from Image Picker:", result);

    if (!result.cancelled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
      console.log("Image URI is set to:", result.assets[0].uri);
    }
  };

  const { Tier, setTier } = useSport();
  const { ImpactScore } = useSport();

  if (ImpactScore >= 0 && ImpactScore <= 200) {
    setTier("BRONZE");
  }
  if (ImpactScore >= 201 && ImpactScore <= 300) {
    setTier("SILVER");
  }
  if (ImpactScore >= 301 && ImpactScore <= 400) {
    setTier("GOLD");
  }
  if (ImpactScore >= 401 && ImpactScore <= 500) {
    setTier("DIAMOND");
  }
  if (ImpactScore >= 501 && ImpactScore <= 800) {
    setTier("THE STAR");
  }
  if (ImpactScore >= 801 && ImpactScore <= 1000) {
    setTier("LEGEND");
  }

  return (
    
      <View
      style={{
        width: wp("100%"),
        display: "flex",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          height: hp(12),
          backgroundColor: "#3f58c5",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: 10,
          paddingLeft:15,
          paddingRight:15
        }}
      >
        <Text style={{ fontSize: hp(2.5), color: "#fff",fontWeight:"bold" }}>PROFILE</Text>
        <Pressable>
          <View style={{ gap: 5,display: "flex",
          flexDirection: "row",justifyContent: "center",
          alignItems: "center", }}>
            <View>
              <MaterialIcons name="power-settings-new" size={20} color="#fff" />
            </View>
            <Text style={{fontSize:hp(2),color:"#fff"}}>Logout</Text>
          </View>
        </Pressable>
      </View>

      <ScrollView>
      <View
        style={{
          width: wp("100%"),
          display: "flex",
          flexDirection: "column",
        }}
      >
        <View
          style={{
            width: wp("100%"),
            paddingTop: 50,
           
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              paddingTop: 60,
              backgroundColor: "#ECECEC",
              width: wp("90%"),
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: wp("100%"),
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ padding: 5 }}>
                <Text style={{ fontWeight: "900", fontSize: hp(2.3) }}>
                  shivam11s
                </Text>
                <Text style={{ fontSize: hp(2) }}>Shivam11s</Text>
              </View>
              <View>
                <Text style={{ backgroundColor: "#CCD5FF" }}>
                  Total Impacts: 767
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: wp("100%"),
                  justifyContent: "space-around",
                  padding: 10,
                }}
              >
                <View style={{}}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>100</Text>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "900", fontSize: hp(2.5) }}>
                      FOLLOWERS
                    </Text>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text>100</Text>
                  </View>
                  <View>
                    <Text style={{ fontWeight: "900", fontSize: hp(2.5) }}>
                      FOLLOWING
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.profilePicContainer}>
            <Pressable onPress={pickImage}>
              <View style={styles.imageWrapper}>
                {imageUri ? (
                  <Image source={{ uri: imageUri }} style={styles.profilePic} />
                ) : (
                  <Image source={require("../../assets/user-profile.png")} style={{width:100,height:100,borderWidth:2,borderColor:"#979797",borderRadius:60}} />
                )}

                <View style={styles.iconBackground}>
                  <View style={{opacity:0.7}}>
                    <MaterialIcons
                      name="camera-alt"
                      size={26}
                      color="#000"
                      style={styles.icon}
                    />
                  </View>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={{ paddingTop: 10, paddingLeft: 20, gap: 10 }}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: hp(2.4) }}>Tier</Text>
          </View>
          <Pressable onPress={() => navigation.navigate("Tire Screen")}>
            <View
              style={{
                width: wp("90%"),
                borderRadius: 10,
                backgroundColor: "#ffff",
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
                flexDirection: "row",
                padding: 15,
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  width: wp("17%"),
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                {Tier == "BRONZE" && (
                  <Image
                    source={require("../../assets/Bronze.png")}
                    style={{ height: 50, width: 40 }}
                  />
                )}
                {Tier == "SILVER" && (
                  <Image
                    source={require("../../assets/Silver.png")}
                    style={{ height: 50, width: 40 }}
                  />
                )}
                {Tier == "GOLD" && (
                  <Image
                    source={require("../../assets/Gold.png")}
                    style={{ height: 50, width: 40 }}
                  />
                )}
                {Tier == "DIAMOND" && (
                  <Image
                    source={require("../../assets/Diamond.png")}
                    style={{ height: 50, width: 40 }}
                  />
                )}
                {Tier == "THE STAR" && (
                  <Image
                    source={require("../../assets/starplace.png")}
                    style={{ height: 50, width: 40 }}
                  />
                )}
                {Tier == "LEGEND" && (
                  <Image
                    source={require("../../assets/Legend.png")}
                    style={{ height: 50, width: 40 }}
                  />
                )}
              </View>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  width: wp("67%"),
                }}
              >
                <View style={{ flexDirection: "column", gap: 5 }}>
                  <Text style={{ fontWeight: "bold", fontSize: hp(2.2) }}>
                    {Tier}
                  </Text>
                  <Text style={{ fontSize: hp(1.8) }}>
                    Tier will be upgraded when you reach 800 Total Impacts
                  </Text>
                  <Progress.Bar
                    progress={0.3}
                    width={243}
                    height={3}
                    borderWidth={0.2}
                    backgroundColor="#ABABAB"
                  />
                </View>
              </View>
            </View>
          </Pressable>
        </View>
        <View
          style={{
            paddingTop: 10,
            paddingLeft: 20,
            gap: 10,
            paddingBottom: 15,
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", fontSize: hp(2.4) }}>
              Career Stats
            </Text>
          </View>
          <View
            style={{
              width: "95%",
              borderColor: "#000",
              borderColor: "#000",
              flexDirection: "row",
              padding: 15,
              borderRadius: 10,
              backgroundColor: "#ffff",
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
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: wp("90%"),
                display: "flex",
              }}
            >
              <View style={{ flexDirection: "column", gap: 5 }}>
                <Text style={{ fontSize: hp(2) }}>Matches</Text>
                <Text style={{ fontWeight: "bold" }}>1,666</Text>
              </View>
              <View style={{ flexDirection: "column", gap: 5 }}>
                <Text style={{ fontSize: hp(2)  }}>Contests</Text>
                <Text style={{ fontWeight: "bold" }}>2,774</Text>
              </View>
              <View style={{ flexDirection: "column", gap: 5 }}>
                <Text style={{ fontSize: hp(2)  }}>Win rate</Text>
                <Text style={{ fontWeight: "bold" }}>64%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          paddingBottom: 20,
          flexDirection: "column",
          justifyContent: "center",
          width: wp("100%"),
          alignItems: "center",
          gap: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: wp("90%"),
          }}
        >
          <View style={{ paddingBottom: 10 }}>
            <Text style={{ fontWeight: "bold", fontSize: hp(2.4)  }}>
              Recently Played
            </Text>
          </View>
          <Pressable onPress={() => navigation.navigate("ViewAll")}>
            <View>
              <Text
                style={{ fontWeight: "bold", fontSize: hp(2), color: "#7d7d7d" }}
              >
                View all
              </Text>
            </View>
          </Pressable>
        </View>
        <View style={{ gap: 10, width: wp("90%"),paddingBottom:80 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingRight: 10 }}
          >
            <View
              style={{
                gap: 10,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                overflow: "scroll",
              }}
            >
              <View
                style={{
                  width: wp("80%"),
                  flexDirection: "column",
                  gap: 3,
                  borderRadius: 12,
                  backgroundColor: "#ffff",
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
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: wp("80%"),
                    padding: 7,
                  }}
                >
                  <Text>May 07,2024</Text>
                  <Text>Cricket</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    padding: 7,
                    justifyContent: "center",
                    width: wp("80%"),
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <Image
                    source={require("../../assets/csk.png")}
                    style={{ height: 30, width: 30, borderRadius: 10,  }}
                  />
                  <Text style={{ fontWeight: "bold" }}>CSK</Text>
                  <Text style={{}}>VS</Text>
                  <Image
                    source={require("../../assets/rcb.png")}
                    style={{ height: 30, width: 30, borderRadius: 10 }}
                  />
                  <Text style={{ fontWeight: "bold" }}>RCB</Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    width: wp("85%"),
                    flexDirection: "row",
                  }}
                >
                  <Text>CSK beat RCB by 20 runs</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: wp("80%"),
                    display: "flex",
                    paddingLeft: 3,
                    paddingRight: 3,
                  }}
                >
                  <Text>
                    Teams Created <Text style={{ fontWeight: "bold" }}>1</Text>
                  </Text>
                  <Text>
                    Highest Points{" "}
                    <Text style={{ fontWeight: "bold" }}>821 (T1)</Text>
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#8AA1FF",
                    width: wp("80%"),
                    borderBottomEndRadius: 10,
                    borderBottomStartRadius: 10,
                    paddingLeft: 7,
                  }}
                >
                  <Text>Start Team : 999 points</Text>
                </View>
              </View>
              <View
                style={{
                  width: wp("80%"),
                  flexDirection: "column",
                  gap: 3,
                  borderRadius: 12,
                  backgroundColor: "#ffff",
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
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: wp("80%"),
                    padding: 7,
                  }}
                >
                  <Text>May 07,2024</Text>
                  <Text>Cricket</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    padding: 7,
                    justifyContent: "center",
                    width: wp("80%"),
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <Image
                    source={require("../../assets/csk.png")}
                    style={{ height: 30, width: 30, borderRadius: 10,  }}
                  />
                  <Text style={{ fontWeight: "bold" }}>CSK</Text>
                  <Text style={{}}>VS</Text>
                  <Image
                    source={require("../../assets/rcb.png")}
                    style={{ height: 30, width: 30, borderRadius: 10 }}
                  />
                  <Text style={{ fontWeight: "bold" }}>RCB</Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    width: wp("85%"),
                    flexDirection: "row",
                  }}
                >
                  <Text>CSK beat RCB by 20 runs</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: wp("80%"),
                    display: "flex",
                    paddingLeft: 3,
                    paddingRight: 3,
                  }}
                >
                  <Text>
                    Teams Created <Text style={{ fontWeight: "bold" }}>1</Text>
                  </Text>
                  <Text>
                    Highest Points{" "}
                    <Text style={{ fontWeight: "bold" }}>821 (T1)</Text>
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#8AA1FF",
                    width: wp("80%"),
                    borderBottomEndRadius: 10,
                    borderBottomStartRadius: 10,
                    paddingLeft: 7,
                  }}
                >
                  <Text>Start Team : 999 points</Text>
                </View>
              </View>
              <View
                style={{
                  width: wp("80%"),
                  flexDirection: "column",
                  gap: 3,
                  borderRadius: 12,
                  backgroundColor: "#ffff",
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
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: wp("80%"),
                    padding: 7,
                  }}
                >
                  <Text>May 07,2024</Text>
                  <Text>Cricket</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    padding: 7,
                    justifyContent: "center",
                    width: wp("80%"),
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <Image
                    source={require("../../assets/csk.png")}
                    style={{ height: 30, width: 30, borderRadius: 10,  }}
                  />
                  <Text style={{ fontWeight: "bold" }}>CSK</Text>
                  <Text style={{}}>VS</Text>
                  <Image
                    source={require("../../assets/rcb.png")}
                    style={{ height: 30, width: 30, borderRadius: 10 }}
                  />
                  <Text style={{ fontWeight: "bold" }}>RCB</Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    width: wp("85%"),
                    flexDirection: "row",
                  }}
                >
                  <Text>CSK beat RCB by 20 runs</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: wp("80%"),
                    display: "flex",
                    paddingLeft: 3,
                    paddingRight: 3,
                  }}
                >
                  <Text>
                    Teams Created <Text style={{ fontWeight: "bold" }}>1</Text>
                  </Text>
                  <Text>
                    Highest Points{" "}
                    <Text style={{ fontWeight: "bold" }}>821 (T1)</Text>
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#8AA1FF",
                    width: wp("80%"),
                    borderBottomEndRadius: 10,
                    borderBottomStartRadius: 10,
                    paddingLeft: 7,
                  }}
                >
                  <Text>Start Team : 999 points</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      </ScrollView>
    </View>
    


  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,

    alignItems: "center",
  },
  profilePicContainer: {
    height: 80,
    width: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "75%",

    zIndex: 1,
  },

  imageWrapper: {
    position: "relative",
    height: 100,
    width: 100,
  },
  iconBackground: {
    position: "absolute",
    bottom: 0,
    right: 0,
    
  },
  profbox: {
    flex: 1,
    display: "flex",
    width: "90%",
    alignItems: "center",
    padding: 70,
    position: "relative",
    top: 20,
    backgroundColor: "#196",

    gap: 30,
    justifyContent: "center",
    flexDirection: "column",
  },
  profileText: {
    flex: 1,
    width: "70%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  followBox: {
    flex: 1,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    width: "85%",
    alignItems: "center",
  },

  followers: {
    display: "flex",
    flexDirection: "column",
  },
  following: {
    flexDirection: "column",
  },
});
