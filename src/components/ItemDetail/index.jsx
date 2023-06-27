import { View, Image, Button } from "react-native"
import { useState } from "react"

import { styles } from "./style"
import CustomText from "../CustomText"
import ButtonAndInput from "../ButtonAndInput"

const ItemDetail = ({ item, handleAddToCart }) => {

    const [number, setNumber] = useState(-1)

    const handleNumberAdd = () => {
        setNumber(number + 1)
    }
    const handleNumberSubstract = () => {
        setNumber(number - 1)
    }
    const handleOnpress = () => {
        console.log("Actualizar", number)
    }

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
                    number={number}
                    title="Actualizar"
                    handleNumberAdd={handleNumberAdd}
                    handleNumberSubstract={handleNumberSubstract}
                    handleOnpress={handleOnpress}
                />
            </View>
            <Button title="Agregar al carrito" onPress={handleAddToCart} />
        </View>
    )
}

export default ItemDetail