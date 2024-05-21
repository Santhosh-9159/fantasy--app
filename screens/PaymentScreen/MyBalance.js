import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo,Ionicons,FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MyBalance = () => {

    const navigation = useNavigation();
  return (
    <View style={{flex:1,display:"flex",width:"100%",flexDirection:"column",alignItems:"center",padding:15,gap:15}}>
       

            <Pressable style={{flexDirection:"row",width:"95%",borderWidth:1,borderColor:"#949494",backgroundColor:"#fff",borderRadius:5,justifyContent:"space-between",alignItems:"center",padding:10}}>
                <View style={{flexDirection:"column"}}>
                    <Text>Current Balance</Text>
                    <Text style={{fontWeight:"bold",fontSize:17}}>₹100</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Pressable style={{padding:5,backgroundColor:"#37b469",borderRadius:5}}
                     onPress={()=>navigation.navigate("ADD CASH")}

                    >
                        <Text style={{color:"#fff",fontSize:12}}>ADD CASH</Text>
                    </Pressable>
                </View>

            </Pressable>
            <Pressable style={{flexDirection:"row",width:"95%",borderWidth:1,borderColor:"#949494",backgroundColor:"#fff",borderRadius:5,justifyContent:"space-between",alignItems:"center",padding:10}}>
                <View style={{flexDirection:"column",gap:10}}>
                   <View style={{flexDirection:"column"}}>
                  <View style={{flexDirection:"row",alignItems:"center",gap:3}}>
                  <Text>Amount Unutilised</Text>
                     <Pressable>
                     <Ionicons name="information-circle-outline" size={15} color="black" />
                     </Pressable>
                  </View>
                    <Text style={{fontWeight:"bold",fontSize:17}}>₹0</Text>
                 
                   </View>
                   <View style={{flexDirection:"column"}}>
                   <View style={{flexDirection:"row",alignItems:"center",gap:3}}>
                  <Text>Winnings</Text>
                  <Pressable>
                     <Ionicons name="information-circle-outline" size={15} color="black" />
                     </Pressable>                 
                      </View>
                    <Text style={{fontWeight:"bold",fontSize:17}}>₹100</Text>
                   </View>
                   <View style={{flexDirection:"column"}}>
                   <View style={{flexDirection:"row",alignItems:"center",gap:3}}>
                  <Text>Winning Bonus</Text>
                  <Pressable>
                     <Ionicons name="information-circle-outline" size={15} color="black" />
                     </Pressable>                
                      </View>
                    <Text style={{fontWeight:"bold",fontSize:17}}>₹0</Text>
                   </View>
                    
                </View>
                <View style={{flexDirection:"row"}}>
                    <Pressable style={{padding:5,backgroundColor:"#37b469",borderRadius:5}} 
                    onPress={()=>navigation.navigate("WITHDRAW")}
                    >
                        <Text style={{color:"#fff",fontSize:12}}>WITHDRAW</Text>
                    </Pressable>
                </View>

            </Pressable>
         
            <Pressable style={{flexDirection:"row",width:"95%",elevation:5,backgroundColor:"#fff",borderRadius:5,alignItems:"center",padding:10,gap:15}}>
            <Entypo name="back-in-time" size={24} color="black" />
            <Text style={{fontWeight:"bold"}}>My Transactions</Text>
            </Pressable>

            <Pressable style={{flexDirection:"column",width:"95%",elevation:5,backgroundColor:"#fff",borderRadius:5,padding:10,gap:2}}>
             <View style={{flexDirection:"row",gap:15,alignItems:"center"}}>
             <Ionicons name="card-outline" size={24} color="black" />         
          
             <Text style={{fontWeight:"bold"}}>Manage Payment</Text>
           
          </View>
          <View style={{paddingLeft:40}}>
          <Text>Add/Remove cards, Wallets, etc</Text>   
          </View>
            
           
            </Pressable>
            <Pressable style={{flexDirection:"column",width:"95%",elevation:5,backgroundColor:"#fff",borderRadius:5,padding:10,gap:2}}>
             <View style={{flexDirection:"row",gap:15,alignItems:"center"}}>
             <FontAwesome5 name="address-card" size={21} color="black" />          
             <Text style={{fontWeight:"bold"}}>My KYC Details</Text>
           
          </View>
          <View style={{paddingLeft:40}}>
          <Text>Verify Mobile,Email,PAN & Bank Account</Text>   
          </View>
            
           
            </Pressable>
            <Pressable style={{flexDirection:"column",width:"95%",elevation:5,backgroundColor:"#fff",borderRadius:5,padding:10,gap:2}}>
             <View style={{flexDirection:"row",gap:15,alignItems:"center"}}>
             <MaterialCommunityIcons name="account-group-outline" size={24} color="black" />           
               <Text style={{fontWeight:"bold"}}>Refer & Earn</Text>
           
          </View>
          <View style={{paddingLeft:40}}>
          <Text>Bring your friends to Impact11 and earn rewards</Text>   
          </View>
            
           
            </Pressable>
            
            
        </View>
      
  )
}

export default MyBalance

const styles = StyleSheet.create({})