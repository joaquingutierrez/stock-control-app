import { TouchableOpacity } from "react-native";

import { styles } from "./style"
import CustomText from "../CustomText"

const ItemTouchable = ({ title, onSelected, red }) => {

    return (
        <TouchableOpacity style={[styles.container, red && styles.danger]} onPress={onSelected}>
            <CustomText myCustomText={title} textType="title" textWhite={true} />
        </TouchableOpacity>
    )
}

export default ItemTouchable