// CustomDrawerContent.js

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrawerHeader = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://example.com/profile-picture.png' }} // Replace with your profile picture URL
          style={styles.profileImage}
        />
        <Text style={styles.username}>shivam11s</Text>
        <Text style={styles.totalImpacts}>Total Impacts: 767</Text>
        <View style={styles.starContainer}>
          <Icon name="star" size={24} color="#FFD700" />
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceText}>My Balance</Text>
          <Text style={styles.balanceAmount}>₹100</Text>
          <View style={styles.balanceButtons}>
            <Text style={styles.addCash}>+ ADD CASH</Text>
            <Text style={styles.withdraw}>WITHDRAW</Text>
          </View>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label="Fantasy Point System" onPress={() => alert('Fantasy Point System')} />
      <DrawerItem label="How to Play?" onPress={() => alert('How to Play?')} />
      <DrawerItem label="About us" onPress={() => alert('About us')} />
      <DrawerItem label="More" onPress={() => alert('More')} />
      <Text style={styles.version}>VERSION 1.22.0</Text>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  username: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalImpacts: {
    marginTop: 5,
    fontSize: 14,
    color: 'gray',
  },
  starContainer: {
    marginTop: 10,
  },
  balanceContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 5,
  },
  balanceButtons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  addCash: {
    marginRight: 20,
    color: 'blue',
  },
  withdraw: {
    color: 'red',
  },
  version: {
    marginTop: 20,
    textAlign: 'center',
    color: 'gray',
  },
});

export default DrawerHeader;
