import { View, Button } from "react-native";
import { useRef } from "react";
import { useDispatch } from "react-redux";

import { styles } from "./style"
import { LabelAndInput } from "../../components";
import { addCategory } from "../../store/reducers";

const CreateCategoryScreen = () => {

    const refCategoryTitle = useRef("")
    const dispatch = useDispatch()

    const onHandleInput = (e) => {
        refCategoryTitle.current = e
    }
    const handleNewCategory = () => {
        refCategoryTitle.current ? (
            dispatch(addCategory(refCategoryTitle.current))
        ) : (
            console.log("No introdujo un nombre de categoría")
        )
    }

    return (
        <View style={styles.container}>
            <LabelAndInput
                title="Nombre de la categoría"
                placeHolder="Categoría..."
                onHandleInput={onHandleInput}
            />
            <Button
                title="Agregar Categoría"
                onPress={()=>handleNewCategory()}
            />
        </View>
    )
}

export default CreateCategoryScreen