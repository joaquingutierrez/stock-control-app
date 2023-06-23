import { View, Text } from "react-native";

import { styles } from "./style"

const CreateScreen = () => {

    const products = [
        {
            id: 0,
            title: "Producto 0",
            description: "Descripcion del producto 0",
            category: "Categoria 0",
            minimum: 4,
            stock: 8,
            image: null
        },
        {
            id: 1,
            title: "Producto 1",
            description: "Descripcion del producto 1",
            category: "Categoria 0",
            minimum: 4,
            stock: 8,
            image: null
        },
        {
            id: 2,
            title: "Producto 2",
            description: "Descripcion del producto 2",
            category: "Categoria 0",
            minimum: 4,
            stock: 8,
            image: null
        },
        {
            id: 3,
            title: "Producto 3",
            description: "Descripcion del producto 3",
            category: "Categoria 1",
            minimum: 4,
            stock: 8,
            image: null
        },
        {
            id: 4,
            title: "Producto 4",
            description: "Descripcion del producto 4",
            category: "Categoria 1",
            minimum: 4,
            stock: 8,
            image: null
        },
        {
            id: 5,
            title: "Producto 5",
            description: "Descripcion del producto 5",
            category: "Categoria 1",
            minimum: 4,
            stock: 8,
            image: null
        },
        {
            id: 6,
            title: "Producto 6",
            description: "Descripcion del producto 6",
            category: "Categoria 2",
            minimum: 4,
            stock: 8,
            image: null
        },
        {
            id: 7,
            title: "Producto 7",
            description: "Descripcion del producto 7",
            category: "Categoria 2",
            minimum: 4,
            stock: 8,
            image: null
        },
        {
            id: 8,
            title: "Producto 8",
            description: "Descripcion del producto 8",
            category: "Categoria 2",
            minimum: 4,
            stock: 8,
            image: null
        }
    ] 

    return (
        <View style={styles.container}>
            <Text>
                Create Screen
            </Text>
        </View>
    )
}

export default CreateScreen