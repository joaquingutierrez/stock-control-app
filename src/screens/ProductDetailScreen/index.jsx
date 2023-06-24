import { View, Text } from "react-native";

import { styles } from "./style"
import { ItemDetail } from "../../components";
import { products } from "../../constants/data/products";

const ProductDetailScreen = () => {

    const product0 = products[0]

    return (
        <View style={styles.container}>
            <ItemDetail item={product0} />
        </View>
    )
}

export default ProductDetailScreen