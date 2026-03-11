import { styles } from './SearchDebounceStyles';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useSearchStore } from './store/useSearchStore';

export const SearchDebounce = () => {
  const { query, users, loading, error, setQuery } = useSearchStore();

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search user..."
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />

      {loading && <ActivityIndicator size="large" />}

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.user}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
};