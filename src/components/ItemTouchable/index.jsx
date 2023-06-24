import { TouchableOpacity } from "react-native";

import { styles } from "./style"
import CustomText from "../CustomText"

const ItemTouchable = ({ item, onSelected }) => {

    return (
        <TouchableOpacity style={styles.container} onPress={onSelected}>
            <CustomText myCustomText={item.title} textType="title" textWhite={true} />
        </TouchableOpacity>
    )
}

export default ItemTouchable