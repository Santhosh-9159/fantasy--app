import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SportProvider } from "./components/SportContext";
import PlayerInfo from "./screens/CreateTeam/PlayerInfo";
import Navigation from "./Navigation";
import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "./Redux/Slice";
import { Provider } from "react-redux";
import TeamPreview from "./screens/CreateTeam/TeamPreview";

const store = configureStore({
  reducer: {
    tasks: useReducer,
  },
});

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SportProvider>
        <Provider store={store}>
          <Navigation />
          {/* <TeamPreview /> */}
        </Provider>
      </SportProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
