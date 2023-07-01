import { View, FlatList } from "react-native";

import { styles } from "./style"
import { ItemTouchable } from "../../components"

const CartScreen = ({navigation}) => {

    const onSelected = () => {

    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.containerList}
                data={products}
                renderItem={({ item }) => <ItemTouchable title={item.title} textWhite={false} onSelected={() => onSelected(item)} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CartScreen