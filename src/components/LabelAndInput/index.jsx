import { View, Text, TextInput } from "react-native"

import { styles } from "./style"
import CustomText from "../CustomText"

const LabelAndInput = ({ title, placeHolder, onHandleInput, value }) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
            <CustomText
                myCustomText={`${title}: `}
            />
            </View>
            <TextInput
                style={styles.input}
                onChangeText={onHandleInput}
                placeholder={placeHolder}
                value={value}
            />
        </View>
    )
}

export default LabelAndInput