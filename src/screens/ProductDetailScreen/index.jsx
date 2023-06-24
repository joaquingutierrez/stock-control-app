import { View, Text } from "react-native";

import { styles } from "./style"
import { ItemDetail } from "../../components";
import { products } from "../../constants/data/products";

const ProductDetailScreen = ({ route }) => {

    const product = products.find(product => product.title === route.params.name)

    return (
        <View style={styles.container}>
            <ItemDetail item={product} />
        </View>
    )
}

export default ProductDetailScreen