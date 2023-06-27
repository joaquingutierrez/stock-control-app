import { View } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./style"
import { ItemDetail } from "../../components";
import CustomText from "../../components/CustomText";

const ProductDetailScreen = ({ route }) => {

    const products = useSelector(state => state.product.data)

    const product = products.find(product => product.id === route.params.id)

    const handleAddToCart = () => {
        console.log("Agregar al carrito")
    }

    return (
        <View style={styles.container}>
            {product ? (
                <ItemDetail item={product} handleAddToCart={handleAddToCart} />
            ) : (
                <CustomText myCustomText="Producto no encotrado" />
            )}
        </View>
    )
}

export default ProductDetailScreen