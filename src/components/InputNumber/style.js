import { StyleSheet } from "react-native";

import { colors } from "../../constants/theme"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 15,
    },
    buttonContainer: {
        backgroundColor: colors.primary,
        minHeight: 40,
        minWidth: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    button: {
        fontSize: 15,
        color: "#fff",
        padding: 5,
    }
})