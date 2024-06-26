import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function HowToPlay() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <LinearGradient colors={['#3247A0', '#1B2656']} style={styles.gradient}>
            <View style={styles.headerContent}>
              <AntDesign name="left" size={22} color="white" />
              <Text style={styles.headerText}>How to Play</Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.mainContent}>
          <View style={styles.introTextContainer}>
            <Text style={styles.introText}>FOLLOW THE STEPS MENTIONED BELOW &</Text>
            <Text style={styles.introText}>BEGIN YOUR WINNING JOURNEY</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Image source={require('../../assets/HowToPlay.png')} style={styles.howToPlayImage} />
            <View style={styles.steps}>
              <Pressable><Text style={styles.button}>SELECT A MATCH</Text></Pressable>
              <Pressable><Text style={styles.button}>CREATE YOUR TEAM</Text></Pressable>
              <Pressable><Text style={styles.button}>JOIN CONTEST</Text></Pressable>
              <Pressable><Text style={styles.button}>FOLLOW THE MATCH</Text></Pressable>
            </View>
          </View>

          <View style={styles.infoSection}>
            <Image source={require('../../assets/SelectAMatch.png')} style={styles.infoImage} />
            <Text style={styles.infoText}>To participate in a match, click on an upcoming match you want to play and keep an eye on the match deadline.</Text>
          </View>

          <View style={styles.infoSection}>
            <Image source={require('../../assets/CreateYourTeams.png')} style={styles.infoImage} />
            <Text style={styles.infoText}>Use your sports knowledge to create your own fantasy team with players whom you think will score most points.</Text>
            <Text style={styles.infoText}>Your team must contain 11 players of different categories (WK, Batter, All-rounder, Bowler). Maximum 7 players from one team.</Text>
            <Text style={styles.infoText}>You can create up to 20 teams.</Text>
          </View>

          <View style={styles.infoSection}>
            <Image source={require('../../assets/SelectImpactPlayer.png')} style={styles.infoImage} />
            <Text style={styles.infoText}>After selecting your team, you can add an IMPACT PLAYER to your team.</Text>
            <Text style={styles.infoText}>IMPACT PLAYER will replace a player with the least points in your team after the match completes.</Text>
            <Text style={styles.infoText}>So, add a player whom you think will be a perfect backup for your team.</Text>
          </View>

          <View style={styles.infoSection}>
            <Image source={require('../../assets/SelectC-VC.png')} style={styles.infoImage} />
            <Text style={styles.infoText}>After creating your team, select the captain and vice-captain that will help you earn extra points.</Text>
            <Text style={styles.infoText}>The chosen captain will get x2 points during the match and the vice-captain will get x1.5 points.</Text>
          </View>

          <View style={styles.infoSection}>
            <Image source={require('../../assets/JoinContest.png')} style={styles.infoImage} />
            <Text style={styles.infoText}>There are different contests available. You can join Free and paid contests or you can even create a new private contest and play with your friends.</Text>
            <Text style={styles.infoText}>You can join as many contests as you want!</Text>
            <Text style={styles.infoText}>Join and start winning!!</Text>
          </View>

          <View style={styles.infoSection}>
            <Image source={require('../../assets/FollowTheMatch.png')} style={styles.infoImage} />
            <Text style={styles.infoText}>Once a match is live, you can follow your contest leaderboards to see how you're performing against your competition.</Text>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.withdrawText}>WITHDRAW YOUR WINNINGS</Text>
            <Text style={styles.infoText}>After a match ends, if you're in the winning zone for a contest, then your contest winnings are transferred to your account.</Text>
            <Text style={styles.infoText}>Use them to join more contests, or withdraw it and celebrate your success!</Text>
          </View>

          <View style={styles.pointSystemContainer}>
            <Text style={styles.pointSystemText}>Check our fantasy point system</Text>
            <Pressable><Text style={styles.pointSystemButton}>POINT SYSTEM</Text></Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  header: {
    width: '100%',
  },
  gradient: {
    height: 100,
  },
  headerContent: {
    flexDirection: 'row',
    paddingTop: 55,
    paddingLeft: 13,
  },
  headerText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  mainContent: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  introTextContainer: {
    width: '69%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  introText: {
    color: "#4C5789",
    fontWeight: '700',
    fontSize: 16,
  },
  stepsContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
  },
  howToPlayImage: {
    width: 200,
    height: 200,
  },
  steps: {
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#D9DEF3",
    borderRadius: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  infoSection: {
    width: '95%',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoImage: {
    width: '100%',
    height: 190,
    resizeMode: 'stretch',
  },
  infoText: {
    fontSize: 17,
    color: '#4D4D4D',
    marginVertical: 5,
  },
  withdrawText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  pointSystemContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  pointSystemText: {
    fontSize: 17,
    color: '#000',
    marginBottom: 10,
  },
  pointSystemButton: {
    color: "#fff",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
});
