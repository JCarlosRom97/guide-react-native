import { StyleSheet } from "react-native"

export const globalStyles = StyleSheet.create({
    Container: {
        flex: 1,        
        justifyContent: 'flex-start', 
        alignItems: 'center',    
        padding: 10,
    },
    elementTitle: {
        fontSize: 16,
        padding: 10,
        marginVertical: 4,
        borderRadius: 8,
        backgroundColor: '#334155',
        color: '#fff',
    },
    Input: {
        width: '80%',            // Definir un ancho es clave
        height: 30,
        backgroundColor: '#fff',
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 10
    }
})