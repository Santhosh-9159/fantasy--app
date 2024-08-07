import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Image, Pressable, TextInput } from "react-native";
import { FontAwesome5, Fontisto, Entypo, MaterialIcons, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MyinfoAndSettings = () => {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [imageUri, setImageUri] = useState();
  const [profileimg, setProfileimg] = useState("")
  const navigation = useNavigation();

 

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
     setProfileimg(result)
    console.log("Result from Image Picker:", result);
  
    if (!result.cancelled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);  
      console.log("Image URI is set to:", result.assets[0].uri); 
    }
  };
  

  const logout = async () => {
    console.log("pressed");
    await AsyncStorage.removeItem('userToken');
    navigation.navigate('login');
};


  return (
    <ScrollView >
      <View style={styles.innerContainer}>
        <View style={styles.profilePicContainer}>
        <Pressable onPress={pickImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.profilePic} />
        ) : (
          <FontAwesome5 name="user-circle" size={100} color="gray" />
        )}
        <MaterialIcons name="edit" size={24} color="black" style={styles.editIcon} />
      </Pressable>
      
        </View>
        <View
        style={{
          width: wp("100%"),
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom:15,
          gap: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),    
            marginTop: 5,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
              marginTop:20
            }}
          >
            <Text>Name</Text>
          </View>
          <View style={styles.searchSection}>
            <FontAwesome5 name="user" size={18} color="black" />
            <TextInput style={styles.input} placeholder="Name" />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
           
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
            }}
          >
            <Text>User Name</Text>
          </View>
          <View style={styles.searchSection}>
            <Entypo name="star-outlined" size={18} color="black" />
            <TextInput style={styles.input} placeholder="User Name" />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
            
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
            }}
          >
            <Text>Email</Text>
          </View>
          <View style={styles.searchSection}>
            <Fontisto name="email" size={18} color="black" />
            <TextInput style={styles.input} placeholder="Email" />
            <Pressable
            onPress={()=>navigation.navigate("EditEmail")}
            >
              <MaterialIcons
                name="edit"
                size={18}
                color="black"
                style={{ paddingRight: 15 }}
              />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
            
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
            }}
          >
            <Text>Mobile Number</Text>
          </View>
          <View style={styles.searchSection}>
            <Entypo name="mobile" size={18} color="black" />
            <TextInput style={styles.input} placeholder="Phone Number" />
            <Pressable 
            onPress={()=>navigation.navigate("EditPhoneNumber")}
            >
              <MaterialIcons
                name="edit"
                size={18}
                color="black"
                style={{ paddingRight: 15 }}
              />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
            
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
            }}
          >
            <Text>Gender</Text>
          </View>
          <View style={styles.radioSection}>
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="option1"
                status={selectedValue === "option1" ? "checked" : "unchecked"}
                onPress={() => setSelectedValue("option1")}
                color="#007BFF"
              />
              <Text style={styles.radioLabel}>Male</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="option2"
                status={selectedValue === "option2" ? "checked" : "unchecked"}
                onPress={() => setSelectedValue("option2")}
                color="#007BFF"
              />
              <Text style={styles.radioLabel}>Female</Text>
            </View>
            <View style={styles.radioButton}>
              <RadioButton.Android
                value="option3"
                status={selectedValue === "option3" ? "checked" : "unchecked"}
                onPress={() => setSelectedValue("option3")}
                color="#007BFF"
              />
              <Text style={styles.radioLabel}>Others</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
            }}
          >
            <Text>Address</Text>
          </View>
          <View style={styles.searchSection}>
            <FontAwesome5 name="address-book" size={18} color="#595959" />
            <TextInput style={styles.input} placeholder="Address" />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
            
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
            }}
          >
            <Text>City</Text>
          </View>
          <View style={styles.searchSection}>
            <MaterialCommunityIcons
              name="home-city-outline"
              size={18}
              color="black"
            />
            <TextInput style={styles.input} placeholder="City" />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
            
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: wp("100%"),
              justifyContent: "flex-start",
            }}
          >
            <Text>Pincode</Text>
          </View>
          <View style={styles.searchSection}>
            <AntDesign name="pushpino" size={18} color="black" />
            <TextInput style={styles.input} placeholder="Pincode" />
          </View>
        </View>

       
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            width: wp("90%"),
            gap:10,
            paddingTop:10
          }}
        >
         <Pressable onPress={logout} // directly reference the function
  style={{
    display: "flex",
    flexDirection: "row",
    width: wp("25%"),
    justifyContent: "center",
    gap: 10,
    alignItems:"center"
  }}
>
  <MaterialIcons name="logout" size={24} color="black" />
  <Text style={{ fontWeight: "bold" }}>LOG OUT</Text>
</Pressable>

        </View>

        <View
          style={{
            backgroundColor: "#3385ff",
            padding: 5,
            width: wp("40%"),
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
          }}
        >
          <Pressable>
            <Text style={{ fontWeight: "bold", color: "#fff" }}>
              UPDATE PROFILE
            </Text>
          </Pressable>
        </View>
      </View>
      </View>
    </ScrollView>
  );
};

export default MyinfoAndSettings;

const styles = StyleSheet.create({
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 2,
    borderColor: "#595959",
    width: wp("90%"),
    padding: 2,
  },

  input: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 0,
    color: "#424242",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: hp(2),
    color: "#333",
  },
  radioSection: {
    
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: wp("90%"),
  },
  container: {
    alignItems: 'center',
    padding: 16,
  },
  profilePicContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    
    marginBottom: 20,
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  innerContainer: {
    alignItems: 'center',
    padding: 15,
  }
});
