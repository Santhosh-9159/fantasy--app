import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { useSelector } from 'react-redux';

const ContestHeader = () => {
  const [countdown, setCountdown] = useState('');

  const team1shortform = useSelector((state) => state.tasks.team1shortform);
  const team2shortform = useSelector((state) => state.tasks.team2shortform);
  const matchCountdown = useSelector((state) => state.tasks.matchCountdown);

  const navigation = useNavigation();

  // Update countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(matchCountdown); // Update countdown state
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [matchCountdown]); // Run effect when matchCountdown changes

  return (
    <View style={{ display: "flex", flexDirection: 'row', width: "100%", padding: 5, justifyContent: 'space-evenly' }}>
      <View style={{ display: "flex", flexDirection: 'column', width: "60%" }}>
        <Text style={{ fontWeight: "bold", color: '#fff', fontSize: 15 }}>{team1shortform} vs {team2shortform}</Text>
        <Text style={{ fontSize: 11, color: "#fff", paddingLeft: 0 }}>{countdown}</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: "55%", alignItems: "center", gap: 8 }}>
        <MaterialCommunityIcons name="bell-plus-outline" size={24} color="#fff" />
        <Pressable
          onPress={() => navigation.navigate("ADD CASH")}
          style={{
            flexDirection: "row",
            marginRight: 20,
            alignItems: "center",
            borderWidth: 2,
            gap: 10,
            borderRadius: 5,
            borderColor: "#fff",
          }}
        >
          <Text style={{ color: "#fff", marginLeft: 5 }}>₹100</Text>
          <Ionicons name="wallet-outline" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
}

export default ContestHeader;

const styles = StyleSheet.create({});
