// PaymentScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  LayoutAnimation,
  Platform,
  UIManager,
  TextInput,
} from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const PaymentScreen = () => {


  const [selectedValue, setSelectedValue] = useState(false);
  const [cardSelect, setCardSelect] = useState(false);
  const [cardDetails, setCardDetails] = useState(false);



  const toggleDropdown = () => {
    // Animate the layout changes
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCardSelect(!cardSelect);
  };
  const cardDetailsbtn = () => {
    // Animate the layout changes
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setCardDetails(!cardDetails);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.amountText}>AMOUNT TO PAY: ₹100</Text>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>PREFERRED</Text>
        <View style={styles.optionButton}>
          <Image source={require("../../assets/Google Pay.png")}
          style={{width:30,height:30}}
          />
          {selectedValue ? (
            <Text
              style={{
                color: "#000",
                fontSize: 16,
                marginLeft: 10,
                flex: 1,
                fontWeight: "700",
              }}
            >
              Google Pay
            </Text>
          ) : (
            <Text style={styles.payButtonText}>Google Pay</Text>
          )}
          <Pressable
            onPress={() => {
              setSelectedValue(!selectedValue);
            }}
          >
            {selectedValue ? (
              <AntDesign
                name="checkcircleo"
                size={18}
                color="#fff"
                style={{ backgroundColor: "#196", borderRadius: 40 }}
              />
            ) : (
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#fff",
                  borderRadius: 40,
                  borderWidth: 1,
                }}
              ></View>
            )}
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              width: "90%",
              backgroundColor: "#29a329",
              padding: 5,
              borderRadius: 5,

              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Text style={{ color: "#fff" }}>Pay Via Google Pay</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>PAY BY ANY UPI APP</Text>
        <View style={styles.optionRow}>
          <TouchableOpacity style={styles.iconButton}>
          <Image source={require("../../assets/Paytm.png")}
          style={{width:60,height:60}}
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
          <Image source={require("../../assets/Apple Pay.png")}
          style={{width:60,height:60}}
          />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
          <Image source={require("../../assets/Apple Pay.png")}
          style={{width:60,height:60}}
          />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionContainer}>
       <View style={{display:"flex",flexDirection: 'row',width:"100%",justifyContent: 'space-between',}}>
       <Text style={styles.sectionTitle}>DEBIT/CREDIT CARDS</Text>
       <TouchableOpacity onPress={cardDetailsbtn} style={styles.addButton}>
         <Text style={styles.addButtonText}>ADD</Text>
       </TouchableOpacity>
       </View>

       {cardDetails && <View style={{backgroundColor:"#fff",padding:5,display:"flex",flexDirection: 'column',gap:5,justifyContent:"center",alignItems:"center"}}>
            <View style={{width:"100%",padding:2}}>
            <TextInput placeholderTextColor="#000"  style={{backgroundColor:"#d9d9d9",padding:3,paddingLeft:10,borderRadius:5}}
               placeholder="NAME ON CARD"/>
            </View>
            <View style={{width:"100%",padding:2}}>
            <TextInput placeholderTextColor="#000"  style={{backgroundColor:"#d9d9d9",padding:3,paddingLeft:10,borderRadius:5}}
              placeholder="CARD NUMBER"/>
            </View>
            <View style={{display:"flex",flexDirection: 'row',justifyContent:"space-between",alignItems:"center",width:"100%",marginBottom:5}}>
            <View style={{width:"45%",}}>
            <TextInput placeholderTextColor="#000"  style={{backgroundColor:"#d9d9d9",padding:3,paddingLeft:10,borderRadius:5}}
              placeholder="EXPIRY (MM/YY)"/>
            </View>
            <View style={{width:"45%"}}>
            <TextInput placeholderTextColor="#000"  style={{backgroundColor:"#d9d9d9",padding:3,paddingLeft:10,borderRadius:5}}
              placeholder="CVV"/>
            </View>
            </View>
            <Pressable style={{width:"100%",backgroundColor:"#35b267",padding:7,borderRadius:5,display:"flex",flexDirection: 'row',justifyContent:"center",alignItems:"center"}}>
              <Text style={{color:"#fff",fontWeight:"800",fontSize:14}}>Add 100</Text>
            </Pressable>
       </View>}
       
       
        <View style={{}}>
          <TouchableOpacity style={styles.cardOption}>
         <View style={{display:"flex",flexDirection: 'row',justifyContent:"center",alignItems:"center"}}>
         <View style={{width:"10%",backgroundColor:"#fff",}}>
          <FontAwesome name="cc-visa" size={24} color="purple" />
          </View>

            <View style={{display:"flex",flexDirection: 'column',justifyContent:"center",alignItems:"center",width:"90%",backgroundColor:"#fff"}}>
            <View style={{display:"flex",flexDirection: 'row',justifyContent:"space-between",alignItems:"center",width:"100%"}}>
            <View style={{display:"flex",flexDirection: 'column',gap:0}}>
            <Text style={styles.cardText}>Axis Credit card</Text>
            <Text style={styles.cardText}>xxxx xxxx xxxx 9890</Text>
            </View>
            <Pressable
                     onPress={toggleDropdown}

          >
            {cardSelect ? (
              <AntDesign
                name="checkcircleo"
                size={18}
                color="#fff"
                style={{ backgroundColor: "#196", borderRadius: 40 }}
              />
            ) : (
              <View
                style={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#fff",
                  borderRadius: 40,
                  borderWidth: 1,
                }}
              ></View>
            )}
          </Pressable>
            </View>
            
            </View>
           
         </View>
         
         {cardSelect ?  <View style={{display:"flex",flexDirection: 'row',width:"100%",justifyContent:"flex-end",alignItems:"flex-end",padding:5}}>
             <View style={{display:"flex",flexDirection: 'row',width:"90%",justifyContent:"space-between",alignItems:"center"}}>
             <Pressable style={{padding:5,backgroundColor:"#d9d9d9",display:"flex",flexDirection: 'row',justifyContent:"flex-start",alignItems:"center",width:"45%",borderRadius:4}}>
              <View>
                <Text>CVV</Text>
              </View>
              </Pressable>
              <Pressable style={{padding:5,backgroundColor:"#35b267",display:"flex",flexDirection: 'row',justifyContent:"center",alignItems:"center",width:"45%",borderRadius:4}}>
              <View>
                <Text style={{color:"#fff",fontWeight:"700"}}>Add 100</Text>
              </View>
              </Pressable>
             </View>
            </View>: null}
            
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>WALLETS</Text>
        <View style={styles.optionRow}>
          <TouchableOpacity style={styles.linkButton}>
            <FontAwesome name="cc-paypal" size={24} color="black" />
            <Text style={styles.linkText}>PayTM Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkButton}>
            <FontAwesome name="credit-card" size={24} color="black" />
            <Text style={styles.linkText}>PhonePe Wallet</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>NET BANKING</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>VIEW ALL</Text>
        </TouchableOpacity>
        <View style={styles.optionRow}>
          <TouchableOpacity style={styles.bankButton}>
            <Entypo name="credit" size={24} color="black" />
            <Text style={styles.bankText}>Axis Bank</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bankButton}>
            <Entypo name="credit" size={24} color="black" />
            <Text style={styles.bankText}>Axis Bank</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bankButton}>
            <Entypo name="credit" size={24} color="black" />
            <Text style={styles.bankText}>Axis Bank</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FfF",
  },
  amountText: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  sectionContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#ffff",
    borderRadius: 5,
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    borderColor:"#d9d9d9",
    gap:5
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "bold",
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",

    padding: 5,
    borderRadius: 5,
    justifyContent: "space-between",
    gap:10
  },
  payButtonText: {
    color: "#000",
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    
    flex: 1,
    marginHorizontal: 5,
  },
  addButton: {
   
    
  },
  addButtonText: {
    color: "#29a329",
    fontSize: 14,
  },
  cardOption: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    // borderRadius: 5,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    justifyContent: "space-between",
    flex: 1,
    // marginHorizontal: 5,
    width:"100%"
  },
  cardText: {
    fontSize: 14,
    marginLeft: 10,
  },
  linkButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    justifyContent: "space-between",
    flex: 1,
    marginHorizontal: 5,
  },
  linkText: {
    fontSize: 14,
    marginLeft: 10,
  },
  viewAllButton: {
    alignSelf: "flex-end",
    padding: 5,
  },
  viewAllText: {
    color: "#3385ff",
    fontSize: 14,
  },
  bankButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#F0F0F0",
    flex: 1,
    marginHorizontal: 5,
  },
  bankText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },
});

export default PaymentScreen;
