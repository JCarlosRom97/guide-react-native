import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    counterTitleHeading: {
        fontSize: 36,
        textAlign: 'center',
        color: 'white'
    },
    counter: {
        fontSize: 68,
        color: 'white',
        textAlign: 'center'
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50
    },
    button: {
        width: 100,
        height: 30,
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#58c4dc',
    },
    limitExceededAlert: {
        color: 'brown',
        textAlign: 'center'
    },
});