// AddCashScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const AddCash = ({ navigation }) => {
  const [amount, setAmount] = useState('₹');

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View style={{ backgroundColor: '#3385ff', padding: 10 }}>
      
      </View>

      <View style={{ backgroundColor: '#3385ff', padding: 20, alignItems: 'center' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 16 }}>My Balance</Text>
        <Text style={{ color: '#FFFFFF', fontSize: 40, fontWeight: 'bold', marginVertical: 10 }}>₹100</Text>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: '#FFFFFF', fontSize: 14 }}>Amount unutilised: ₹0</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 14 }}>Winnings: ₹100</Text>
          <Text style={{ color: '#FFFFFF', fontSize: 14 }}>Discount: ₹0</Text>
        </View>
      </View>

      <View style={{ backgroundColor: '#F0F0F0', padding: 20, marginVertical: 20, alignItems: 'center' }}>
        <View style={{position:"relative"}}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Add cash</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#DDDDDD',
            padding: 10,
            width: '80%',
            textAlign: 'center',
            fontSize: 18,
            backgroundColor: '#FFFFFF',
            marginBottom: 10,
            
          }}
          value={amount}
          onChangeText={handleAmountChange}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={() => handleAmountChange('')}>
        <Text style={{ position: 'absolute', right: 30, top: 60, fontSize: 18, color: '#888888' }}>✕</Text>
      </TouchableOpacity>
        </View>
       
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 10 }}>
          {['₹200', '₹300', '₹500', '₹1000'].map((option) => (
            <TouchableOpacity
              key={option}
              style={{
                backgroundColor: '#FFFFFF',
                padding: 10,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#DDDDDD',
              }}
              onPress={() => handleAmountChange(option)}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={{ backgroundColor: '#00A000', padding: 20, alignItems: 'center' }}>
        <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>ADD {amount}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCash;
