import { View, TouchableOpacity } from "react-native";
import { useState } from "react";


import { styles } from "./style"
import CustomText from "../CustomText"
import InputNumber from "../InputNumber"

const ItemWithCheckbox = ({ id, title, minQuantity, quantity }) => {

    const [number, setNumber] = useState(0)



    const handleNumberAdd = () => {
        const updatedNumber = number + 1
        setNumber(updatedNumber)
        quantity(id, updatedNumber)
    }
    const handleNumberSubstract = () => {
        const updatedNumber = number - 1
        setNumber(updatedNumber)
        quantity(updatedNumber)
    }

    return (
        <View style={[styles.container, number > 0 && number < minQuantity && styles.shop, number >= minQuantity && styles.reached]}>
            <CustomText myCustomText={title} textType="title" textWhite={true} />
            <InputNumber
                number={number}
                handleNumberSubstract={handleNumberSubstract}
                handleNumberAdd={handleNumberAdd}
            />
        </View>
    )
}

export default ItemWithCheckbox