import { View, Button } from "react-native"

import { styles } from "./style"
import { LabelAndInput, OptionSelection, InputNumber } from "../../components"
import CustomText from "../../components/CustomText"

const CreateProduct = ({ onHandleTitle,
    onHandleDescription,
    handleCategory,
    handleMinSubstract,
    handleMinAdd,
    handleStockSubstract,
    handleStockAdd,
    title,
    description,
    category,
    min,
    stock,
    categories,
    image
}) => {

    return (
        <View style={styles.container}>
            <LabelAndInput
                title="Título"
                placeHolder="Título..."
                onHandleInput={onHandleTitle}
                value={title}
            />
            <LabelAndInput
                title="Descripción"
                placeHolder="Descripcion..."
                onHandleInput={onHandleDescription}
                value={description}
            />
            <OptionSelection
                options={categories}
                handleOptionSelect={handleCategory}
                initialValue={category}
                value={category}
            />
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

export default CreateProduct