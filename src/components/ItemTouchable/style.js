import { StyleSheet } from "react-native";

import { colors } from "../../constants/theme"

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: "100%",
        paddingVertical: 20,
        marginVertical: 10,
        borderRadius: 10,
    },
    danger: {
        backgroundColor: colors.danger,
    },
    textContainer: {
        marginLeft: 25,
    }
})