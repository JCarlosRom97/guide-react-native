import { Text } from "react-native";
import { StyleSheet } from "react-native";

type buttonType ={
    title: string, 
    style?:{}
}

export const TextComponent = ({title, style}: buttonType) => {
    return <Text style={{...styles.buttonStyle, ...style}}>{title}</Text>
};

const styles = StyleSheet.create({
    buttonStyle: {
        fontSize: 18,
        textAlign: "center",
        color: "#c0bfbf",
        padding:10
    }
})
