import { View, Button, Alert } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./style"
import { LabelAndInput } from "../../components";
import { deleteCategory, editCategoryTitle } from "../../store/reducers/categotySlice";
import { deleteAllProductsFromCategory } from "../../store/reducers/productSlice";
import { deleteAllProductsFromCategoryCloud } from "../../store/cloud/productsStoreCloud";
import { editCategoryTitleCloud } from "../../store/cloud/categoryStoreCloud";
import { deleteCategoryCloud } from "../../store/cloud/categoryStoreCloud";
import { deleteAllProductsFromCategorySQL } from "../../store/sqlite/productsSqlite";
import { deleteFile } from "../../store/fileStore";

const EditCategoryScreen = ({ navigation, route }) => {
    
    const [categoryTitle, setCategoryTitle] = useState("")
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.data)
    const persistence = useSelector(state => state.persistence.data)
    
    const onHandleInput = (e) => {
        setCategoryTitle(e)
    }
    const handleEditCategory = (item) => {
        if (categoryTitle) {
            const payload = {
                id: route.params.item.id,
                newTitle: categoryTitle
            }
            editCategoryTitleCloud(payload)
            dispatch(editCategoryTitle(payload))
            setCategoryTitle("")
            Alert.alert("Categoría Modificada", "", [
                {
                    text: "Aceptar",
                    onPress: () => navigation.navigate("Categories")
                }
            ])
        }
    }
    const handleDeleteCategory = (item) => {
        const payload = {
            id: route.params.item.id,
        }
        setCategoryTitle("")
        Alert.alert("Borrar Categoría", "Esta acción tambien borrará los productos que pertenezcan a la misma. ¿Desea continuar?", [
            {
                text: "Sí",
                onPress: async () => {
                    deleteCategoryCloud(payload.id)
                    dispatch(deleteCategory(payload))
                    const productsFiltered = products.filter(product => product.category === route.params.item.id)
                    for (let i=0; i < productsFiltered.length; i++) {
                        await deleteFile(productsFiltered[i].image)
                    }
                    persistence === "local" ? await deleteAllProductsFromCategorySQL(route.params.item.id) : await deleteAllProductsFromCategoryCloud(productsFiltered)
                    dispatch(deleteAllProductsFromCategory(payload))
                    navigation.navigate("Categories")
                }
            },
            {
                text: "No"
            }
        ])

    }

    return (
        <View style={styles.container}>
            <LabelAndInput
                title="Nombre de la categoría"
                placeHolder="Categoría..."
                onHandleInput={onHandleInput}
                value={categoryTitle}
            />
            <Button
                title="Modificar Categoría"
                onPress={() => handleEditCategory()}
            />
            <Button
                title="Borrar Categoría"
                onPress={() => handleDeleteCategory()}
            />
        </View>
    )
}

export default EditCategoryScreen