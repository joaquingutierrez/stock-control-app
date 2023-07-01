import { View, Button, Alert, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./style"
import { addProduct } from "../../store/reducers/productSlice";
import { CreateProduct } from "../../componentContainer";
import { addProductCloud } from "../../store/cloud/productsStoreCloud";
import { insertProduct } from "../../store/sqlite/productsSqlite";

const CreateProductScreen = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState({})
    const [image, setImage] = useState("")
    const [min, setMin] = useState(0)
    const [stock, setStock] = useState(0)
    const dispatch = useDispatch()
    const categories = useSelector(state => state.category.data)
    const persistence = useSelector(state => state.persistence.data)

    const onHandleTitle = (e) => {
        setTitle(e)
    }
    const onHandleDescription = (e) => {
        setDescription(e)
    }

    const handleCategory = (category) => {
        setCategory(category)
    }

    const handleImage = (URI) => {
        setImage(URI)
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

    const handleNewProduct = async () => {
        if (title.length<3) return Alert.alert("Error al crear el producto", "Por favor, introduzca un Título de al menos 3 letras", [{text: "Aceptar"}])
        const product = {
            title: title,
            description: description,
            category: category.id || "",
            minimum: min,
            stock: stock,
            image: image
        }
        const dataId = persistence === "local" ? await insertProduct(product) : await addProductCloud(product)
        console.log(dataId)
        product.id = dataId
        dispatch(addProduct(product))
        setTitle("")
        setDescription("")
        setCategory({})
        setImage("")
        setMin(0)
        setStock(0)
        return (
            Alert.alert("Producto agregado", "", [
                {
                    text: "Aceptar"
                }
            ])
        )
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <CreateProduct
                    onHandleTitle={onHandleTitle}
                    onHandleDescription={onHandleDescription}
                    handleCategory={handleCategory}
                    handleImage={handleImage}
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
            </KeyboardAvoidingView>
            <Button
                title="Crear Producto"
                onPress={handleNewProduct}
            />
        </View>
    )
}

export default CreateProductScreen