import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./style"
import { ItemTouchable } from "../../components"

const CategoriesCartScreen = ({ navigation }) => {

    const categories = useSelector((state) => state.category.data)
    const products = useSelector((state) => state.product.data)

    const onSelected = (item) => {
        navigation.navigate("ProductsCart", {
            name: item.title,
        });
    }

    const quantityOfProductsByCategory = (category) => {
        const productsFiltered = products.filter(product=> product.category === category)
        const quantity = productsFiltered.length
        return quantity
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.containerList}
                data={categories}
                renderItem={({ item }) => <ItemTouchable title={`${item.title} (${quantityOfProductsByCategory(item.title)})`} textWhite={false} onSelected={() => onSelected(item)} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CategoriesCartScreen