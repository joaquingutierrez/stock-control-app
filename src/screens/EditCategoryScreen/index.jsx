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

const EditCategoryScreen = ({ navigation, route }) => {
    
    const [categoryTitle, setCategoryTitle] = useState("")
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.data)
    
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
                onPress: () => {
                    deleteCategoryCloud(payload.id)
                    dispatch(deleteCategory(payload))
                    const productsFiltered = products.filter(product => product.category === route.params.item.id)
                    deleteAllProductsFromCategoryCloud(productsFiltered)
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