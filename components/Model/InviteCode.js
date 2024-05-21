import React from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const InviteCode = ({ visible, onClose }) => {
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
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        onPress={onClose}
      >
        <View style={{  justifyContent: 'flex-end' ,width:"100%"}}>
          <Pressable
            style={{
              backgroundColor: '#fff',
              alignItems: 'center',
              borderRadius: 15,
              
              width:"100%",height: '52%',
            }}
            onPress={(e) => {
              e.stopPropagation(); // Prevent closing when pressing inside the modal
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: 20,
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                Enter Invite Code
              </Text>
              <Pressable onPress={onClose}>
                <AntDesign name="close" size={20} color="black" />
              </Pressable>
            </View>
            <TextInput
              placeholder=" Invite code"
              style={{
                width: '90%',
                height: 50,
                padding: 10,
                backgroundColor: '#fff',
                borderColor: '#ccc',
                borderWidth: 1,
                borderRadius: 4,
                marginBottom: 10,
              }}
            />
            <Text style={{ fontSize: 13, opacity: 0.6, paddingHorizontal: 20 }}>
              Not applicable to the numbers that are already registered!
            </Text>
            <Pressable
              style={{
                backgroundColor: '#3757E2',
                width: '90%',
                padding: 10,
                marginTop: 10,
                alignItems: 'center',
                borderRadius: 4,
              }}
              onPress={onClose}
            >
              <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>
                Apply
              </Text>
            </Pressable>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default InviteCode;

const styles = StyleSheet.create({});
