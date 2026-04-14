import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        backgroundColor: '#0f172a',
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: '#334155',
        borderRadius: 10,
        paddingHorizontal: 12,
        marginBottom: 20,
        backgroundColor: '#1e293b',
        color: '#fff',
    },
    loading: {
        marginVertical: 10,
    },
    error: {
        color: '#ef4444',
        marginVertical: 10,
    },
    email: {
        fontSize: 12,
        color: '#94a3b8',
    }
});