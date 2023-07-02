import { View, Image, Button } from "react-native"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { styles } from "./style"
import CustomText from "../CustomText"
import ButtonAndInput from "../ButtonAndInput"
import { updateStock } from "../../store/reducers/productSlice"
import { addToCart } from "../../store/reducers/cartSlice"
import { updateStockCloud } from "../../store/cloud/productsStoreCloud"
import { addToCartCloud } from "../../store/cloud/cartStoreCloud"
import { updateStockSQL } from "../../store/sqlite/productsSqlite"
import { insertProductToCartSQL } from "../../store/sqlite/cartSqlite"
import { colors } from "../../constants/theme"

const ItemDetail = ({ item, handleAddToCart }) => {

    const dispatch = useDispatch()
    const persistence = useSelector(state => state.persistence.data)
    const categories = useSelector(state => state.category.data)

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
        persistence === "local" ? updateStockSQL(productId, newStock) : updateStockCloud(productId, newStock)
        dispatch(updateStock(payload))
        if (newStock < item.minimum) {
            const payload = {
                item: item,
                quantity: item.minimum - newStock
            }
            persistence === "local" ? insertProductToCartSQL(payload) : addToCartCloud(payload)
            dispatch(addToCart(payload))
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {item.image ? <Image style={styles.image} source={{ uri: item.image }} /> : <CustomText myCustomText="Sin imagen" />}
            </View>
            <CustomText myCustomText={item.title} textType="title" />
            <View>
                <CustomText myCustomText="Descripción: " />
                <CustomText myCustomText={item.description || "Sin Descripción"} />
            </View>
            <View>
                <CustomText myCustomText="Categoría: " />
                <CustomText myCustomText={item.category ? categories.find(category => category.id === item.category).title : "Sin categoría"} />
            </View>
            <View style={styles.horizontal}>
                <CustomText myCustomText="Mínimo: " />
                <CustomText myCustomText={item.minimum} />
            </View>
            <View style={styles.stockContainer}>
                <View style={styles.horizontal}>
                    <CustomText myCustomText="Stock: " />
                    <CustomText myCustomText={item.stock} />
                    </View>
                    <ButtonAndInput
                        number={number}
                        title="Actualizar"
                        handleNumberAdd={handleNumberAdd}
                        handleNumberSubstract={handleNumberSubstract}
                        handleOnpress={handleOnpress}
                    />
            </View>
            <View style={styles.buttonContainer}>
            <Button title="Agregar al carrito" color={colors.ok} onPress={handleAddToCart} />
            </View>
        </View>
    )
}

export default ItemDetail