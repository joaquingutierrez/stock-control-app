import { View, Text } from "react-native";
import { UseSelector, useSelector } from "react-redux";

import { styles } from "./style"
import { ItemDetail } from "../../components";

const ProductDetailScreen = ({ route }) => {

    const products = useSelector(state => state.product.data)

    const product = products.find(product => product.id === route.params.id)

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