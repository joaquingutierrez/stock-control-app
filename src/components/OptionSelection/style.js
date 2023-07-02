import { StyleSheet } from "react-native";

import { colors } from "../../constants/theme"

export const styles = StyleSheet.create({
    container: {
        width: "85%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 220,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingHorizontal: 35,
        paddingTop: 20,
        paddingBottom: 50,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: colors.primary,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    optionContainer: {
        margin: 15,
    }
});