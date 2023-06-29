import { View, Image, Text } from "react-native"
import { useState } from "react"
import * as FileSystem from "expo-file-system"

import { styles } from "./style"
import { LabelAndInput, OptionSelection, InputNumber, ImageSelector } from "../../components"
import CustomText from "../../components/CustomText"

const CreateProduct = ({ onHandleTitle,
    onHandleDescription,
    handleCategory,
    handleMinSubstract,
    handleMinAdd,
    handleStockSubstract,
    handleStockAdd,
    handleImage,
    title,
    description,
    category,
    min,
    stock,
    categories,
    image
}) => {

    const [imageURI, setImageURI] = useState("")

    const onImage = (uri) => {
        const fileName = uri.split("/").pop()
        const path = FileSystem.documentDirectory + fileName
        try {
            FileSystem.moveAsync({
                from: uri,
                to: path
            })
            setImageURI(path)
            handleImage(path)
        }
        catch (err) {
            console.log(err)
        }
    }

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
                <View style={styles.imageAndTakeImage}>
                    <View style={styles.imageContainer}>
                        {image ? (
                            <Image style={styles.image} source={{ uri: image }} />
                        ) : (
                            <Text>Imagen no encontrada</Text>
                        )}
                    </View>
                    <ImageSelector onImage={onImage} />
                </View>
            </View>
        </View>
    )
}

export default CreateProduct