import { StyleSheet } from "react-native";

import { colors } from "../../constants/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
        gap: 10,
    },
    imageContainer: {
        width: 300,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        borderColor: colors.primary,
        borderWidth: 4,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    horizontal: {
        flexDirection: "row",
        alignItems: "center",
    },
})