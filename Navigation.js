import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MymatchDetailes from "./screens/stack navigator/MymatchDetailes";
import UpcomeingMatchDetailes from "./screens/stack navigator/UpcomeingMatchDetailes";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyinfoAndSettings from "./screens/Drawernavigation/MyinfoAndSettings";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Football from "./screens/TopTabScreen/Football";
import { Image, Pressable, Text, View, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import LoginScreen from "./screens/Autth/LoginScreen";
import LoginWithEmail from "./screens/Autth/LoginWithEmail";
import OtpScreen from "./screens/Autth/OtpScreen";

import ReferAndEarn from "./screens/Tabscreen/ReferAndEarn";
import NameRegister from "./screens/Autth/NameRegister";
import EditEmail from "./screens/Autth/EditEmail";
import EditPhoneNumber from "./screens/Autth/EditPhoneNumber";
import OTPHeaderTitle from "./components/OTPHeaderTitle";
import ContestScreen from "./screens/Matche Screens/ContestScreen/ContestScreen";
import ContestHeader from "./components/ContestHeader";

import Myteam from "./screens/Matche Screens/ContestScreen/Myteam";
import MyContests from "./screens/Matche Screens/ContestScreen/MyContests";
import DetailScreen from "./screens/Matche Screens/ContestDetailScreen/DetailScreen";
import HelpAndSuport from "./screens/Drawernavigation/HelpAndSuport";
import DrawerHeader from "./components/DrawerHeader";
import AddCash from "./screens/PaymentScreen/AddCash";
import PaymentScreen from "./screens/PaymentScreen/PaymentScreen";
import TireScreen from "./screens/stack navigator/TireScreen";
import ProfileScreen from "./screens/Tabscreen/ProfileScreen";
import Withdraw from "./screens/PaymentScreen/Withdraw";

import { FontAwesome5 } from "@expo/vector-icons";
import MyBalance from "./screens/PaymentScreen/MyBalance";
import KYC from "./screens/PaymentScreen/KYC";
import ManagePayments from "./screens/PaymentScreen/ManagePayments";
import Wicketerscreen from "./screens/CreateTeam/Wicketerscreen";
import BatterScreen from "./screens/CreateTeam/BatterScreen";
import Allrounderscreen from "./screens/CreateTeam/Allrounderscreen";
import Bowlerscreen from "./screens/CreateTeam/Bowlerscreen";
import TeamScreen from "./screens/CreateTeam/TeamScreen";
import TeamScreenHeader from "./components/TeamScreenHeader";
import PlayerInfo from "./screens/CreateTeam/PlayerInfo";
import SelectImpactPlayer from "./screens/CreateTeam/SelectImpactPlayer";
import TeamPreview from "./screens/CreateTeam/TeamPreview";
import SelectCaptainandVCaptain from "./screens/CreateTeam/SelectCaptainandVCaptain";
import CricketLive from "./components/Cricket/Live/LiveTabs/CricketLive";
import { TransitionPresets } from "@react-navigation/stack";
import Cricket from "./screens/TopTabScreen/Cricket";
import { useSport } from "./components/SportContext";
import CricketHome from "./components/Cricket/CricketHome";
import MatchReminder from "./components/Model/MatchReminder";
import CaptainandViceCaptain from "./components/Cricket/CaptainandViceCaptain";
import CricketCompleted from "./components/Cricket/Completed/CompletedTabs/CricketCompleted";
import AuthLoadingScreen from "./screens/Autth/AuthLoadingScreen";
import RegisterPage from "./screens/Autth/RegisterPage";
import { Entypo } from "@expo/vector-icons";
import HomeNotification from "./components/NotificationTabs/HomeNotification";
import HowToPlay from "./screens/Drawernavigation/HowToPlay";
import DiscardTeam from "./components/Model/DiscardTeam";
import CreateContestPopup from "./screens/Matche Screens/ContestDetailScreen/CreateContestPopup";

import CreateContest from "./screens/Matche Screens/ContestDetailScreen/CreateContest";
import AboutUs from "./screens/Drawernavigation/AboutUs";
import More from "./screens/Drawernavigation/More";
import Legality from "./screens/Drawernavigation/Legality";
import TermsAndCondition from "./screens/Drawernavigation/TermsAndCondition";
import GettingStarted from "./screens/Drawernavigation/HelpAndSupport/GettingStarted/GettingStarted";
import Impact11 from "./screens/Drawernavigation/HelpAndSupport/GettingStarted/Impact11";
import GetTheApp from "./screens/Drawernavigation/HelpAndSupport/GettingStarted/GetTheApp";
import QOTP from "./screens/Drawernavigation/HelpAndSupport/GettingStarted/QOTP";
import QSignUp from "./screens/Drawernavigation/HelpAndSupport/GettingStarted/QSignUp";
import StillPlay from "./screens/Drawernavigation/HelpAndSupport/GettingStarted/StillPlay";
import LostNumber from "./screens/Drawernavigation/HelpAndSupport/GettingStarted/LostNumber";
import EditTeams from "./screens/Drawernavigation/HelpAndSupport/PlayingOnImpact/EditTeams";
import PlayingOnImpact from "./screens/Drawernavigation/HelpAndSupport/PlayingOnImpact/PlayingOnImpact";
import EditAfterMatch from "./screens/Drawernavigation/HelpAndSupport/PlayingOnImpact/EditAfterMatch";
import DeleteTeam from "./screens/Drawernavigation/HelpAndSupport/PlayingOnImpact/DeleteTeam";
import SwitchTeams from "./screens/Drawernavigation/HelpAndSupport/PlayingOnImpact/SwitchTeams";
import MultipleTeam from "./screens/Drawernavigation/HelpAndSupport/PlayingOnImpact/MultipleTeam";
import IncorrectLineup from "./screens/Drawernavigation/HelpAndSupport/PlayingOnImpact/IncorrectLineup";
import PlayerDoNotPlay from "./screens/Drawernavigation/HelpAndSupport/PlayingOnImpact/PlayerDoNotPlay";
import ContestJoin from "./screens/Drawernavigation/HelpAndSupport/PlayingOnImpact/ContestJoin";
import PublicPrivateContest from "./screens/Drawernavigation/HelpAndSupport/PlayingOnImpact/PublicPrivateContest";
import FlexibileContest from "./screens/Drawernavigation/HelpAndSupport/PlayingOnImpact/FlexibileContest";
import UnfilledContest from "./screens/Drawernavigation/HelpAndSupport/PlayingOnImpact/UnfilledContest";
import FindContest from "./screens/Drawernavigation/HelpAndSupport/PlayingOnImpact/FindContest";
import ScoresAndPoints from "./screens/Drawernavigation/HelpAndSupport/Scores&Points/ScoresAndPoints";
import ScorePoints from "./screens/Drawernavigation/HelpAndSupport/Scores&Points/ScorePoints";
import PointsNotUpdated from "./screens/Drawernavigation/HelpAndSupport/Scores&Points/PointsNotUpdated";
import PointsForSuperOver from "./screens/Drawernavigation/HelpAndSupport/Scores&Points/PointsForSuperOver";
import SubstitutePlayer from "./screens/Drawernavigation/HelpAndSupport/Scores&Points/SubstitutePlayer";
import HSMyBalance from "./screens/Drawernavigation/HelpAndSupport/MyBalance/HSMyBalance";
import WithDrawWinnings from "./screens/Drawernavigation/HelpAndSupport/MyBalance/WithDrawWinnings";
import WithdrawalRequest from "./screens/Drawernavigation/HelpAndSupport/MyBalance/WithdrawalRequest";
import WithdrawalRequestCancel from "./screens/Drawernavigation/HelpAndSupport/MyBalance/WithdrawalRequestCancel";
import WithdrawalBankAccDetails from "./screens/Drawernavigation/HelpAndSupport/MyBalance/WithdrawalBankAccDetails";
import CheckStatusWithdrawal from "./screens/Drawernavigation/HelpAndSupport/MyBalance/CheckStatusWithdrawal";
import DiscountBonus from "./screens/Drawernavigation/HelpAndSupport/MyBalance/DiscountBonus";
import AddCashMyBalance from "./screens/Drawernavigation/HelpAndSupport/MyBalance/AddCashMyBalance";
import ManageWallets from "./screens/Drawernavigation/HelpAndSupport/MyBalance/ManageWallets";
import ManageCards from "./screens/Drawernavigation/HelpAndSupport/MyBalance/ManageCards";
import Winnings from "./screens/Drawernavigation/HelpAndSupport/Winnings/Winnings";
import InformCashPrize from "./screens/Drawernavigation/HelpAndSupport/Winnings/InformCashPrize";
import ReceiveMyWinnings from "./screens/Drawernavigation/HelpAndSupport/Winnings/ReceiveMyWinnings";
import Distributed from "./screens/Drawernavigation/HelpAndSupport/Winnings/Distributed";
import TaxWinnings from "./screens/Drawernavigation/HelpAndSupport/Winnings/TaxWinnings";
import ProfileAndVerification from "./screens/Drawernavigation/HelpAndSupport/ProfileAndVerification/ProfileAndVerification";
import ChangeMobileNumber from "./screens/Drawernavigation/HelpAndSupport/ProfileAndVerification/ChangeMobileNumber";
import ChangeMailId from "./screens/Drawernavigation/HelpAndSupport/ProfileAndVerification/ChangeMailId";
import ChangeTeamName from "./screens/Drawernavigation/HelpAndSupport/ProfileAndVerification/ChangeTeamName";
import ChangeState from "./screens/Drawernavigation/HelpAndSupport/ProfileAndVerification/ChangeState";
import Calculate from "./screens/Drawernavigation/HelpAndSupport/ProfileAndVerification/Calculate";
import NotReceivingMail from "./screens/Drawernavigation/HelpAndSupport/ProfileAndVerification/NotReceivingMail";
import VerifyImapact11P from "./screens/Drawernavigation/HelpAndSupport/ProfileAndVerification/VerifyImapact11P";
import PanVerify from "./screens/Drawernavigation/HelpAndSupport/ProfileAndVerification/PanVerify";
import AadharVerifyWhy from "./screens/Drawernavigation/HelpAndSupport/ProfileAndVerification/AadharVerifyWhy";
import PanReject from "./screens/Drawernavigation/HelpAndSupport/ProfileAndVerification/PanReject";
import BankAccReject from "./screens/Drawernavigation/HelpAndSupport/ProfileAndVerification/BankAccReject";
import ChangePan from "./screens/Drawernavigation/HelpAndSupport/ProfileAndVerification/ChangePan";
import BankAccChange from "./screens/Drawernavigation/HelpAndSupport/ProfileAndVerification/BankAccChange";
import CompleteVerification from "./screens/Drawernavigation/HelpAndSupport/ProfileAndVerification/CompleteVerification";
import OffersAndRewards from "./screens/Drawernavigation/HelpAndSupport/OffersAndRewards/OffersAndRewards";
import InviteFriends from "./screens/Drawernavigation/HelpAndSupport/OffersAndRewards/InviteFriends";
import Earn from "./screens/Drawernavigation/HelpAndSupport/OffersAndRewards/Earn";
import MaximumInvite from "./screens/Drawernavigation/HelpAndSupport/OffersAndRewards/MaximumInvite";
import Security from "./screens/Drawernavigation/HelpAndSupport/Security/Security";
import AccountSecurity from "./screens/Drawernavigation/HelpAndSupport/Security/AccountSecurity";
import Ensure from "./screens/Drawernavigation/HelpAndSupport/Security/Ensure";
import Guide from "./screens/Drawernavigation/HelpAndSupport/Security/Guide";
import GameLegal from "./screens/Drawernavigation/HelpAndSupport/Legality/GameLegal";
import Allow from "./screens/Drawernavigation/HelpAndSupport/Legality/Allow";
import FairPlay from "./screens/Drawernavigation/HelpAndSupport/FairPlay/FairPlay";
import FairPlayViolation from "./screens/Drawernavigation/HelpAndSupport/FairPlay/FairPlayViolation";
import Suspicious from "./screens/Drawernavigation/HelpAndSupport/FairPlay/Suspicious";
import AccessToChangeTeam from "./screens/Drawernavigation/HelpAndSupport/FairPlay/AccessToChangeTeam";
import MatchDeadline from "./screens/Drawernavigation/HelpAndSupport/FairPlay/MatchDeadline";
import DetailsSafe from "./screens/Drawernavigation/HelpAndSupport/FairPlay/DetailsSafe";
import LosingGame from "./screens/Drawernavigation/HelpAndSupport/FairPlay/LosingGame";
import LegalityScreen from "./screens/Drawernavigation/HelpAndSupport/Legality/LegalityScreen";

const getHeaderRight = (navigation) => (
  <View
    style={{
      flexDirection: "column",
      backgroundColor: "#3385ff",
      height: 90,
      alignItems: "center",
      justifyContent: "center",
      gap: 5,
      width: "100%",
    }}
  >
    <View
      style={{
        flexDirection: "row",
        padding: 3,
        paddingTop: 50,
        gap: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Pressable
        style={{ justifyContent: "flex-start", paddingLeft: 10 }}
        onPress={() => navigation.openDrawer()}
      >
        <Entypo name="menu" size={28} color="#ffff" />
      </Pressable>
      <Image
        source={require("./assets/IMPACT11 Logo extended.png")}
        style={{ width: 120, height: 20, borderRadius: 20 }}
      />

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 10,
        }}
      >
        <View
          style={{
            borderWidth: 2,
            borderColor: "#fff",
            borderRadius: 6,
            justifyContent: "space-between",
            flexDirection: "row",
            display: "flex",
            width: 81,
            height: 37,
            gap: 10,
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("login")}
            style={{
              flexDirection: "row",
              marginRight: 20,
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text style={{ color: "#fff", marginLeft: 5 }}>₹100</Text>
            <Ionicons
              name="wallet-outline"
              size={24}
              color="white"
              style={{}}
            />
          </Pressable>
        </View>
        <Pressable
          onPress={() => navigation.navigate("HomeNotification")}
          style={{
            marginRight: 20,
            paddingTop: 9,
          }}
        >
          <Ionicons name="notifications-outline" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  </View>
);

//Top Navigation Bar

const Top = createMaterialTopTabNavigator();

function TopScreen({ navigation }) {
  const { setSelectedSport, selectedSport, TabName, setTabName } = useSport();
  let initialRouteName;

  useEffect(() => {
    navigation.setOptions({
      title: "Impact 11",
    });
  }, [navigation]);

  if (selectedSport === "football" && TabName === "matches") {
    initialRouteName = { selectedSport };
  } else {
    initialRouteName = { selectedSport };
  }

  // Function to handle tab press
  const handleTabPress = (sport) => {
    setSelectedSport(sport);
  };

  console.log("TabName:", TabName);
  console.log("selectedSport:", selectedSport);
  console.log(initialRouteName);

  return (
    <Top.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: "bold",
          color: "white",
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: "#fff",
        },

        tabBarStyle: {
          backgroundColor: "#3385ff",
        },
        tabBarItemStyle: {
          padding: 0,
        },
        swipeEnabled: false,
      }}
    >
      <Top.Screen
        name="cricket"
        component={Cricket}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./assets/cricket-ball.png")}
              style={{
                width: 20,
                height: 20,
                backgroundColor: "#fff",
                borderRadius: 10,
              }}
            />
          ),
        }}
        listeners={{ tabPress: () => handleTabPress("cricket") }}
      />
      <Top.Screen
        name="Football"
        component={Football}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="football-outline" size={21} color="white" />
          ),
        }}
        listeners={{ tabPress: () => handleTabPress("football") }}
      />
    </Top.Navigator>
  );
}

//  Stack navigator

const Stack = createNativeStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator initialRouteName="AuthLoadingScreen">
      <Stack.Screen
        name="Tab"
        component={TabScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MymatchDetailes"
        component={MymatchDetailes}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="UpcomeingMatchDetailes"
        component={UpcomeingMatchDetailes}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AuthLoadingScreen"
        component={AuthLoadingScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="login"
        component={LoginScreen}
      />

      <Stack.Screen name="Main" component={TopScreen} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Email"
        component={LoginWithEmail}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <OTPHeaderTitle />,
          headerStyle: {
            backgroundColor: "#3385ff",
            height: 10,
          },
          headerTintColor: "#fff",
        }}
        name="OTP"
        component={OtpScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="NameRegister"
        component={NameRegister}
      />
      <Stack.Screen
        options={{
          headerTitle: "ENTER NEW EMAIL",
          headerStyle: {
            backgroundColor: "#3385ff",
          },
          headerTintColor: "#fff",
        }}
        name="EditEmail"
        component={EditEmail}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="RegisterPage"
        component={RegisterPage}
      />
      <Stack.Screen
        options={{
          headerTitle: "ENTER NEW NUMBER",
          headerStyle: {
            backgroundColor: "#3385ff",
          },
          headerTintColor: "#fff",
        }}
        name="EditPhoneNumber"
        component={EditPhoneNumber}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <ContestHeader />,
          headerStyle: {
            backgroundColor: "#3385ff",
          },
          headerTintColor: "#fff",
        }}
        name="ContestScreen"
        component={ContestScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <ContestHeader />,
          headerStyle: {
            backgroundColor: "#3385ff",
          },
          headerTintColor: "#fff",
        }}
        name="MYContest"
        component={MyContests}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <ContestHeader />,
          headerStyle: {
            backgroundColor: "#3385ff",
          },
          headerTintColor: "#fff",
        }}
        name="MYTeam"
        component={Myteam}
      />
      <Stack.Screen
        options={{
          headerTitle: () => <ContestHeader />,
          headerStyle: {
            backgroundColor: "#3385ff",
          },
          headerTintColor: "#fff",
        }}
        name="DetailScreen"
        component={DetailScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#3385ff",
            borderBottomWidth: 0,
          },
          headerTintColor: "#fff",
        }}
        name="ADD CASH"
        component={AddCash}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#3385ff",
            borderBottomWidth: 0,
          },
          headerTintColor: "#fff",
        }}
        name="PAYMENT OPTIONS"
        component={PaymentScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Tire Screen"
        component={TireScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#3385ff",
            borderBottomWidth: 0,
          },
          headerTintColor: "#fff",
        }}
        name="WITHDRAW"
        component={Withdraw}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#3385ff",
          },
          headerTitle: "My Balance",
          headerTitleStyle: {
            color: "#fff",
          },
          headerTintColor: "#fff",
          headerRight: () => (
            <Pressable>
              <FontAwesome5 name="question-circle" size={24} color="#fff" />
            </Pressable>
          ),
        }}
        name="MyBalance"
        component={MyBalance}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#3385ff",
          },
          headerTitle: "KYC VERIFICATION",
          headerTitleStyle: {
            color: "#fff",
          },
          headerTintColor: "#fff",
        }}
        name="KYC VERIFICATION"
        component={KYC}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#3385ff",
          },
          headerTitle: "Manage Payments",
          headerTintColor: "#fff",
        }}
        name="ManagePayments"
        component={ManagePayments}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#3385ff",
          },
          headerTitle: "Wicketscreen",
          headerTintColor: "#fff",
        }}
        name="Wicketscreen"
        component={Wicketerscreen}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#3385ff",
          },
          headerTitle: "BatterScreen",
          headerTintColor: "#fff",
        }}
        name="BatterScreen"
        component={BatterScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#3385ff",
          },
          headerTitle: "Allrounderscreen",
          headerTintColor: "#fff",
        }}
        name="Allrounderscreen"
        component={Allrounderscreen}
      />
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#3385ff",
          },
          headerTitle: "Bowlerscreen",
          headerTintColor: "#fff",
        }}
        name="Bowlerscreen"
        component={Bowlerscreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Teamscreen"
        component={TeamScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name="PlayerInfo"
        component={PlayerInfo}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
        name="SelectImpactPlayer"
        component={SelectImpactPlayer}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="TeamPreview"
        component={TeamPreview}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="SelectCaptainandVCaptain"
        component={SelectCaptainandVCaptain}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="CricketLive"
        component={CricketLive}
      />
      <Stack.Screen name="MatchReminder" component={MatchReminder} />
      <Stack.Screen name="DiscardTeam" component={DiscardTeam} />

      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="CaptainandViceCaptain"
        component={CaptainandViceCaptain}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="CricketCompleted"
        component={CricketCompleted}
      />

      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#3385ff",
          },
          headerTitle: "Notifications",
          headerTitleStyle: {
            color: "#fff",
          },
          headerTintColor: "#fff",
        }}
        name="HomeNotification"
        component={HomeNotification}
      />

      <Stack.Screen name="CreateContestPopup"
       component={CreateContestPopup} />

      <Stack.Screen options={{
          headerShown: false,
        }} name="CreateContest" 
      component={CreateContest} />

      <Stack.Screen options={{
          headerStyle: {
            backgroundColor: "#3385ff",
          },
          headerTitle: "MORE",
          headerTitleStyle: {
            color: "#fff",
            fontSize:15,
            fontWeight:'bold'
          },
          headerTintColor: "#fff",
        }} name="More" 
      component={More} />

    <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Legality"
        component={Legality}
      />

    <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="TermsandCondition"
        component={TermsAndCondition}
      />


      {/* Help and support */}

      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="GettingStarted" component={GettingStarted}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="Impact11" component={Impact11}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="GetTheApp" component={GetTheApp}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="QSignUp" component={QSignUp}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="LostNumber" component={LostNumber}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="QOTP" component={QOTP}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="StillPlay" component={StillPlay}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="PlayingOnImpact" component={PlayingOnImpact}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="EditTeams" component={EditTeams}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="EditAfterMatch" component={EditAfterMatch}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="DeleteTeam" component={DeleteTeam}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="SwitchTeams" component={SwitchTeams}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="MultipleTeam" component={MultipleTeam}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="IncorrectLineup" component={IncorrectLineup}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="PlayerDoNotPlay" component={PlayerDoNotPlay}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="ContestJoin" component={ContestJoin}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="PublicPrivateContest" component={PublicPrivateContest}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="FlexibileContest" component={FlexibileContest}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="UnfilledContest" component={UnfilledContest}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="FindContest" component={FindContest}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="ScoresAndPoints" component={ScoresAndPoints}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="ScorePoints" component={ScorePoints}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="PointsNotUpdated" component={PointsNotUpdated}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="PointsForSuperOver" component={PointsForSuperOver}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="SubstitutePlayer" component={SubstitutePlayer}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="HSMyBalance" component={HSMyBalance}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="WithDrawWinnings" component={WithDrawWinnings}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="WithdrawalRequest" component={WithdrawalRequest}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="CheckStatusWithdrawal" component={CheckStatusWithdrawal}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="WithdrawalBankAccDetails" component={WithdrawalBankAccDetails}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="WithdrawalRequestCancel" component={WithdrawalRequestCancel}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="DiscountBonus" component={DiscountBonus}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="AddCashMyBalance" component={AddCashMyBalance}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="ManageWallets" component={ManageWallets}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="ManageCards" component={ManageCards}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="Winnings" component={Winnings}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="InformCashPrize" component={InformCashPrize}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="ReceiveMyWinnings" component={ReceiveMyWinnings}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="Distributed" component={Distributed}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="TaxWinnings" component={TaxWinnings}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="ProfileAndVerification" component={ProfileAndVerification}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="ChangeMobileNumber" component={ChangeMobileNumber}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="ChangeMailId" component={ChangeMailId}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="ChangeTeamName" component={ChangeTeamName}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="ChangeState" component={ChangeState}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="Calculate" component={Calculate}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="NotReceivingMail" component={NotReceivingMail}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="VerifyImapact11P" component={VerifyImapact11P}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="PanVerify" component={PanVerify}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="AadharVerifyWhy" component={AadharVerifyWhy}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="PanReject" component={PanReject}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="BankAccReject" component={BankAccReject}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="ChangePan" component={ChangePan}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="BankAccChange" component={BankAccChange}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="CompleteVerification" component={CompleteVerification}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="OffersAndRewards" component={OffersAndRewards}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="InviteFriends" component={InviteFriends}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="Earn" component={Earn}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="MaximumInvite" component={MaximumInvite}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="Security" component={Security}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="AccountSecurity" component={AccountSecurity}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="Ensure" component={Ensure}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="Guide" component={Guide}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="LegalityScreen" component={LegalityScreen}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="GameLegal" component={GameLegal}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="Allow" component={Allow}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="FairPlay" component={FairPlay}/>
      
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="FairPlayViolation" component={FairPlayViolation}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="Suspicious" component={Suspicious}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="AccessToChangeTeam" component={AccessToChangeTeam}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="MatchDeadline" component={MatchDeadline}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="DetailsSafe" component={DetailsSafe}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="LosingGame" component={LosingGame}/>
    </Stack.Navigator>
  );
}

// Bottom Tabs
const Tab = createBottomTabNavigator();

function TabScreen({ navigation }) {
  const { setTabName } = useSport();

  // Function to handle tab press
  const handleTab = (tabName) => {
    setTabName(tabName);
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "My Matches":
              iconName = focused ? "trophy" : "trophy-outline";
              break;
            case "Refer & Earn":
              iconName = focused ? "person-add" : "person-add-outline";
              break;
            case "Profile":
              iconName = focused ? "person-circle" : "person-circle-outline";
              break;
            default:
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={TopScreen}
        options={{
          tabBarLabel: "Home",
          header: () => getHeaderRight(navigation),
        }}
        listeners={{ tabPress: () => handleTab("home") }}
      />
      <Tab.Screen
        name="My Matches"
        component={TopScreen}
        options={{
          tabBarLabel: "My Matches",
          header: () => getHeaderRight(navigation),
        }}
        listeners={{ tabPress: () => handleTab("matches") }}
      />
      <Tab.Screen
        name="Refer & Earn"
        component={ReferAndEarn}
        options={{ tabBarLabel: "Refer & Earn", headerShown: false }}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen} // Assuming Settings is the correct component
      />
    </Tab.Navigator>
  );
}

//Drawer Navigation

const Drawer = createDrawerNavigator();

function DrawerScreen() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerHeader {...props} />}
      screenOptions={{
        drawerStyle: {
          width: 350,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={StackScreen}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="MyinfoAndSettings"
        component={MyinfoAndSettings}
        options={{
          headerShown: true,
        }}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="How to Play"
        component={HowToPlay}
      />
      <Drawer.Screen
        name="Help & Suport"
        component={HelpAndSuport}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="About us"
        component={AboutUs}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function Navigation() {
  const currentTheme = useColorScheme();
  return (
    <NavigationContainer
      theme={DefaultTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <StatusBar style="auto" />
      <DrawerScreen />
    </NavigationContainer>
  );
}
