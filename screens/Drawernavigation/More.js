import React from 'react';
import { View, Text,Image, Pressable} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';


export default function More(){
    const navigation = useNavigation();
 
    return (
        <View>
            <View style={{width:wp('100%'), justifyContent:'center', alignItems:'center',display:'flex', flexDirection:'row',padding:10}}>
                <View style={{width: wp('15%')}}>
                <Image source={require( "../../assets/Legality.png")}  
              style={{ 
                  width: wp("10%"),
                  height: 30,
                  resizeMode:'contain'
                }}/>
                </View>
                <View style={{width: wp('70%')}}>
                    <Text style={{fontSize: hp(2), fontWeight:'600'}}>
                        Legality
                    </Text>
                </View>

                <View  style={{width: wp('10%')}}>
                <Pressable onPress={() => navigation.navigate("Legality")}>
                <AntDesign name="right" size={18} color="black" />
                </Pressable>
                </View>
            </View>
            <View style={{ borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    width: wp('100%'),}}>

            </View>



            <View style={{width:wp('100%'), justifyContent:'center', alignItems:'center',display:'flex', flexDirection:'row',padding:10}}>
                <View style={{width: wp('15%')}}>
                <Image source={require( "../../assets/TermsandConditions.png")}  
              style={{ 
                  width: wp("10%"),
                  height: 30,
                  resizeMode:'contain'
                }}/>
                </View>
                <View style={{width: wp('70%')}}>
                    <Text style={{fontSize: hp(2), fontWeight:'600'}}>
                       Terms and Conditions
                    </Text>
                </View>

                <View  style={{width: wp('10%')}}>
                <Pressable onPress={() => navigation.navigate("TermsandCondition")}>
                <AntDesign name="right" size={18} color="black" />
                </Pressable>
                </View>
            </View>
            <View style={{ borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    width: wp('100%'),}}>

            </View>
        </View>
      );
    }
  







    