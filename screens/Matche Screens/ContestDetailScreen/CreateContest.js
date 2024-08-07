import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable , Image} from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import DashedLine from 'react-native-dashed-line';
import { Switch } from '@rneui/themed';
import { ScrollView } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const SwitchComponent = () => {
    const [checked, setChecked] = useState(false);
  
    return (
      <View style={styles.switchView}>
        <Switch value={checked} onValueChange={() => setChecked(!checked)} />
      </View>
    );
  };

export default function CreateContest({ navigation }){
    return(
        

       
        <View style={{}}>

            <View style={{backgroundColor:'#3E57C4',justifyContent:'flex-start',alignItems:'center',display:'flex',flexDirection:'row', width:wp("100%"), height:hp(13),paddingTop:25 }}>
                <View style={{display:'flex',width:wp('13%'),paddingLeft:11}}>
                <Pressable onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={34} color="white" />
                    </Pressable>
                </View>
                <View>
                    <Text style={{color:'#fff',fontWeight:'bold',fontSize:hp(1.9)}}>
                        CSK vs RCB
                    </Text>
                    <Text style={{color:'#fff',fontSize:hp(1.6)}}>
                       21M 30s left
                    </Text>

                </View>
            </View>
            <ScrollView stye={{height:hp(100)}}>
                <View >

            <View style={{backgroundColor:'#F2F2F2',justifyContent:'space-between',alignItems:'center',display:'flex',flexDirection:'row', width:wp('100%'), height:hp(9) }}>
                <View style={{width:wp('85%'),paddingLeft:17,}}>
                <Text style={{color:'#6B6B6B',fontSize:hp(1.8)}}>
                        Contest Name
                    </Text>
                    <Text style={{color:'#000',fontSize:hp(2),fontWeight:'bold'}}>
                       Shivam's Contest
                    </Text>

                </View>
                <View style={{width:wp('14%')}}>
                <MaterialCommunityIcons name="pencil-outline" size={30} color='#6B6B6B' />
                </View>
            </View>
            
            <View style={{width:'100%', display:'flex',justifyContent:'center',alignItems:'center',paddingTop:10}}>
                <Pressable style={styles.btn}>
                    <View style={{width:wp('100%'),display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{color:'#6B6B6B',width:wp('50%'),fontSize:hp(1.9)}}>
                        Entry Fee
                    </Text>
                    <Text style={{width:wp('20%'),fontWeight:'800',fontSize:23,paddingLeft:30}} >₹</Text>
                    <View  style={{justifyContent:'center',alignItems:'center',width:'100%',}} >
                    <Text style={{width:wp('100%'),fontWeight:'800',fontSize:hp(3.2),textDecorationLine:'underline',}}>100</Text>
                    </View>
                    
                    </View>
                   
                </Pressable>
                
            </View>

            <View style={{display:'flex',flexDirection:'row',width:wp('100%'),justifyContent:'center',alignItems:'center',paddingTop:5,rowGap:2}}>
                <View style={{width:wp('45%'),padding:8}}>
                <Pressable style={styles.button}>
                    <View style={{width:wp('32%'),display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{color:'#6B6B6B',width:wp('25%'),fontWeight:'500',fontSize:hp(1.9)}}>
                        Spots
                    </Text>
                    <Text style={{width:wp('55%'),fontWeight:'800',fontSize:23,textDecorationLine:'underline',}}>10</Text>
                    </View>
                   
                </Pressable>
                </View>
                <View style={{width:wp('3%')}}>

                </View>

                <View style={{width:wp('45%'),padding:8}}>
                <Pressable style={styles.button}>
                    <View style={{width:wp('30%'),display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{color:'#6B6B6B',width:wp('28%'),fontWeight:'500',fontSize:hp(1.9)}}>
                        Winners
                    </Text>
                    <Text style={{width:wp('55%'), fontWeight:'800',fontSize:23,textDecorationLine:'underline'}}>5</Text>
                    </View>
                   
                </Pressable>
                </View>

            </View>


            <View style={{display:'flex',width:wp('100%'), justifyContent:'center',alignItems:'center',flexDirection:'row',}}>
                <View style={{width:wp('75%'),justifyContent:'center', alignItems:'flex-start'}}>
                    <Text style={{fontWeight:'600',fontSize:hp(2),color:'#6B6B6B',}}>
                        Allow players to join with multiple teams
                    </Text>
                </View>

                <View>
                    <SwitchComponent />
                </View>
            </View>

            <View style={{ padding: 16,  width:wp('98%') }}>
           
            <DashedLine dashLength={8} dashThickness={2} dashColor='#D3D3D3' dashGap={9} />
            </View>

            <View style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly',alignItems:'center',width:wp('100%'),paddingTop:18}}>
            <View style={{width:wp('60%')}}>
            <Text style={{fontSize:hp(2.5), fontWeight:'bold'}}>
                  Max Prize Pool
            </Text>
            </View>
            <View style={{width:wp('30%'),paddingLeft:50}}>
            <Text style={{color:'#4D4D4D',fontSize:hp(2.5),fontWeight:'800'}}>
                    ₹840
            </Text>
            </View>
            </View>

               

           <View style={{width:wp('100%'),display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',paddingTop:15,}}>
            <View style={{width:wp('90%'), borderWidth:1, borderColor:'#CCCCCC',flexDirection:'column', borderRadius:5, }}>

            <View style={{display:'flex', flexDirection:'row',width:wp('90%'),borderBottomWidth:1,borderBottomColor:"#CCCCCC",padding:8}}>
                  <View style={{width:wp('37%'),display:'flex', flexDirection:'row',justifyContent:'flex-start'}}>
                        <Text style={{color:'#6B6B6B',fontWeight:"500"}}>
                           Rank
                        </Text>
                  </View>
                  <View style={{width:wp('50%'),display:'flex', flexDirection:'row',justifyContent:'flex-end'}}>
                        <Text style={{color:'#6B6B6B',fontWeight:"500"}}>Winnings</Text>
                  </View>
                </View>

                <View style={{display:'flex', flexDirection:'row',width:wp('90%'),borderBottomWidth:1,borderBottomColor:"#CCCCCC",padding:8}}>
                  <View style={{width:wp('38%'),display:'flex', flexDirection:'row',justifyContent:'flex-start'}}>
                        <Text style={{fontWeight:'700',fontSize:hp(2.3)}}>
                            #1
                        </Text>
                  </View>
                  <View style={{width:wp('48%'),display:'flex', flexDirection:'row',justifyContent:'flex-end'}}>
                        <Text  style={{fontWeight:'700',fontSize:hp(2.3)}}>₹336</Text>
                  </View>   
                </View>

                <View style={{display:'flex', flexDirection:'row',width:wp('90%'),borderBottomWidth:1,borderBottomColor:"#CCCCCC",padding:8}}>
                  <View style={{width:wp('38%'),display:'flex', flexDirection:'row',justifyContent:'flex-start'}}>
                        <Text  style={{fontWeight:'700',fontSize:hp(2.3)}}>
                            #2
                        </Text>
                  </View>
                  <View style={{width:wp('48%'),display:'flex', flexDirection:'row',justifyContent:'flex-end'}}>
                        <Text  style={{fontWeight:'700',fontSize:hp(2.3)}}>₹193</Text>
                  </View>     
                </View>

                <View style={{display:'flex', flexDirection:'row',width:wp('90%'),borderBottomWidth:1,borderBottomColor:"#CCCCCC",padding:8}}>
                  <View style={{width:wp("38%"),display:'flex', flexDirection:'row',justifyContent:'flex-start'}}>
                        <Text  style={{fontWeight:'700',fontSize:hp(2.3)}}>
                            #3
                        </Text>
                  </View>
                  <View style={{width:wp('48%'),display:'flex', flexDirection:'row',justifyContent:'flex-end'}}>
                        <Text  style={{fontWeight:'700',fontSize:hp(2.3)}}>₹126</Text>
                  </View>
                  
                   
                </View>

                <View style={{display:'flex', flexDirection:'row',width:wp('90%'),borderBottomWidth:1,borderBottomColor:"#CCCCCC",padding:8}}>
                  <View style={{width:wp('38%'),display:'flex', flexDirection:'row',justifyContent:'flex-start'}}>
                        <Text  style={{fontWeight:'700',fontSize:hp(2.3)}}>
                            #4-5
                        </Text>
                  </View>
                  <View style={{width:wp('48%'),display:'flex', flexDirection:'row',justifyContent:'flex-end'}}>
                        <Text  style={{fontWeight:'700',fontSize:hp(2.3)}}>₹92</Text>
                  </View>
                  
                   
                </View>
                
            </View>
           </View>



           <View style={{width:wp('100%'), justifyContent:'center',alignItems:'center', display:'flex',flexDirection:'column'}}>
            <View style={{width:wp('90%'), justifyContent:'center',alignItems:'center',paddingTop:40 }}>
                <Text style={{fontSize:hp(1.7),backgroundColor:'#EAEEFE', padding:4,fontWeight:'400'}}>There will be fewer winner if less than 10teams joined</Text>
            </View>
           </View>

          

           <View style={{width:wp('100%'),display:'flex',flexDirection:'row', justifyContent:'center',alignItems:'center', paddingTop:20,}}>
            <View style={{width:wp('40%'), justifyContent:'space-evenly',alignItems:'center',backgroundColor:'#EAEEFE',display:'flex',flexDirection:'row', padding:2}}> 
            <View style={{width:wp('10%'),}}>
            <Image
                source={require("../../../assets/Flexible.png")}
               style={{
                  width: wp("5%"),
                  height: 20,
                  resizeMode:'contain',
                }}/>
           </View>
            <View style={{width:wp('40%')}}>
            
            <Text style={{fontSize:hp(1.7) ,fontWeight:'400'}}>This is flexible contest</Text>
            </View>
            </View>
           

           </View>


            <View style={{width:wp('100%'), justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column', paddingTop:50,marginBottom:80}}>
            <Pressable style={{width:wp('90%'), justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column',backgroundColor:'#3E57C4',padding:7,borderRadius:5}}>
                <Text style={{color:'#fff',fontWeight:'bold'}}> Continue </Text>
            </Pressable>
            </View>
            </View>
            </ScrollView>
        </View>
       
    );
}


const styles = StyleSheet.create({
    
    
    btn: {
        padding:10,
        width:'90%',
        borderWidth:1,
        borderRadius: 5,
        borderColor:'#CCCCCC'
    },
    button:{
        padding:10,
        borderWidth:1,
        borderRadius: 5,
        borderColor:'#CCCCCC'
    },
   
    
})









