import { View, FlatList, Button } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./style"
import { ItemTouchable } from "../../components"

const ProductsScreen = ({ navigation, route }) => {

    const products = useSelector(state => state.product.data)

    const categoryId = route.params.categoryId.toString()
    let productsFiltered = []
    if (categoryId !== "-1") {
        productsFiltered = products.filter((product => product.category === categoryId))
    } else {
        productsFiltered = products
    }

    const onSelected = (item) => {
        navigation.navigate("ProductDetail", {
            name: item.title,
            id: item.id
        });
    }

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <ItemTouchable red={item.stock < item.minimum} title={item.title} textWhite={false} onSelected={() => onSelected(item)} />
        </View>
    )


    return (
        <View style={styles.container}>
            <FlatList
                data={productsFiltered}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ProductsScreen