import { View, Text, TextInput } from "react-native"

import { styles } from "./style"
import CustomText from "../CustomText"

const LabelAndInput = ({ title, placeHolder, onHandleInput }) => {
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
            />
        </View>
    )
}

export default LabelAndInput