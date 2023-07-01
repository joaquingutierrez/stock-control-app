import { Modal, View, Text, Pressable, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";

import { styles } from "./style"
import CustomText from "../CustomText";

const OptionSelection = ({ options, handleOptionSelect, value }) => {

    const [modalVisible, setModalVisible] = useState(false)

    const handleSelection = (item) => {
        handleOptionSelect(item)
        setModalVisible(false)
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.optionContainer} onPress={() => handleSelection(item)}>
                <CustomText
                    myCustomText={item.title}
                />
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <CustomText
                myCustomText="Categoría: "
            />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View>
                            <FlatList
                                data={options}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                            />
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Cerrar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>{value || "Seleccionar..."}</Text>
            </Pressable>
        </View>
    )
}

export default OptionSelection