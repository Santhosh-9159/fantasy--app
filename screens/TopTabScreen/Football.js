import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSport } from '../../components/SportContext'
import MyMatchTab from '../../components/MyMatchTab';

const Football = () => {
  const { selectedSport, TabName } = useSport();
  return (
 <MyMatchTab/>
  )
}

export default Football

const styles = StyleSheet.create({})