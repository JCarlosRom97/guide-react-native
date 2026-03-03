import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export const Header = () => {

    return (
        <SafeAreaView edges={["top"]} style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>ReactJS Technical Exercises</Text>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#20232a"
    },
    container: {
        height: 60,
        justifyContent: "center",
        paddingHorizontal: 16,
    },
    title:{
        color: 'white',
        fontSize: 18
    }
})
