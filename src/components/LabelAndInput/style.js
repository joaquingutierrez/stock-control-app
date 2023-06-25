import { StyleSheet } from "react-native";

import { colors } from "../../constants/theme"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        width: "25%",
    },
    input: {
        width: "60%",
        borderBottomWidth: 2,
        borderColor: colors.primary,
    }
})