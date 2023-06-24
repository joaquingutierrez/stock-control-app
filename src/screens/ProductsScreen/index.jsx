import { View, FlatList } from "react-native";

import { styles } from "./style"
import { products } from "../../constants/data/products"
import {ItemTouchable} from "../../components"

const ProductsScreen = ({ navigation, route }) => {

    const categoryName = route.params.name
    const productsFiltered = products.filter((product => product.category === categoryName))

    const onSelected = (item) => {
        navigation.navigate("ProductDetail", {
            name: item.title,
        });
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.containerList}
                data={productsFiltered}
                renderItem={({ item }) => <ItemTouchable item={item} textWhite={false} onSelected={() => onSelected(item.title)} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ProductsScreen