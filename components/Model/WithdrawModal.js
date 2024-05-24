import { Modal, Pressable, Text, View } from 'react-native';
import React from 'react';

const WithdrawModal = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        onPress={onClose}
      >
        <Pressable
          style={{
            width: '100%',
            backgroundColor: 'white',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 20,
            alignItems: 'center',
            elevation: 5,
          }}
          onPress={() => {}}
        >
          <Text style={{
            fontSize: 16,
            color: 'black',
            marginBottom: 10,
          }}>
            withdrawal amount
          </Text>
          <Text style={{
            fontSize: 24,
            color: 'green',
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
            ₹100
          </Text>
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 40 }}>🏦</Text>
            </View>
            <Text style={{ fontSize: 18, color: 'black' }}>AXIS BANK</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>xxxxxxxxxxxx9876</Text>
          </View>
          <Pressable style={{
            width: '100%',
            backgroundColor: '#3385ff',
            padding: 15,
            alignItems: 'center',
            borderRadius: 5,
            marginBottom: 10,
          }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>CONFIRM</Text>
          </Pressable>
          <Pressable style={{
            width: '100%',
            borderWidth: 1,
            borderColor: 'black',
            padding: 15,
            alignItems: 'center',
            borderRadius: 5,
          }} onPress={onClose}>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>EDIT PAYMENT</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default WithdrawModal;
