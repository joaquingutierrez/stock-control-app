import { StyleSheet, Text } from "react-native";

const CustomText = ({ myCustomText, textWhite, textType }) => {
    

    return (
        <Text style={[styles.text, textWhite ? styles.textWhite : styles.textBlack, textType === "title" ? styles.textTitle : styles.textNormal]}>
            {myCustomText}
        </Text>
    )
}


const styles = StyleSheet.create({
    textTitle: {
        fontSize: 20
    },
    textNormal: {
        fontSize: 16
    },
    textWhite: {
        color: "#fff"
    },
    textBlack: {
        color: "#000"
    }
})

export default CustomText