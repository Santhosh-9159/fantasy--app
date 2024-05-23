import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const TeamScreenHeader = () => {
  const navigation = useNavigation()
  return (
    <LinearGradient
    colors={['#3247A0', '#1B2656', '#020202', '#020202']}>
      <Pressable onPress={() => navigation.goBack()} style={styles.back}>
        <Ionicons name="arrow-back" size={30} color="#000" />
      </Pressable>
    </LinearGradient>
  );
};

export default TeamScreenHeader;

const styles = StyleSheet.create({});
