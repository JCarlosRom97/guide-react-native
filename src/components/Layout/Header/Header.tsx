import { View, Text, Button, Pressable } from 'react-native';
import { styles } from './HeaderStyles';
import { useNavigation } from '@react-navigation/native';

export const Header = () => {
        const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>ReactJS Technical Exercises</Text>
            <View style={styles.containerButtonsHeader}>
                <Pressable onPress={() => navigation.navigate('Home' as never)} ><Text style={styles.menuOptionsText}>Home</Text></Pressable>
                <View style={styles.dropdown}>
                </View>
            </View>
        </View>
    );
}
