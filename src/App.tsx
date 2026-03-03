import { StatusBar } from 'react-native';
import RootNavigator from './navigation/RootNavigator';
import { SafeAreaProvider } from "react-native-safe-area-context";
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#20232a"
      />
      <RootNavigator />
    </SafeAreaProvider>
  )
}
