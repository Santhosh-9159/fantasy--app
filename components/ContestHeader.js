import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import CreateContestPopup from '.././screens/Matche Screens/ContestDetailScreen/CreateContestPopup'; // Adjust the path as necessary
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ContestHeader = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.header}>
      <View style={styles.textContainer}>
        <Text style={styles.mainText}>CSK vs RCB</Text>
        <Text style={styles.subText}>21M 30s left</Text>
      </View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="bell-plus-outline"
          size={24}
          color="#fff"
          onPress={() => setModalVisible(true)}
        />
        <Pressable
          onPress={() => navigation.navigate("ADD CASH")}
          style={styles.addCashButton}
        >
          <Text style={styles.addCashText}>₹100</Text>
          <Ionicons name="wallet-outline" size={24} color="white" />
        </Pressable>
      </View>
      <CreateContestPopup visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
}

export default ContestHeader;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: 'row',
    width: wp("100%"),
    padding: 5,
    justifyContent: 'space-evenly',
  },
  textContainer: {
    display: "flex",
    flexDirection: 'column',
    width: wp("55%"),
  },
  mainText: {
    fontWeight: "bold",
    color: '#fff',
    fontSize: hp(2.1),
  },
  subText: {
    fontSize:  hp(1.5),
    color: "#fff",
    paddingLeft: 7,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    width: wp("60%"),
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
  },
  addCashButton: {
    flexDirection: "row",
    marginRight: 20,
    alignItems: "center",
    borderWidth: 2,
    gap: 10,
    borderRadius: 5,
    borderColor: "#fff",
  },
  addCashText: {
    color: "#fff",
    marginLeft: 5,
  },
});
