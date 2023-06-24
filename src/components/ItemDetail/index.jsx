import { View } from "react-native"

import { styles } from "./style"
import CustomText from "../CustomText"

const ItemDetail = ({ item }) => {
    return (
        <View>
            <View>
                <CustomText myCustomText="Sin imagen" />
            </View>
            <CustomText myCustomText={item.title} />
            <CustomText myCustomText={item.description} />
            <CustomText myCustomText={item.category} />
            <CustomText myCustomText={item.minimum} />
            <View>
                <CustomText myCustomText={item.stock} />
            </View>
        </View>
    )
}

export default ItemDetail