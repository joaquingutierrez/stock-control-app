import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./style"
import { ItemTouchable } from "../../components"

const ProductsScreen = ({ navigation, route }) => {

    const products = useSelector(state => state.product.data)

    const categoryId = route.params.categoryId.toString()
    const productsFiltered = products.filter((product => product.category === categoryId))

    const onSelected = (item) => {
        navigation.navigate("ProductDetail", {
            name: item.title,
            id: item.id
        });
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.containerList}
                data={productsFiltered}
                renderItem={({ item }) => <ItemTouchable red={item.stock < item.minimum} title={item.title} textWhite={false} onSelected={() => onSelected(item)} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ProductsScreen