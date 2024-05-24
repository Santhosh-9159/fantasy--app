import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OTPHeaderTitle = () => {
  return (
    <View style={styles.headerContainer}>
     <View style={styles.header}>
     <Text style={styles.headerTitle}>Almost There!</Text>
     <Text style={styles.headerSubtitle}>Please enter the OTP sent on 9*******19</Text>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection:"row",
   width:"100%",
  
    
  },
  headerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#fff',
    opacity:0.7,
  },
  header:{
    display: 'flex',

    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"column",
   width:"65%",
  },
});
export default OTPHeaderTitle;