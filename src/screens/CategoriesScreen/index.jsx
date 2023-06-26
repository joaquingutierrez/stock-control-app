import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./style"
import { ItemTouchable } from "../../components"

const CategoriesScreen = ({ navigation }) => {

    const categories = useSelector((state) => state.category.data)

    const onSelected = (item) => {
        navigation.navigate("Products", {
            name: item.title,
        });
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.containerList}
                data={categories}
                renderItem={({ item }) => <ItemTouchable title={item.title} textWhite={false} onSelected={() => onSelected(item)} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CategoriesScreen