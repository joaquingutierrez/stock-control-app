import { View, FlatList } from "react-native";

import { styles } from "./style"
import { ItemTouchable } from "../../components"

const CategoriesScreen = () => {

    const categories = [
        {
            id: 0,
            title: "Category 0",
        },
        {
            id: 1,
            title: "Category 1",
        },
        {
            id: 2,
            title: "Category 2",
        },
        {
            id: 3,
            title: "Category 3",
        },
        {
            id: 4,
            title: "Category 4",
        },
        {
            id: 5,
            title: "Category 5",
        },
        {
            id: 6,
            title: "Category 6",
        },
        {
            id: 7,
            title: "Category 7",
        },
        {
            id: 8,
            title: "Category 8",
        }
    ]

    return (
        <View style={styles.container}>
            <FlatList style={styles.containerList}
                data={categories}
                renderItem={({ item }) => <ItemTouchable item={item} textWhite={false} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default CategoriesScreen