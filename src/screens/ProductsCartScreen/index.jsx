import { View, FlatList, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./style"
import { ItemWithCheckbox } from "../../components"
import { completePurchase } from "../../store/reducers/cartSlice";
import { updateStockAfterPurchase } from "../../store/reducers/productSlice";

const ProductsCartScreen = ({ navigation, route }) => {

    const productsCart = useSelector(state => state.cart.data)
    const dispatch = useDispatch()

    const categoryId = route.params.id.toString()
    const productsCartFiltered = productsCart.filter((product => product.category === categoryId))
    
    const createCart = []
    const quantity = (id, quantity) => {
        console.log("Cantidad",id, quantity)
        const product = createCart.find(product => product.id === id)
        if (!product) {
            return createCart.push({id, quantity})
        }
        product.quantity = quantity
    }

    const renderItem = ({ item }) => {
        return (
            <ItemWithCheckbox
                id={item.id}
                title={`${item.title} (${item.quantity})`}
                textWhite={false}
                quantity={quantity}
                minQuantity={item.quantity}

            />
        )
    }

    const handleOnPress = () => {
        dispatch(updateStockAfterPurchase(createCart))
        dispatch(completePurchase())
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.containerList}
                data={productsCartFiltered}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Button
                title="Terminar compra"
                onPress={handleOnPress}
            />
        </View>
    )
}

export default ProductsCartScreen