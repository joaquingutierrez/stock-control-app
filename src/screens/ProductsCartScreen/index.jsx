import { View, FlatList, Button } from "react-native";

import { styles } from "./style"
import { products } from "../../constants/data/products"
import { ItemWithCheckbox } from "../../components"
import { useState } from "react";

const ProductsCartScreen = ({ navigation, route }) => {

    const categoryName = route.params.name
    const productsFiltered = products.filter((product => product.category === categoryName))

    const quantity = (quantity) => {
        console.log("Cantidad", quantity)
    }

    const renderItem = ({ item }) => {
        return (
            <ItemWithCheckbox
                item={item}
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
                data={productsFiltered}
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