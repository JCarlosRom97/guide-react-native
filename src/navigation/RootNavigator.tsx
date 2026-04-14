// src/navigation/RootNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../components/Layout/Header/Header';
import { Home } from '../features/home/';
/* React Core */
import { UseEffectScreen } from '../features/useEffect';
import { Async } from '../features/async';
/* React Web */
import { Counter } from '../features/counter';
import { SearchDebounce } from '../features/searchDebounce';
import { Pokemon } from '../features/pokemon';
import { ListSorting } from '../features/ListSorting';

export type RootStackParamList = {
  Home: undefined;
  Async: undefined;
  Counter: undefined;
  searchDebounce: undefined;
  Pokemon: undefined;
  PokemonDetail: {id:string};
  useEffect: undefined;
  listSorting: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{contentStyle:{backgroundColor:"#20232a"}, header: () => <Header/>}}>
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="useEffect" component={UseEffectScreen}  />
        <Stack.Screen name="Async" component={Async}  />
        <Stack.Screen name="Counter" component={Counter}  />
        <Stack.Screen name="searchDebounce" component={SearchDebounce}  />
        <Stack.Screen name="listSorting" component={ListSorting}  />
        <Stack.Screen name="Pokemon" component={Pokemon}  />
        <Stack.Screen name="PokemonDetail" component={Pokemon}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
