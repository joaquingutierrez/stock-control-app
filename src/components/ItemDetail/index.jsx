import { View, Image } from "react-native"

import { styles } from "./style"
import CustomText from "../CustomText"
import ButtonAndInput from "../ButtonAndInput"

const ItemDetail = ({ item }) => {

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {item.image ? <Image style={styles.image} source={{ uri: item.image }} /> : <CustomText myCustomText="Sin imagen" />}
            </View>
            <CustomText myCustomText={item.title} textType="title" />
            <CustomText myCustomText={item.description} />
            <CustomText myCustomText={item.category} />
            <View style={styles.horizontal}>
                <CustomText myCustomText="Mínimo: " />
                <CustomText myCustomText={item.minimum} />
            </View>
            <View style={styles.horizontal}>
                <CustomText myCustomText="Stock: " />
                <CustomText myCustomText={item.stock} />
                <ButtonAndInput
                    title="Actualizar"
                />
            </View>
        </View>
    )
}

export default ItemDetail