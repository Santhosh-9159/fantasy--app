import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import Home from "./screens/Tabscreen/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Mymatches from "./screens/Tabscreen/Mymatches";
import Chat from "./screens/Tabscreen/ReferAndEarn";
import Settings from "./screens/Tabscreen/Settings";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MymatchDetailes from "./screens/stack navigator/MymatchDetailes";
import UpcomeingMatchDetailes from "./screens/stack navigator/UpcomeingMatchDetailes";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "./screens/Drawernavigation/Profile";
import MyinfoAndSettings from "./screens/Drawernavigation/MyinfoAndSettings";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Football from "./screens/TopTabScreen/Football";
import { Image, Pressable, Text, View, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import Svg, { Circle } from "react-native-svg";
import LoginScreen from "./screens/Autth/LoginScreen";
import LoginWithEmail from "./screens/Autth/LoginWithEmail";
import OtpScreen from "./screens/Autth/OtpScreen";

import ReferAndEarn from "./screens/Tabscreen/ReferAndEarn";
import { useSport } from "./components/SportContext";
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

const getHeaderRight = (navigation, routeName) => {
  if (routeName === "Settings") {
    return null;
  }

  return (
    <View style={{ flexDirection: "row", marginRight: 10 }}>
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
      <Pressable
        onPress={() => {
          // handle notification action
        }}
        style={{
          marginRight: 20,
        }}
      >
        <Ionicons name="notifications-outline" size={24} color="white" />
      </Pressable>
    </View>
  );
};

//Top Navigation Bar

const Top = createMaterialTopTabNavigator();

function TopScreen({ navigation }) {
  const { setSport } = useSport();

  useEffect(() => {
    navigation.setOptions({ title: "Impact 11" });
  }, [navigation]);

  return (
    <Top.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontWeight: "bold",
          color: "white",
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: "white",
        },
        tabBarStyle: { backgroundColor: "#3385ff" },
        tabBarItemStyle: { padding: 0 },
      }}
      screenListeners={({ route }) => ({
        focus: () => setSport(route.name.toLowerCase()),
      })}
    >
      <Top.Screen
        name="Cricket"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
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
      />
      <Top.Screen
        name="Football"
        component={Football}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="football-outline" size={21} color="white" />
          ),
        }}
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
        name="cricket"
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
    </Stack.Navigator>
  );
}

// Bottom Tabs
const Tab = createBottomTabNavigator();

function TabScreen({ navigation }) {
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
        headerRight: () => getHeaderRight(navigation, route.name),
        headerStyle: { backgroundColor: "#3385ff" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerLeft: () => (
          <Pressable onPress={() => navigation.openDrawer()}>
            <Ionicons name="menu" size={30} color="white" style={{ marginLeft: 15 }} />
          </Pressable>
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={TopScreen}
        options={{ tabBarLabel: "Home" }}
      />
      <Tab.Screen
        name="My Matches"
        component={Mymatches}
        options={{ tabBarLabel: "My Matches" }}
      />
      <Tab.Screen
        name="Refer & Earn"
        component={ReferAndEarn}
        options={{ tabBarLabel: "Refer & Earn", headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Settings} // Assuming Settings is the correct component
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
        width:300
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
