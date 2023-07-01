import { View } from "react-native";

import { styles } from "./style"
import { ItemTouchable } from "../../components"

const CreateScreen = ({ navigation, route }) => {

    const onSelected = (title) => {
        title === "Crear Producto" ? (
            navigation.navigate("CreateProduct")
        ) : (
            navigation.navigate("CreateCategory")
        )
    }

    return (
        <View style={styles.container}>
            <ItemTouchable
                title="Crear Producto"
                onSelected={() => onSelected("Crear Producto")}
            />
            <ItemTouchable
                title="Crear Categoría"
                onSelected={() => onSelected("Crear Categoría")}
            />
        </View>
    )
}

export default CreateScreen