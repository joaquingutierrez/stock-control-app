import { View, Button, Alert } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { styles } from "./style"
import { LabelAndInput } from "../../components";
import { addCategory } from "../../store/reducers/categotySlice";

const CreateCategoryScreen = () => {

    const [categoryTitle, setCategoryTitle] = useState("")
    const dispatch = useDispatch()

    const onHandleInput = (e) => {
        setCategoryTitle(e)
    }
    const handleNewCategory = () => {
        if (categoryTitle) {
            dispatch(addCategory(categoryTitle))
            setCategoryTitle("")
            Alert.alert("Categoría agregada", "", [
                {
                    text: "Aceptar"
                }
            ])
        } 
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
                onPress={()=>handleNewCategory()}
            />
        </View>
    )
}

export default CreateCategoryScreen