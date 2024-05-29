import 'react-native-gesture-handler';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SportProvider } from './components/SportContext';
import PlayerInfo from './screens/CreateTeam/PlayerInfo';
import Navigation from './Navigation';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SportProvider>
        <Navigation />
     
      </SportProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
