import { View, Button, Image, Text } from "react-native"
import { useState } from "react"

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
        setImageURI(uri)
        handleImage(uri)
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
                initialValue={category.title}
                value={category.title}
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