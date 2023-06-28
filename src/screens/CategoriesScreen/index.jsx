import { View, FlatList, Button } from "react-native";
import { useSelector } from "react-redux";

import { styles } from "./style"
import { ItemTouchable } from "../../components"

const CategoriesScreen = ({ navigation }) => {

    const categories = useSelector((state) => state.category.data)

    const onSelected = (item) => {
        navigation.navigate("Products", {
            name: item.title,
            categoryId: item.id
        });
    }

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <ItemTouchable title={item.title} textWhite={false} onSelected={() => onSelected(item)} />
            <View style={styles.button}>
                <Button title="Editar" onPress={() => navigation.navigate("CategoryEdit", { item })} />
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <ItemTouchable title="Todos los Productos" textWhite={false} onSelected={() => onSelected({title: "all", id:"-1"})} />
            <FlatList style={styles.containerList}
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CategoriesScreen