import { Modal, View, Text, Pressable, FlatList, TouchableOpacity } from "react-native";
import { useState } from "react";

import { styles } from "./style"
import CustomText from "../CustomText";

const OptionSelection = ({ options, handleCategory }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [category, setCategory] = useState("Seleccionar...")

    const handleSelection = (item) => {
        handleCategory(item.id)
        setModalVisible(false)
        setCategory(item.title)
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handleSelection(item)}>
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
                            <FlatList style={styles.containerList}
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
                <Text style={styles.textStyle}>{category}</Text>
            </Pressable>
        </View>
    )
}

export default OptionSelection