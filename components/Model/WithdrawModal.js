import { Modal, Pressable, Text, View } from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


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
            width: wp('100%'),
            backgroundColor: '#fff',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 20,
            alignItems: 'center',
            elevation: 5,
          }}
          onPress={() => {}}
        >
          <Text style={{
            fontSize: hp(2.5),
            color: '#000',
            marginBottom: 10,
            fontWeight:'500'
          }}>
            Withdrawal Amount
          </Text>
          <Text style={{
            fontSize: hp(4),
            color: 'green',
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
            ₹100
          </Text>
          <View style={{ alignItems: 'center', marginBottom: 20 }}>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: hp(6) }}>🏦</Text>
            </View>
            <Text style={{ fontSize: hp(2.6), color: 'black' }}>AXIS BANK</Text>
            <Text style={{ fontSize: hp(2.2), color: 'gray' }}>xxxxxxxxxxxx9876</Text>
          </View>
          <Pressable style={{
            width: wp('90%'),
            backgroundColor: '#3385ff',
            padding: 15,
            alignItems: 'center',
            borderRadius: 5,
            marginBottom: 10,
          }}>
            <Text style={{ color: '#fff', fontWeight: 'bold',fontSize: hp(2.3) }}>CONFIRM</Text>
          </Pressable>
          <Pressable style={{
            width: wp('90%'),
            borderWidth: 1,
            borderColor: 'black',
            padding: 15,
            alignItems: 'center',
            borderRadius: 5,
          }} onPress={onClose}>
            <Text style={{ color: 'black', fontWeight: 'bold',fontSize: hp(2.2) }}>EDIT PAYMENT</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default WithdrawModal;
