import { Button, View } from "react-native";

import { styles } from "./style"
import InputNumber from "../InputNumber"
import { colors } from "../../constants/theme";

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
                color={colors.ok}
                onPress={handleOnpress}
            />
        </View>
    )
}

export default ButtonAndInput