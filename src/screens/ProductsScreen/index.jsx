import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./style"
import { ItemTouchable } from "../../components"

const ProductsScreen = ({ navigation, route }) => {

    const products = useSelector(state => state.product.data)

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
                renderItem={({ item }) => <ItemTouchable title={item.title} textWhite={false} onSelected={() => onSelected(item)} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ProductsScreen