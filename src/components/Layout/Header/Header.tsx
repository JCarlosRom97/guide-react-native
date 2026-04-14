import { View, Text, Pressable } from 'react-native';
import { styles } from './HeaderStyles';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export const Header = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        
        {/* 🧠 Title */}
        <Text style={styles.headerText}>
          RN Exercises
        </Text>

        {/* 📌 Menu */}
        <View style={styles.containerButtonsHeader}>
          
          <Pressable
            onPress={() => navigation.navigate('Home' as never)}
            style={({ pressed }) => [
              styles.menuButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.menuOptionsText}>Home</Text>
          </Pressable>

          <Pressable
            onPress={() => setOpen(!open)}
            style={({ pressed }) => [
              styles.menuButton,
              pressed && styles.pressed,
            ]}
          >
            <Text style={styles.menuOptionsText}>Menu ▾</Text>
          </Pressable>

          {/* 🔽 Dropdown */}
          {open && (
            <View style={styles.dropdown}>
              
              <Pressable
                onPress={() => {
                  setOpen(false);
                  navigation.navigate('Async' as never);
                }}
                style={styles.dropdownItem}
              >
                <Text style={styles.dropdownText}>Async</Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  setOpen(false);
                  navigation.navigate('ListSorting' as never);
                }}
                style={styles.dropdownItem}
              >
                <Text style={styles.dropdownText}>Sorting</Text>
              </Pressable>

            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};