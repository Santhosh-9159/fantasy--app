import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSport } from '../../components/SportContext';
import MyMatchTab from '../../components/MyMatchTab';


const Cricket = () => {
  const { selectedSport, TabName } = useSport();

  return (
    <MyMatchTab />
  )
}

export default Cricket

const styles = StyleSheet.create({})