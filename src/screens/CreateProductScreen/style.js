import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
    },
    input: {
        width: 40,
        height: 16,
    },
    labelAndComponent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "85%"
    }
})