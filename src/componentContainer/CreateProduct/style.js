import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
        margin: "auto",
        width: "100%",
    },
    input: {
        width: 40,
        height: 16,
    },
    labelAndComponent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "85%",
    },
    imageAndTakeImage: {
        flexDirection: "column",
        height: 162,
    },
    imageContainer: {
        borderWidth: 4,
        width: 192,
        height: 108,
        borderColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: "100%",
    }
})