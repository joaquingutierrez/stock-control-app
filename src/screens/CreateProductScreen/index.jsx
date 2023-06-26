import { View, Button } from "react-native";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { styles } from "./style"
import { LabelAndInput, OptionSelection, InputNumber } from "../../components";
import { categories } from "../../constants/data/categories"
import CustomText from "../../components/CustomText";
import { addProduct } from "../../store/reducers/productSlice";

const CreateProductScreen = () => {

    const refTitle = useRef("")
    const refDescription = useRef("")
    const refCategory = useRef("")
    const refImage = useRef("")
    const [min, setMin] = useState(0)
    const [stock, setStock] = useState(0)
    const dispatch = useDispatch()

    const onHandleTitle = (e) => {
        refTitle.current = e
    }
    const onHandleDescription = (e) => {
        refDescription.current = e
    }

    const handleCategory = (id) => {
        refCategory.current = id
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

    const handleNewProduct = () => {
        const product = {
            title: refTitle.current,
            description: refDescription.current,
            category: refCategory.current,
            minimum: min,
            stock: stock,
            image: refImage.current
        }
        dispatch(addProduct(product))
    }

    return (
        <View style={styles.container}>
            <LabelAndInput
                title="Título"
                placeHolder="Título..."
                onHandleInput={onHandleTitle}
            />
            <LabelAndInput
                title="Descripción"
                placeHolder="Descripcion..."
                onHandleInput={onHandleDescription}
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
            <Button
                title="Agregar Producto"
                onPress={handleNewProduct}
            />
        </View>
    )
}

export default CreateProductScreen