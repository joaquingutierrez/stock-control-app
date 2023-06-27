import { View, FlatList, Button } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";

import { styles } from "./style"
import { ItemWithCheckbox } from "../../components"

const ProductsCartScreen = ({ navigation, route }) => {

    const productsCart = useSelector(state => state.cart.data)

    const categoryName = route.params.name
    const productsCartFiltered = productsCart.filter((product => product.category === categoryName))

    const quantity = (quantity) => {
        console.log("Cantidad", quantity)
    }

    const renderItem = ({ item }) => {
        return (
            <ItemWithCheckbox
                title={`${item.title} (${item.quantity})`}
                textWhite={false}
                quantity={quantity}
            />
        )
    }

    const handleOnPress = () => {
        console.log("Terminar compra")
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.containerList}
                data={productsCartFiltered}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Button
                title="Terminar compra"
                onPress={handleOnPress}
            />
        </View>
    )
}

export default ProductsCartScreen