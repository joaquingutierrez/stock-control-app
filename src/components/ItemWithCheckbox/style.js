import { StyleSheet } from "react-native";

import { colors } from "../../constants/theme"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.primary,
        width: "100%",
        paddingVertical: 4,
        marginVertical: 10,
        justifyContent: "space-between",
    },
    shop: {
        backgroundColor: colors.tertiary,
    },
    reached: {
        backgroundColor: "green",
    }
})