import { View, Text, TextInput } from "react-native";
import { useState } from "react";

import { styles } from "./style"
import { LabelAndInput, OptionSelection, InputNumber } from "../../components";
import { categories } from "../../constants/data/categories"
import CustomText from "../../components/CustomText";

const CreateProductScreen = () => {

    const [text, setText] = useState("Ingrese el título...")
    const [min, setMin] = useState(0)
    const [stock, setStock] = useState(0)

    const onChangeText = (e) => {
        setText(e)
    }

    const handleCategory = (id) => {
        console.log(id)
    }

    const handleMinSubstract = ()=> {
        const update = min - 1
        setMin(update)
    }
    const handleMinAdd = () => {
        const update = min + 1
        setMin(update)
    }

    const handleStockSubstract = ()=> {
        const update = stock - 1
        setStock(update)
    }
    const handleStockAdd = () => {
        const update = stock + 1
        setStock(update)
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
            <OptionSelection options={categories} handleOptionSelect={handleCategory} />
            <View style={styles.labelAndComponent}>
                <CustomText myCustomText="Mínimo: " />
                <InputNumber
                    number={min}
                    handleNumberSubstract={handleMinSubstract}
                    handleNumberAdd={handleMinAdd}
                />
            </View>
            <View style={styles.labelAndComponent}>
            <CustomText myCustomText="Stock: " />
                <InputNumber
                    number={stock}
                    handleNumberSubstract={handleStockSubstract}
                    handleNumberAdd={handleStockAdd}
                />
            </View>
            <View style={styles.labelAndComponent}>
                <CustomText myCustomText="Imagen: " />
                <CustomText myCustomText="Subir imagen" />
            </View>
        </View>
    )
}

export default CreateProductScreen