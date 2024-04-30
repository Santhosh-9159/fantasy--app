import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import Home from "./screens/Tabscreen/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Mymatches from "./screens/Tabscreen/Mymatches";
import Chat from "./screens/Tabscreen/Chat";
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
import Svg, { Circle } from 'react-native-svg';
import LoginScreen from "./screens/Autth/LoginScreen";
import RegisterScreen from "./screens/Autth/RegisterScreen";


//Top Navigation Bar

const Top = createMaterialTopTabNavigator();

function TopScreen({ navigation }) {
    useEffect(() => {
      navigation.setOptions({
        title: "Impact 11",
      });
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
          tabBarStyle: {
            backgroundColor: "#3385ff",
          },
          tabBarItemStyle: {
            padding: 0,
            
          },
        }}
      >
        <Top.Screen
          name="cricket"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
                <Image source={require("./assets/cricket-ball.png")}
                style={{width:20,height: 20,backgroundColor:"#fff",borderRadius:10,}}
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
      <Stack.Screen options={{headerShown:false}}
      name="login"
      component={LoginScreen}
      />
      <Stack.Screen options={{headerShown:false}}
      name="Register"
      component={RegisterScreen}
      />
      <Stack.Screen 
      name="Main"
      component={TopScreen}
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
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "My Matches") {
            iconName = focused ? "trophy" : "trophy-outline";
          } else if (route.name === "Chats") {
            iconName = focused
              ? "chatbox-ellipses"
              : "chatbox-ellipses-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerRight: () => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              gap: 1,
              width: "80%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() => {
                /* handle wallet action */
              }}
              style={{
                flexDirection: "row",
                gap: 10,
                display: "flex",
                justifyContent: "space-evenly",
                borderRadius:7,
                width: "50%",
                height: "70%",
                borderColor: "#fff",

                borderWidth: 2,
                alignItems: "center",
                margin: 5,
                padding: 3,
              }}
            >
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    color: "#fff",
                    fontSize: 14,
                    marginTop: 0,
                    marginLeft:3
                  }}
                >
                  ₹100
                </Text>
              </View>
              <View style={{}}>
                <Ionicons name="wallet-outline" size={20} color="white" />
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                /* handle notification action */
              }}
              style={{ padding: 5 }}
            >
              <Ionicons
                name="notifications-outline"
                size={25}
                color="white"
                style={{ marginRight: 15 }}
              />
            </Pressable>
          </View>
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={TopScreen}
        options={{
          tabBarLabel: "Home", // Explicitly setting the tab label to 'Home'
          headerTitle: "Impact 11",
          headerStyle: {
            backgroundColor: "#3385ff",
            
          },
          headerTitleStyle: {
            color: "#fff",
            
          },
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require("./assets/profile.png")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="My Matches"
        component={Mymatches}
        options={{ tabBarLabel: "My Matches" }}
      />
      <Tab.Screen
        name="Chats"
        component={Chat}
        options={{ tabBarLabel: "Chats" }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ tabBarLabel: "Settings" }}
      />
    </Tab.Navigator>
  );
}

//Drawer Navigation

const Drawer = createDrawerNavigator();

function DrawerScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="StackScreen"
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
