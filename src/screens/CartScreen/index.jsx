import { View, FlatList } from "react-native";

import { styles } from "./style"
import { ItemTouchable } from "../../components"
import { products } from "../../constants/data/products"

const CartScreen = ({navigation}) => {

    const onSelected = () => {

    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.containerList}
                data={products}
                renderItem={({ item }) => <ItemTouchable item={item} textWhite={false} onSelected={() => onSelected(item)} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CartScreen