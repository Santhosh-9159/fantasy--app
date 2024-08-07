import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Offers = () => {
  return (
    <ScrollView>
     <View style={{width: wp("100%"),
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      paddingTop:10,
      borderBottomWidth:1,
      borderBottomColor:"#CCCCCC",
      padding:10}}>

     <View style={{width: wp("93%"),flexDirection:"row"}}>
        <View style={{width: wp("22%")}}>
            <View>
                <Image source={require('../../assets/Discount.png')} style={{height:55,width:55}}/>
            </View>
        </View>
        <View style={{width: wp("70%"),flexDirection:"column",gap:5}}>
           <View style={{flexDirection:"row",width: wp("69%"),display:"flex",justifyContent:"space-between"}}>
            <Text style={{fontWeight:"bold"}}>You’ve got 10% Discount</Text>
            <Text style={{color:"#4D4D4D"}}>10 hours ago</Text>
           </View>
           <View>
             <Text style={{fontSize: hp(1.8)}}>Congratulation Shivam, you discount and join your Favorite contests</Text>
           </View>
        </View>
        
     </View>
    </View>
     <View style={{width: wp("100%"),
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      paddingTop:10,
      borderBottomWidth:1,
      borderBottomColor:"#CCCCCC",
      padding:10}}>

     <View style={{width: wp("93%"),flexDirection:"row"}}>
        <View style={{width:"25%"}}>
            <View>
                <Image source={require('../../assets/Discount.png')} style={{height:55,width:55}}/>
            </View>
        </View>
        <View style={{width: wp("70%"),flexDirection:"column",gap:5}}>
           <View style={{flexDirection:"row",width: wp("69%"),display:"flex",justifyContent:"space-between"}}>
            <Text style={{fontWeight:"bold"}}>You’ve got 10% Discount</Text>
            <Text style={{color:"#4D4D4D"}}>10 hours ago</Text>
           </View>
           <View>
             <Text style={{fontSize: hp(1.8)}}>Congratulation Shivam, you discount and join your Favorite contests</Text>
           </View>
        </View>
        
     </View>
    </View>
     <View style={{width: wp("100%"),
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      paddingTop:10,
      borderBottomWidth:1,
      borderBottomColor:"#CCCCCC",
      padding:10}}>
     <View style={{width: wp("93%"),flexDirection:"row"}}>
        <View style={{width: wp("22%")}}>
            <View>
                <Image source={require('../../assets/Discount.png')} style={{height:55,width:55}}/>
            </View>
        </View>
        <View style={{width: wp("70%"),flexDirection:"column",gap:5}}>
           <View style={{flexDirection:"row",width: wp("69%"),display:"flex",justifyContent:"space-between"}}>
            <Text style={{fontWeight:"bold"}}>You’ve got 10% Discount</Text>
            <Text style={{color:"#4D4D4D"}}>10 hours ago</Text>
           </View>
           <View>
             <Text style={{fontSize: hp(1.8)}}>Congratulation Shivam, you discount and join your Favorite contests</Text>
           </View>
        </View>
        
     </View>
    </View>
     <View style={{width: wp("100%"),display:"flex",flexDirection:"row",justifyContent:"center",paddingTop:10,borderBottomWidth:1,borderBottomColor:"#CCCCCC",padding:10}}>
     <View style={{width: wp("93%"),flexDirection:"row"}}>
        <View style={{width:"25%"}}>
            <View>
                <Image source={require('../../assets/Discount.png')} style={{height:55,width:55}}/>
            </View>
        </View>
        <View style={{width: wp("70%"),flexDirection:"column",gap:5}}>
           <View style={{flexDirection:"row",width: wp("69%"),display:"flex",justifyContent:"space-between"}}>
            <Text style={{fontWeight:"bold"}}>You’ve got 10% Discount</Text>
            <Text style={{color:"#4D4D4D"}}>10 hours ago</Text>
           </View>
           <View>
             <Text style={{fontSize:13}}>Congratulation Shivam, you discount and join your Favorite contests</Text>
           </View>
        </View>
        
     </View>
    </View>
    </ScrollView>
  )
}

export default Offers

const styles = StyleSheet.create({})