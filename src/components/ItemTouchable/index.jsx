import { TouchableOpacity, View } from "react-native";

import { styles } from "./style"
import CustomText from "../CustomText"

const ItemTouchable = ({ title, onSelected, red }) => {

    return (
        <TouchableOpacity style={[styles.container, red && styles.danger]} onPress={onSelected}>
            <View style={styles.textContainer}>
                <CustomText myCustomText={title} textType="title" textWhite={true} />
            </View>
        </TouchableOpacity>
    )
}

export default ItemTouchable