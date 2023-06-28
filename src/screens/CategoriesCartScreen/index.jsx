import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./style"
import { ItemTouchable } from "../../components"

const CategoriesCartScreen = ({ navigation }) => {

    const categories = useSelector((state) => state.category.data)
    const products = useSelector((state) => state.cart.data)

    const onSelected = (item) => {
        navigation.navigate("ProductsCart", {
            name: item.title,
            id: item.id
        });
    }

    const quantityOfProductsByCategory = (categoryId) => {
        categoryId = categoryId.toString()
        const productsFiltered = products.filter(product=> product.category === categoryId)
        const quantity = productsFiltered.length
        return quantity
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.containerList}
                data={categories}
                renderItem={({ item }) => <ItemTouchable title={`${item.title} (${quantityOfProductsByCategory(item.id)})`} textWhite={false} onSelected={() => onSelected(item)} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CategoriesCartScreen