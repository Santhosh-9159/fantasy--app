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

import { FontAwesome5 } from '@expo/vector-icons';
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

const getHeaderRight = (navigation) => (
  <View
    style={{
      flexDirection: "column",
      backgroundColor: "#3385ff",
      height: 100,
      alignItems: "center",
      gap: 5,
    }}
  >
    <View style={{ flexDirection: "row", padding: 3, paddingTop: 50, gap: 20 }}>
      <Pressable
        style={{ justifyContent: "flex-start" }}
        onPress={() => navigation.openDrawer()}
      >
        <Image
          source={require("./assets/profile.png")}
          style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 15 }}
        />
      </Pressable>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>IMPACT 11</Text>

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
          onPress={() => {
          }}
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
      initialRouteName = {selectedSport};
    } else {
      initialRouteName = {selectedSport};
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
        swipeEnabled:false
        
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
    <Stack.Navigator initialRouteName="login">
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
          headerTitle: () => <OTPHeaderTitle/>,
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
      headerTitle:"ENTER NEW EMAIL",
      headerStyle:{
        backgroundColor:"#3385ff",
        
      },
      headerTintColor:"#fff"
      
    }}
    name="EditEmail"
    component={EditEmail}
    />
    <Stack.Screen
    options={{
      headerTitle:"ENTER NEW NUMBER",
      headerStyle:{
        backgroundColor:"#3385ff",
        
      },
      headerTintColor:"#fff"
      
    }}
    name="EditPhoneNumber"
    component={EditPhoneNumber}
    />
    <Stack.Screen
    options={{
      headerTitle: () => <ContestHeader/>,
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
      headerTitle: () => <ContestHeader/>,
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
      headerTitle: () => <ContestHeader/>,
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
      headerTitle: () => <ContestHeader/>,
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
      headerStyle:{
        backgroundColor:"#3385ff",
        borderBottomWidth: 0,
      },
      headerTintColor:"#fff"
    }}
    name="ADD CASH"
    component={AddCash}
    />
    <Stack.Screen
    options={{
      headerStyle:{
        backgroundColor:"#3385ff",
        borderBottomWidth: 0,
      },
      headerTintColor:"#fff"
    }}
    name="PAYMENT OPTIONS"
    component={PaymentScreen}
    />
     <Stack.Screen
    options={{
      headerShown:false
    }}
    name="Tire Screen"
    component={TireScreen}
    />
     <Stack.Screen
     options={{
      headerStyle:{
        backgroundColor:"#3385ff",
        borderBottomWidth: 0,
      },
      headerTintColor:"#fff"
    }}
    name="WITHDRAW"
    component={Withdraw}
    />
      <Stack.Screen  options={{headerStyle:{
        backgroundColor:"#3385ff",
      },
      headerTitle:"My Balance",
      headerTitleStyle:{
        color:"#fff"
      },
      headerTintColor:"#fff",
      headerRight:()=> 
        <Pressable>
          <FontAwesome5 name="question-circle" size={24} color="#fff" />
        </Pressable>
    }}
      name="MyBalance"
      component={MyBalance}
      />
      <Stack.Screen  options={{headerStyle:{
        backgroundColor:"#3385ff",
      },
      headerTitle:"KYC VERIFICATION",
      headerTitleStyle:{
        color:"#fff"
      },
      headerTintColor:"#fff",
    }}
      name="KYC VERIFICATION"
      component={KYC}
      />
      <Stack.Screen
      options={{
        headerStyle: {
          backgroundColor: "#3385ff",
        },
        headerTitle:"Manage Payments",
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
        headerTitle:"Wicketscreen",
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
        headerTitle:"BatterScreen",
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
        headerTitle:"Allrounderscreen",
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
        headerTitle:"Bowlerscreen",
        headerTintColor: "#fff",
      }}
      name="Bowlerscreen"
      component={Bowlerscreen}
      />
       <Stack.Screen
       options={{
        headerShown:false
      }}
      name="Teamscreen"
      component={TeamScreen}
      />
      <Stack.Screen
       options={{
        headerShown:false,
        ...TransitionPresets.ModalSlideFromBottomIOS,

      }}
      name="PlayerInfo"
      component={PlayerInfo}
      />
      <Stack.Screen
       options={{
        headerShown:false,
        ...TransitionPresets.ModalSlideFromBottomIOS
      }}
      name="SelectImpactPlayer"
      component={SelectImpactPlayer}
      />
      <Stack.Screen
       options={{
        headerShown:false
      }}
      name="TeamPreview"
      component={TeamPreview}
      />
      <Stack.Screen
       options={{
        headerShown:false
      }}
      name="SelectCaptainandVCaptain"
      component={SelectCaptainandVCaptain}
      />
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="CricketLive" component={CricketLive}/>
      <Stack.Screen 
      
      name="MatchReminder" component={MatchReminder}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="CaptainandViceCaptain" component={CaptainandViceCaptain}/>
      <Stack.Screen 
      options={{
        headerShown:false
      }}
      name="CricketCompleted" component={CricketCompleted}/>
      

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
        name="Profile"
        component={ProfileScreen} // Assuming Settings is the correct component
        options={{
          tabBarLabel: "Profile",
          headerTitle: "My INFO & SETTING"  // Explicitly set the header title for this tab
        }}
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
      drawerStyle:{
        width:350
      }
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
      name="HelpAndSuport"
      component={HelpAndSuport}
      options={{
        headerShown: true,
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
