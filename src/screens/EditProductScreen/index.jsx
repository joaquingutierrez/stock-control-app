import { View, Alert, Button } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as FileSystem from "expo-file-system"

import { styles } from "./style"
import { editProduct, deleteProduct } from "../../store/reducers/productSlice";
import { CreateProduct } from "../../componentContainer";
import CustomText from "../../components/CustomText";
import { deleteProductCloud, editProductCloud } from "../../store/cloud/productsStoreCloud";
import { moveFile, deleteFile } from "../../store/fileStore";
import { deleteProductByIdSQL, editProductByIdSQL } from "../../store/sqlite/productsSqlite";

const EditProductScreen = ({ navigation, route }) => {

    const categories = useSelector(status => status.category.data)
    const products = useSelector(status => status.product.data)
    const dispatch = useDispatch()
    const product = products.find(product => product.id === route.params.id) || ""
    const persistence = useSelector(state => state.persistence.data)

    const [title, setTitle] = useState(product.title)
    const [description, setDescription] = useState(product.description)
    const [category, setCategory] = useState(product.category || "")
    const [image, setImage] = useState(product.image)
    const [min, setMin] = useState(product.minimum)
    const [stock, setStock] = useState(product.stock)


    const onHandleTitle = (e) => {
        setTitle(e)
    }
    const onHandleDescription = (e) => {
        setDescription(e)
    }

    const handleCategory = (category) => {
        setCategory(category)
    }

    const handleImage = (uri) => {
        deleteFile(product.image)
        const fileName = uri.split("/").pop()
        const path = FileSystem.documentDirectory + fileName
        moveFile(uri, path)
        setImage(path)
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

    const handleEditProduct = async () => {
        const product = {
            title: title,
            description: description,
            category: category.id,
            minimum: min,
            stock: stock,
            image: image,
            id: route.params.id
        }
        persistence === "local" ? await editProductByIdSQL(product) : await editProductCloud(product)
        dispatch(editProduct(product))
        Alert.alert("Producto modificado", "", [
            {
                text: "Aceptar",
                onPress: () => navigation.navigate("Categories")
            }
        ])

    }
    const handleDeleteProduct = () => {
        Alert.alert("Borrar producto", "¿Está seguro?", [
            {
                text: "Sí",
                onPress: async () => {
                    await deleteFile(product.image)
                    persistence === "local" ? await deleteProductByIdSQL(product.id) : await deleteProductCloud(product.id)
                    dispatch(deleteProduct(product))
                    navigation.navigate("Categories");
                }
            },
            {
                text: "No",
            }
        ])
    }

    return (
        <View style={styles.container}>
            {product ? (
                <>
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
                    <Button
                        title="Modificar Producto"
                        onPress={handleEditProduct}
                    />
                    <Button
                        title="Borrar Producto"
                        onPress={handleDeleteProduct}
                    />
                </>
            ) : (
                <CustomText myCustomText="Producto no econtrado" />
            )}
        </View>
    )
}

export default EditProductScreen