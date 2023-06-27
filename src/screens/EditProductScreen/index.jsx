import { View, Alert, Button } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./style"
import { editProduct } from "../../store/reducers/productSlice";
import { CreateProduct } from "../../componentContainer";

const EditProductScreen = ({ navigation, route }) => {

    const categories = useSelector(status => status.category.data)
    const products = useSelector(status => status.product.data)
    const dispatch = useDispatch()
    const product = products.find(product => product.id === route.params.id)

    const [title, setTitle] = useState(product.title)
    const [description, setDescription] = useState(product.description)
    const [category, setCategory] = useState(product.category)
    const [image, setImage] = useState(product.image)
    const [min, setMin] = useState(product.minimum)
    const [stock, setStock] = useState(product.stock)


    const onHandleTitle = (e) => {
        setTitle(e)
    }
    const onHandleDescription = (e) => {
        setDescription(e)
    }

    const handleCategory = (title) => {
        setCategory(title)
    }

    const handleMinSubstract = () => {
        const update = min - 1
        setMin(update)
    }
    const handleMinAdd = () => {
        const update = min + 1
        setMin(update)
    }

    const handleStockSubstract = () => {
        const update = stock - 1
        setStock(update)
    }
    const handleStockAdd = () => {
        const update = stock + 1
        setStock(update)
    }

    const handleEditProduct = () => {
        const product = {
            title: title,
            description: description,
            category: category,
            minimum: min,
            stock: stock,
            image: image,
            id: route.params.id
        }
        dispatch(editProduct(product))
        setTitle("")
        setDescription("")
        setCategory("")
        setImage("")
        setMin(0)
        setStock(0)
        Alert.alert("Producto modificado", "", [
            {
                text: "Aceptar"
            }
        ])
        navigation.navigate("Categories");
    }

    return (
        <View style={styles.container}>
            <CreateProduct
                onHandleTitle={onHandleTitle}
                onHandleDescription={onHandleDescription}
                handleCategory={handleCategory}
                handleMinSubstract={handleMinSubstract}
                handleMinAdd={handleMinAdd}
                handleStockSubstract={handleStockSubstract}
                handleStockAdd={handleStockAdd}
                title={title}
                description={description}
                category={category}
                min={min}
                stock={stock}
                categories={categories}
                image={image}
            />
            <Button
                title="Modificar Producto"
                onPress={handleEditProduct}
            />
        </View>
    )
}

export default EditProductScreen