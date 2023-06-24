import { View, TouchableOpacity, Text } from "react-native";

import { styles } from "./style"

const InputNumber = ({number, handleNumberSubstract, handleNumberAdd}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleNumberSubstract}>
                <Text style={styles.button}>-</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <Text style={styles.button}>{number}</Text>
            </View>
            <TouchableOpacity style={styles.buttonContainer} onPress={handleNumberAdd}>
                <Text style={styles.button}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputNumber