import { Button, View } from "react-native";

import { styles } from "./style"
import InputNumber from "../InputNumber"

const ButtonAndInput = ({ title, number, handleNumberSubstract, handleNumberAdd, handleOnpress }) => {

    return (
        <View style={styles.container}>
            <InputNumber
                number={number}
                handleNumberSubstract={handleNumberSubstract}
                handleNumberAdd={handleNumberAdd}
            />
            <Button
                title={title}
                onPress={handleOnpress}
            />
        </View>
    )
}

export default ButtonAndInput