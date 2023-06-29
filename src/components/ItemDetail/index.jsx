import { View, Image, Button } from "react-native"
import { useState } from "react"
import { useDispatch } from "react-redux"

import { styles } from "./style"
import CustomText from "../CustomText"
import ButtonAndInput from "../ButtonAndInput"
import { updateStock } from "../../store/reducers/productSlice"
import { addToCart } from "../../store/reducers/cartSlice"
import { updateStockCloud } from "../../store/cloud/productsStoreCloud"
import { addToCartCloud } from "../../store/cloud/cartStoreCloud"

const ItemDetail = ({ item, handleAddToCart }) => {

    const dispatch = useDispatch()

    const [number, setNumber] = useState(item.stock)

    const handleNumberAdd = () => {
        setNumber(number + 1)
    }
    const handleNumberSubstract = () => {
        setNumber(number - 1)
    }
    const handleOnpress = () => {
        const productId = item.id
        const newStock = number
        const payload = {
            id: productId,
            newStock: newStock
        }
        updateStockCloud(productId, newStock)
        dispatch(updateStock(payload))
        if (newStock < item.minimum) {
            const payload = {
                item: item,
                quantity: item.minimum - newStock
            }
            addToCartCloud(payload)
            dispatch(addToCart(payload))
        }
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