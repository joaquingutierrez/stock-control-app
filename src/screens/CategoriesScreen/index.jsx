import { View, FlatList } from "react-native";

import { styles } from "./style"
import { ItemTouchable } from "../../components"
import { categories } from "../../constants/data/categories"

const CategoriesScreen = ({ navigation }) => {

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