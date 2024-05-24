import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Bowlerscreen = () => {
  const navigation = useNavigation()

  const cskarray = [
    {
        "team_short_form": "CSK",
        "team_full_form": "Chennai Super Kings",
        "players": [
          {
            "id": "csk001",
            "name": "MS Dhoni",
            "role": "Wicketkeeper",
            "role_short_form": "Wicketkeeper",
            "dob": "1981-07-07",
            "age": 42,
            "country": "India",
            "matches": 204,
            "runs": 4632,
            "highest_score": 84,
            "average": 40.99,
            "strike_rate": 136.67,
            "image": require("../../assets/players/MS Dhoni.png"),
            "points": 100
          },
          {
            "id": "csk002",
            "name": "Suresh Raina",
            "role": "Batsman",
            "role_short_form": "Batsman",
            "dob": "1986-11-27",
            "age": 38,
            "country": "India",
            "matches": 193,
            "runs": 5491,
            "highest_score": 100,
            "average": 33.07,
            "strike_rate": 137.14,
            "image": require("../../assets/players/suresh raina.png"),
            "points": 95
          },
          {
            "id": "csk003",
            "name": "Ravindra Jadeja",
            "role": "All-rounder",
            "role_short_form": "All-rounder",
            "dob": "1988-12-06",
            "age": 35,
            "country": "India",
            "matches": 192,
            "runs": 2159,
            "highest_score": 62,
            "average": 27.76,
            "strike_rate": 130.94,
            "wickets": 120,
            "best_bowling": "5/16",
            "economy_rate": 7.6,
            "image": require("../../assets/players/ravindra jadeja.png"),
            "points": 90
          },
          {
            "id": "csk004",
            "name": "Deepak Chahar",
            "role": "Bowler",
            "role_short_form": "Bowler",
            "dob": "1992-08-07",
            "age": 32,
            "country": "India",
            "matches": 58,
            "wickets": 61,
            "best_bowling": "4/29",
            "economy_rate": 7.67,
            "image": require("../../assets/players/Deepak Chahar.png"),
            "points": 85
          },
          {
            "id": "csk005",
            "name": "Shardul Thakur",
            "role": "Bowler",
            "role_short_form": "Bowler",
            "dob": "1991-10-16",
            "age": 32,
            "country": "India",
            "matches": 49,
            "wickets": 51,
            "best_bowling": "3/19",
            "economy_rate": 8.94,
            "image": require("../../assets/players/Shardul Thakur.png"),
            "points": 80
          },
          {
            "id": "csk006",
            "name": "Faf du Plessis",
            "role": "Batsman",
            "role_short_form": "Batsman",
            "dob": "1984-07-13",
            "age": 39,
            "country": "South Africa",
            "matches": 100,
            "runs": 2661,
            "highest_score": 96,
            "average": 33.26,
            "strike_rate": 128.01,
            "image": require("../../assets/players/Faf du Plessis.png"),
            "points": 85
          },
          {
            "id": "csk007",
            "name": "Imran Tahir",
            "role": "Bowler",
            "role_short_form": "Bowler",
            "dob": "1979-03-27",
            "age": 45,
            "country": "South Africa",
            "matches": 56,
            "wickets": 82,
            "best_bowling": "4/12",
            "economy_rate": 7.96,
            "image": require("../../assets/players/Imran Tahir.png"),
            "points": 85
          },
          {
            "id": "csk008",
            "name": "Ruturaj Gaikwad",
            "role": "Batsman",
            "role_short_form": "Batsman",
            "dob": "1997-01-31",
            "age": 27,
            "country": "India",
            "matches": 31,
            "runs": 843,
            "highest_score": 88,
            "average": 31.22,
            "strike_rate": 131.41,
            "image": require("../../assets/players/Ruturaj Gaikwad.png"),
            "points": 80
          },
          {
            "id": "csk009",
            "name": "Sam Curran",
            "role": "All-rounder",
            "role_short_form": "All-rounder",
            "dob": "1998-06-03",
            "age": 25,
            "country": "England",
            "matches": 33,
            "runs": 615,
            "highest_score": 52,
            "average": 24.6,
            "strike_rate": 137.17,
            "wickets": 32,
            "best_bowling": "3/19",
            "economy_rate": 8.18,
            "image":require("../../assets/players/Sam Curran.png"),
            "points": 85
          },
          {
            "id": "csk010",
            "name": "Moeen Ali",
            "role": "All-rounder",
            "role_short_form": "All-rounder",
            "dob": "1987-06-18",
            "age": 36,
            "country": "England",
            "matches": 35,
            "runs": 309,
            "highest_score": 25,
            "average": 20.6,
            "strike_rate": 135.68,
            "wickets": 16,
            "best_bowling": "2/18",
            "economy_rate": 7.13,
            "image": require("../../assets/players/Moeen Ali.png"),
            "points": 80
          },
          {
            "id": "csk011",
            "name": "Shivam Dube",
            "role": "All-rounder",
            "role_short_form": "All-rounder",
            "dob": "1993-06-26",
            "age": 30,
            "country": "West Indies",
            "matches": 65,
            "runs": 1502,
            "strike_rate": 146.68,
            "best_bowling": "2/15",
            "economy_rate": 7.13,
            "image": require("../../assets/players/Shivam Dube.png"),
            "points": 80
          },
          {
            "id": "csk012",
            "name": "Tushar Deshpande",
            "role": "Bowler",
            "role_short_form": "Bowler",
            "dob": "15 May 1995",
            "age": 29,
            "country": "India",
            "matches": 36,
            "runs": 1243,
            "strike_rate": 150.00,
            "best_bowling": "4/27",
            "economy_rate": 9.65,
            "image": require("../../assets/players/Tushar Deshpande.png"),
            "points": 85
          }
        ]
      }
]

const Bowlers = cskarray[0].players.filter(player => player.role === "Bowler");


  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <View style={{ padding: 5 }}>
          <Text style={{fontSize:12}}>Pick 1-8 Bowlers</Text>
        </View>


        <View
          style={{
            backgroundColor: "#dee4fa",
            width: "100%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12 }}>Player</Text>
            </View>
            <View
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12 }}>Points</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "30%",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 12 }}>Selected By %</Text>
            </View>
          </View>
        </View>

        <View  style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap:10
          }}>
        

        {Bowlers.map((player) => (
     <Pressable onPress={()=> navigation.navigate("PlayerInfo")}
     style={{
       display: "flex",
       flexDirection: "row",
       width: "100%",
       justifyContent: "center",
       alignItems: "center",
       borderBottomWidth:0.5,
       borderColor:"#ababab",
       paddingBottom:10
     }}
   >
     <View
       style={{
         display: "flex",
         flexDirection: "row",
         width: "48%",
         gap: 10,
       }}
     >
       <View
         style={{
           padding: 2,
           backgroundColor: "#fff",
           overflow: "hidden",
           width: "30%",
           position:"relative",
           justifyContent: "center",
               alignItems: "center",
         }}
       >
         <Image
            source={player.image}
           style={{ width: 50, height: 50, borderRadius: 30 }}
         />
         <View style={{ paddingLeft: 5,paddingRight: 5,
               backgroundColor: "#7f7f7f",
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
               width: "100%",
               borderRadius:8,
               bottom:0,
               position:'absolute',}}>
           <Text
             style={{
               fontSize: 10,
               color:"#fff",
             }}
           >
             CSK
           </Text>
         </View>
       </View>
       <View
         style={{
           width: "70%",
           display: "flex",
           flexDirection: "column",
           justifyContent: "center",
           gap: 3,
         }}
       >
         <View style={{}}>
           <Text style={{ fontSize: 12, fontWeight: "bold" }}>
             {player.name}
           </Text>
         </View>
         <View style={{}}>
           <Text style={{ fontSize: 12 }}>Played Last Match</Text>
         </View>
       </View>
     </View>
      <View
       style={{
         width: "20%",
         display: "flex",
         flexDirection: "row",
         justifyContent: "center",
         alignItems: "center",
       }}
     >
       <Text style={{fontWeight:"bold"}}>{player.points}</Text>
     </View>
     <View
       style={{
         width: "30%",
         display: "flex",
         flexDirection: "row",
         justifyContent: "center",
         alignItems: "center",
       }}
     >
       <View
         style={{
           width: "70%",
           display: "flex",
           flexDirection: "row",
           justifyContent: "center",
         }}
       >
         <Text style={{fontWeight:"bold"}}>80%</Text>
       </View>
       <View style={{ width: "30%" }}>
         <Feather name="plus-square" size={24} color="#35b367" />
       </View>
     </View>
   </Pressable>
  ))}

        </View>


      </View>
    </ScrollView>
  );
}

export default Bowlerscreen

const styles = StyleSheet.create({})