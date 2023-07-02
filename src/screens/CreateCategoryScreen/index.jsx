import { View, Button, Alert } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./style"
import { LabelAndInput } from "../../components";
import { addCategory } from "../../store/reducers/categotySlice";
import { addCategoryCloud } from "../../store/cloud/categoryStoreCloud";
import { insertCategory } from "../../store/sqlite/categorySqlite";
import { colors } from "../../constants/theme";

const CreateCategoryScreen = () => {

    const [categoryTitle, setCategoryTitle] = useState("")
    const persistence = useSelector(state => state.persistence.data)
    const dispatch = useDispatch()

    const onHandleInput = (e) => {
        setCategoryTitle(e)
    }
    const handleNewCategory = async () => {
        if (categoryTitle.length<3) return Alert.alert("Error al crear la categoría", "Por favor, introduzca un Título de al menos 3 letras", [{text: "Aceptar"}])
            const categoryId = persistence === "local" ? await insertCategory(categoryTitle) : await addCategoryCloud(categoryTitle)
            dispatch(addCategory({title: categoryTitle, id: categoryId}))
            setCategoryTitle("")
            Alert.alert("Categoría agregada", "", [
                {
                    text: "Aceptar"
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
                title="Agregar Categoría"
                color={colors.ok}
                onPress={()=>handleNewCategory()}
            />
        </View>
    )
}

export default CreateCategoryScreen