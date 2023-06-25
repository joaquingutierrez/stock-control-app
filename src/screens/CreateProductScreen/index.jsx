import { View, Text, TextInput } from "react-native";
import { useState } from "react";

import { styles } from "./style"
import { LabelAndInput, OptionSelection } from "../../components";
import { categories } from "../../constants/data/categories"

const CreateProductScreen = () => {

    const [text, setText] = useState("Ingrese el título...")

    const onChangeText = (e) => {
        setText(e)
    }

    const handleCategory = (id) => {
        console.log(id)
    }

    return (
        <View style={styles.container}>
            <LabelAndInput
                title="Título"
                placeHolder={text}
                onHandleInput={onChangeText}
            />
            <LabelAndInput
                title="Descripción"
                placeHolder={text}
                onHandleInput={onChangeText}
            />
            <OptionSelection options={categories} handleCategory={handleCategory}/>
        </View>
    )
}

export default CreateProductScreen