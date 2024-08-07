import React from "react";
import { Image, Text, View, ScrollView, Pressable } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const master = require("../../assets/master.png");
const maestro = require("../../assets/maestro.png");
const visa = require("../../assets/visa.png");
const rupay = require("../../assets/rupay.png");
const amex = require("../../assets/amex.png");

const ManagePayments = () => {
  const cardArray = [
    { img: master },
    { img: maestro },
    { img: visa },
    { img: rupay },
    { img: amex },
  ];

  return (
    <ScrollView>
      <View
        style={{
          display: "flex", 
          flexDirection: "column",
          width: wp("100%"),
          gap: 5,
        }}
      >
        <View
          style={{
            padding: 10,
            backgroundColor: "#dee0df",
          }}
        >
          <Text style={{ fontWeight: "500", fontSize:hp(2) }}>Debit/Credit Cards</Text>
        </View>

        <View
          style={{
            padding: 10,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Text style={{ fontSize: hp(1.7) }}>
            Add a card for convenient payments from payment options
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 5,
            }}
          >
            {cardArray.map((item, id) => (
              <View key={id}>
                <Image
                  source={item.img}
                  style={{
                    width: wp(10),
                    height: hp(5),
                    resizeMode: "contain",
                  }}
                />
              </View>
            ))}
          </View>
        </View>

        <View style={{  backgroundColor: "#fff"}}>
          <View style={{
                  display: "flex",
                  flexDirection: "column",    
                  width: wp("100%"),
                  backgroundColor:"#dee0df"
                }}>
            <Text style={{padding: 10,}}>Wallets</Text>
          </View>
          <View  style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent:"center",
                  alignItems:"center",
                  width:wp("100%"),
                  backgroundColor:"#fff",padding: 10,
                  gap:15,
                  paddingTop:20
                }}>
            <Pressable>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent:"space-between",
                  alignItems:"center",
                  width:wp("95%"),
                  paddingLeft:10,
                  paddingRight:10
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  justifyContent:"center",
                  alignItems:"center",
                  gap:15

                  }}
                >
                  <View>
                    <Image
                      source={require("../../assets/amazonpay.png")}
                      style={{
                        width: wp(12),
                        height: hp(7),
                        borderRadius: 40,
                      }}
                    />
                  </View>
                  <View>
                    <Text>Amazon Pay</Text>
                  </View>
                </View>
                <View>
                <Text style={{color:"blue"}}>Link Account</Text>
                </View>
              </View>
            </Pressable>


            <Pressable>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent:"space-between",
                  alignItems:"center",
                  width: wp("95%"),
                  paddingLeft:10,
                  paddingRight:10
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  justifyContent:"center",
                  alignItems:"center",
                  gap:15

                  }}
                >
                  <View>
                    <Image
                      source={require("../../assets/Phone Pe.png")}
                      style={{
                        width: wp(12),
                        height: hp(7),
                        borderRadius: 40,
                      }}
                    />
                  </View>
                  <View>
                    <Text>PhonePe</Text>
                  </View>
                </View>
                <View>
                  <Text style={{color:"blue"}}>Link Account</Text>
                </View>
              </View>
            </Pressable>

            <Pressable>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent:"space-between",
                  alignItems:"center",
                  width: wp("95%"),
                  paddingLeft:10,
                  paddingRight:10
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  justifyContent:"center",
                  alignItems:"center",
                  gap:15

                  }}
                >
                  <View>
                    <Image
                      source={require("../../assets/mobikwik.png")}
                      style={{
                        width: wp(12),
                        height: hp(7),
                        borderRadius: 40,
                      }}
                    />
                  </View>
                  <View>
                    <Text>mobikwik</Text>
                  </View>
                </View>
                <View>
                  <Text style={{color:"blue"}}>Link Account</Text>
                </View>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ManagePayments;