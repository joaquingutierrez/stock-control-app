import { View, Button, Alert } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { styles } from "./style"
import { LabelAndInput } from "../../components";
import { deleteCategory, editCategoryTitle } from "../../store/reducers/categotySlice";
import { deleteAllProductsFromCategory } from "../../store/reducers/productSlice";

const EditCategoryScreen = ({ navigation, route }) => {

    const [categoryTitle, setCategoryTitle] = useState("")
    const dispatch = useDispatch()

    const onHandleInput = (e) => {
        setCategoryTitle(e)
    }
    const handleEditCategory = (item) => {
        if (categoryTitle) {
            const payload = {
                id: route.params.item.id,
                newTitle: categoryTitle
            }
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
                        dispatch(deleteCategory(payload))
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