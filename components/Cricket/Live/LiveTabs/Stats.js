import react from "react";
import { View, Text, Image, ScrollView } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default function Stats(){
    return(
        <ScrollView>
       <View style={{gap:8,width: wp("100%"),flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <View style={{width: wp("95%"),}}>
            <Text style={{paddingTop :5}}> Showing Player stats by Match</Text>
        </View>


        <View style={{width:wp("100%"), flexDirection:'column',justifyContent:'center',backgroundColor:'#d6d6d6',alignItems:'center'}}>
           <View style={{width: wp("100%"), flexDirection:'row',alignItems:'center',padding:5}}>
                <View style={{width: wp("36%"), paddingLeft:6}}>
                    <Text>Player</Text>
                 </View>
            <View  style={{width: wp("17%")}}>
                <Text>Points</Text>
            </View>
            <View style={{width: wp("15%")}}>
                <Text>SB%</Text>
                </View>
            <View style={{width:wp("15%")}}>
                <Text>C%</Text>
                </View>
            <View style={{width: wp("15%")}}>
                <Text>VC%</Text>
                </View>
           </View>
           
           
            
        </View>

        <View style={{width:wp("100%"), flexDirection:'row',alignItems:'center', backgroundColor:'#E4E8FF'}}>
            <View style={{flexDirection:'row', width: wp('38%'), }}>
                <Image source={require("../../../../assets/players/ravindra jadeja.png")} style={{height:55, width:60}}/>
                <View style={{flexDirection:'column',gap:2,paddingTop:10 }}>
                   <Text style={{fontWeight:'bold',}}>R Gaikwad</Text>
                   <Text>CSK - BAT</Text>
                </View>
            </View>
            <View style={{width:wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start"}}>
                <Text>
                    100
                </Text>
            </View>

            <View style={{width:wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start"}}>
                <Text>
                    90%
                </Text>
            </View>

            <View style={{width:wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start"}}>
                <Text>
                   25% 
                </Text>
            </View>

            <View style={{width:wp("17%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start"}}>
                <Text>
                    100%
                </Text>
            </View>
        
       </View>
       <View style={{width: wp("100%"), flexDirection:'row',alignItems:'center', backgroundColor:'#E4E8FF'}}>
            <View style={{flexDirection:'row', width: wp('38%'), }}>
                <Image source={require("../../../../assets/players/ravindra jadeja.png")} style={{height:55, width:60}}/>
                <View style={{flexDirection:'column',gap:2,paddingTop:10 }}>
                   <Text style={{fontWeight:'bold',}}>R Gaikwad</Text>
                   <Text>CSK - BAT</Text>
                </View>
            </View>
            <View style={{width:wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start"}}>
                <Text>
                    100
                </Text>
            </View>

            <View style={{width: wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start"}}>
                <Text>
                    90%
                </Text>
            </View>

            <View style={{width: wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start"}}>
                <Text>
                   25% 
                </Text>
            </View>

            <View style={{width: wp("17%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start"}}>
                <Text>
                    100%
                </Text>
            </View>
        
       </View>

       <View style={{width:wp("100%"), flexDirection:'row',alignItems:'center', }}>
            <View style={{flexDirection:'row', width: wp('38%'), }}>
                <Image source={require("../../../../assets/players/ravindra jadeja.png")} style={{height:55, width:60}}/>
                <View style={{flexDirection:'column',gap:2,paddingTop:10 }}>
                   <Text style={{fontWeight:'bold',}}>R Gaikwad</Text>
                   <Text>CSK - BAT</Text>
                </View>
            </View>
            <View style={{width:wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start"}}>
                <Text>
                    100
                </Text>
            </View>

            <View style={{width:wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start"}}>
                <Text>
                    90%
                </Text>
            </View>

            <View style={{width:wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start"}}>
                <Text>
                   25% 
                </Text>
            </View>

            <View style={{width:wp("15%"),alignItems:'center',flexDirection:"row",display:"flex",justifyContent:"flex-start"}}>
                <Text>
                    100%
                </Text>
            </View>
        
       </View>


      
       </View>
       </ScrollView>
    );
}