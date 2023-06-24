import { View, Text } from "react-native";

import { styles } from "./style"
import { ItemDetail } from "../../components";
import { products } from "../../constants/data/products";

const ProductDetailScreen = ({ route }) => {

    const product = products.find(product => product.title === route.params.name)

    const handleAddToCart = () => {
        console.log("Agregar al carrito")
    }

    return (
        <View style={styles.container}>
            <ItemDetail item={product} handleAddToCart={handleAddToCart} />
        </View>
    )
}

export default ProductDetailScreen