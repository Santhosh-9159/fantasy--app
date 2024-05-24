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

  const { Tier,setTier} = useSport();
  const { ImpactScore} = useSport();

  
if(ImpactScore>=0 && ImpactScore <=200){
  setTier('BRONZE')
}
if(ImpactScore>=201 && ImpactScore <=300){
  setTier('SILVER')
}
if(ImpactScore>=301 && ImpactScore <=400){
  setTier('GOLD')
}
if(ImpactScore>=401 && ImpactScore <=500){
  setTier('DIAMOND')
}
if(ImpactScore>=501 && ImpactScore <=800){
  setTier('THE STAR')
}
if(ImpactScore>=801 && ImpactScore <=1000){
  setTier('LEGEND')
}

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingTop: 50,
        }}
      >
        <View
          style={{
            width: "100%",

            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              paddingTop: 60,
              backgroundColor: "#ECECEC",
              width: "90%",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ padding: 5 }}>
                <Text style={{ fontWeight: "900", fontSize: 17 }}>
                  shivam11s
                </Text>
                <Text style={{ fontSize: 15 }}>Shivam11s</Text>
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
                  width: "100%",
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
                    <Text style={{ fontWeight: "900", fontSize: 17 }}>
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
                    <Text style={{ fontWeight: "900", fontSize: 17 }}>
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
                  <FontAwesome5 name="user-circle" size={100} color="gray" />
                )}

                <View style={styles.iconBackground}>
                  <View>
                    <MaterialIcons
                      name="camera-alt"
                      size={22}
                      color="white"
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
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>Tier</Text>
          </View>
         <Pressable onPress={()=>navigation.navigate('Tire Screen')}>
         <View
            style={{
              width: "95%",
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
              padding: 7,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                width: "20%",
                alignItems: "center",
                justifyContent:"center",
                display:"flex"
              }}
            >
               {
                Tier == 'BRONZE' && <Image source={require('../../assets/Bronze.png')} style={{ height: 50, width: 40 }}/>
              }
              {
                Tier == 'SILVER' && <Image source={require('../../assets/Silver.png')} style={{ height: 50, width: 40 }}/>
              }
              {
                Tier == 'GOLD' && <Image source={require('../../assets/Gold.png')} style={{ height: 50, width: 40 }}/>
              }
              {
                Tier == 'DIAMOND' && <Image source={require('../../assets/Diamond.png')} style={{ height: 50, width: 40 }}/>
              }
              {
                Tier == 'THE STAR' && <Image source={require('../../assets/starplace.png')} style={{ height: 50, width: 40 }}/>
              }
              {
                Tier == 'LEGEND' && <Image source={require('../../assets/Legend.png')} style={{ height: 50, width: 40 }}/>
              }
             
            </View>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                width: "80%",
              }}
            >
              <View style={{ flexDirection: "column", gap: 5 }}>
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>{Tier}</Text>
                <Text style={{ fontSize: 13 }}>
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
        <View style={{ paddingTop: 10, paddingLeft: 20, gap: 10 }}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Career Stats
            </Text>
          </View>
          <View
            style={{
              width: "95%",
              borderColor: "#000",
              borderColor: "#000",
              flexDirection: "row",
              padding: 7,
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
                width: "100%",
                display: "flex",
              }}
            >
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 14 }}>Matches</Text>
                <Text style={{ fontWeight: "bold" }}>1,666</Text>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 14 }}>Contests</Text>
                <Text style={{ fontWeight: "bold" }}>2,774</Text>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ fontSize: 14 }}>Win rate</Text>
                <Text style={{ fontWeight: "bold" }}>64%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          alignItems: "center",
          gap: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <View>
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Recently Played
            </Text>
          </View>
          <Pressable onPress={()=>navigation.navigate('ViewAll')}>
            <View>
              <Text style={{ fontWeight: "bold", fontSize: 17 }}>View all</Text>
            </View>
          </Pressable>
        </View>
        <View style={{ gap: 10, width: "90%" }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{  paddingRight: 10 }}
          >
            <View
              style={{
                gap: 10,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                overflow:"scroll"
              }}
            >
              <View
                style={{
                  width: "40%",
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
                    width: "100%",
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
                    width: "90%",
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <Image
                    source={require("../../assets/csk.png")}
                    style={{ height: 20, width: 30, borderRadius: 10 }}
                  />
                  <Text style={{ fontWeight: "bold" }}>CSK</Text>
                  <Text>VS</Text>
                  <Image
                    source={require("../../assets/rcb.png")}
                    style={{ height: 20, width: 30, borderRadius: 10 }}
                  />
                  <Text style={{ fontWeight: "bold" }}>RCB</Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <Text>CSK beat RCB by 20 runs</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    width: "100%",
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
                    width: "100%",
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
                  width: "40%",
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
                      elevation: 10,
                    },
                  }),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
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
                    width: "90%",
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <Image
                    source={require("../../assets/csk.png")}
                    style={{ height: 20, width: 30, borderRadius: 10 }}
                  />
                  <Text style={{ fontWeight: "bold" }}>CSK</Text>
                  <Text>VS</Text>
                  <Image
                    source={require("../../assets/rcb.png")}
                    style={{ height: 20, width: 30, borderRadius: 10 }}
                  />
                  <Text style={{ fontWeight: "bold" }}>RCB</Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <Text>CSK beat RCB by 20 runs</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
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
                    width: "100%",
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
                  width: "40%",
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
                      elevation: 10,
                    },
                  }),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
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
                    width: "90%",
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <Image
                    source={require("../../assets/csk.png")}
                    style={{ height: 20, width: 30, borderRadius: 10 }}
                  />
                  <Text style={{ fontWeight: "bold" }}>CSK</Text>
                  <Text>VS</Text>
                  <Image
                    source={require("../../assets/rcb.png")}
                    style={{ height: 20, width: 30, borderRadius: 10 }}
                  />
                  <Text style={{ fontWeight: "bold" }}>RCB</Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    width: "100%",
                    flexDirection: "row",
                  }}
                >
                  <Text>CSK beat RCB by 20 runs</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
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
                    width: "100%",
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
    backgroundColor: "#000", // Optional: Add a background color to the icon
    borderRadius: 44, // To match the circular shape
    paddingLeft: 2,
    borderWidth: 3,
    opacity: 0.7,
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