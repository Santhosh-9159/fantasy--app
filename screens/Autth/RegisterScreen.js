import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Pressable } from 'react-native';
import CheckBox from '../../components/CheckBox';
import { Ionicons } from '@expo/vector-icons';
const RegisterScreen = ({ navigation }) => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={{flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      width:"100%",
    }}>
    
    <ImageBackground source={require('../../assets/Loginbg.jpg')} resizeMode='cover'
    style={{flex: 1,
      justifyContent: 'center',width:"100%"}}
    >
     <View style={{height:"82%"}}>
     <View style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",padding:5}}>
     <Text style={{fontWeight:"bold",fontSize:18,color:"#fff"}}>REGISTER</Text>
     </View>
     <View style={{display:"flex",flexDirection: 'column',justifyContent:"flex-start",width:"100%",paddingLeft:20}}>
     <Text style={{ padding: 5,color:"#fff",fontWeight:"bold",fontSize:14}}>Name</Text>
     </View>
     <View style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",padding:5}}>
     <TextInput placeholder='Name'  style={ {
      width: '90%',
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      paddingLeft:5,
      paddingRight:5,
      paddingBottom:3,
      paddingTop:2,
      borderRadius:7, 
      backgroundColor:"#fff",
      alignItems:"center",
      height:"30px"
      
    }} />
     </View>
     <View style={{display:"flex",flexDirection: 'column',justifyContent:"flex-start",width:"100%",paddingLeft:20}}>
     <Text style={{ padding: 5,color:"#fff",fontWeight:"bold",fontSize:14}}>Mobile Number</Text>
     </View>
     <View style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",padding:5}}>
     <TextInput placeholder='Mobile Number'  style={ {
      width: '90%',
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      paddingLeft:5,
      paddingRight:5,
      paddingBottom:3,
      paddingTop:2,
      borderRadius:7, 
      backgroundColor:"#fff",
      alignItems:"center",
      height:"30px"
      
    }} />
    
     </View>
     <View style={{display:"flex",flexDirection: 'column',justifyContent:"flex-start",width:"100%",paddingLeft:20}}>
     <Text style={{ padding: 5,color:"#fff",fontWeight:"bold",fontSize:14}}>Email</Text>
     </View>
     <View style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",padding:5}}>
     <TextInput placeholder='Email'  style={ {
      width: '90%',
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      paddingLeft:5,
      paddingRight:5,
      paddingBottom:3,
      paddingTop:2,
      borderRadius:7, 
      backgroundColor:"#fff",
      alignItems:"center",
      height:"30px"
      
    }} />
     </View>
     <View style={{display:"flex",flexDirection: 'column',justifyContent:"flex-start",width:"100%",paddingLeft:20}}>
     <Text style={{ padding: 5,color:"#fff",fontWeight:"bold",fontSize:14}}>Invite Code</Text>
     </View>
     <View style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"center",alignItems:"center",padding:5}}>
     <TextInput placeholder='Invite Code'  style={ {
      width: '90%',
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      paddingLeft:5,
      paddingRight:5,
      paddingBottom:3,
      paddingTop:2,
      borderRadius:7, 
      backgroundColor:"#fff",
      alignItems:"center",
      height:"30px"
    }} />
     </View>
     <View style={{width:"100%",display: 'flex',flexDirection:"column",padding:5,paddingLeft:20,}}>
     <CheckBox 
     onPress={() => setChecked(!checked)} 
     title="I certify that I am above 18 Years"
     isChecked={checked} 
   /> 
     </View>
     <View style={{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center",paddingTop:5,gap:25,paddingBottom:15}} >

     
     
     
     <Pressable 
     onPress={()=>navigation.navigate('cricket')}
     style={{display:"flex",flexDirection:"column",width:"90%",justifyContent:"center",alignItems:"center",padding:10,backgroundColor:"#3757E2",borderRadius:7,}}>
     <Text style={{fontWeight:"bold",fontSize:14,color:"#fff"}}>
     Continue
     </Text>
     </Pressable>
     </View> 
         <View style={{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center",padding:5,gap:30,}} >
         <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:5}}>
         <Text style={{fontSize:14,color:"#fff",fontWeight: 'bold',}}>Already have an account? ?</Text>
         <Pressable  onPress={() => navigation.replace('login')}>
         <Text style={{fontWeight:"bold",fontSize:14,color:"#fff"}}>
         LOGIN
         </Text>
         </Pressable>
        
         </View>
         </View>
     
     </View>
      </ImageBackground>

    </View>
  );
};  

const styles = StyleSheet.create({
 
});

export default RegisterScreen;
