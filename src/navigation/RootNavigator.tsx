// src/navigation/RootNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../components/Layout/Header/Header';
import { Home } from '../features/home/';
import { Counter } from '../features/counter';
import { SearchDebounce } from '../features/searchDebounce';
import { Pokemon } from '../features/pokemon';

export type RootStackParamList = {
  Home: undefined;
  Counter: undefined;
  searchDebounce: undefined;
  Pokemon: undefined;
  PokemonDetail: {id:string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{contentStyle:{backgroundColor:"#20232a"}, header: () => <Header/>}}>
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Counter" component={Counter}  />
        <Stack.Screen name="searchDebounce" component={SearchDebounce}  />
        <Stack.Screen name="Pokemon" component={Pokemon}  />
        <Stack.Screen name="PokemonDetail" component={Pokemon}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
