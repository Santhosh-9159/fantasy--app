import { useNavigation } from '@react-navigation/core';
import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Button, Text, Pressable } from 'react-native';

const OtpScreen = () => {
    const navigation = useNavigation()
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const inputs = useRef([]);

    const focusNextField = (index, value) => {
        if (index < otp.length - 1 && value) {
            inputs.current[index + 1].focus();
        }
        if (index === otp.length - 1) {
            inputs.current[index].blur();
        }
        const otpArray = otp;
        otpArray[index] = value;
        setOtp([...otpArray]);
    };

    

    return (
        <View style={{display:"flex",flexDirection:"column",width:"100%",paddingTop:30,gap:20,justifyContent:"center"}}>
            
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                
            }}>
                {otp.map((data, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpBox}
                        keyboardType="numeric"
                        textAlign="center"
                        maxLength={1}
                        ref={(ref) => inputs.current[index] = ref}
                        onChangeText={(value) => focusNextField(index, value)}
                        value={data}
                    />
                ))}
            </View>
            <View style={{display: 'flex',flexDirection:"row",width:"100%",justifyContent:"center",alignItems:'center'}}>
            <Text style={{opacity:0.6}}>Din't receive the OTP? </Text>
            <Pressable>
            <Text style={{fontWeight: 'bold',}}>RESEND OTP</Text>
            </Pressable>
            </View>
            <View style={{
                
                display:"flex",
                flexDirection: 'column',
                justifyContent:"center",
                alignItems:"center",
            }}>
            <Pressable
                onPress={()=>navigation.navigate('NameRegister')}
            style={{padding:10,
                width:"90%",
                backgroundColor:"#3385ff",
                display:"flex",
                flexDirection: 'column',
                justifyContent:"center",
                alignItems:"center",
                borderRadius: 7,
            }}
            >
            <Text style={{
                color:"#fff",
                fontWeight: 'bold',
            }}>LET'S PLAY</Text>
            </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
   
  
    otpBox: {
        width: 40,
        height: 40,
        margin: 5,
        borderWidth: 1,
        borderColor: '#000',
        opacity: 0.5,
        fontSize: 18,
        borderRadius:5
    }
});

export default OtpScreen;
