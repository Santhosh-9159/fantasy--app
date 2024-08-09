import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SportProvider } from "./components/SportContext";
import Navigation from "./Navigation";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import FlashMessage from "react-native-flash-message";


import useReducer from "./Redux/Slice";
import { Text} from "react-native";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

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
          <FlashMessage style={styles.flashMessage} />
           <Navigation />
          
         
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
  flashMessage: {
    top: 60, // Adjust the top position
    position: 'absolute', // Make sure it's positioned absolutely
  },
});
