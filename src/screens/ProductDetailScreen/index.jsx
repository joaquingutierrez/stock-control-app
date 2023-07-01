import { View, Modal, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { styles } from "./style"
import { InputNumber, ItemDetail } from "../../components";
import CustomText from "../../components/CustomText";
import { addToCart } from "../../store/reducers/cartSlice";
import { addToCartCloud } from "../../store/cloud/cartStoreCloud";
import { insertProductToCartSQL } from "../../store/sqlite/cartSqlite";

const ProductDetailScreen = ({ route }) => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.product.data)
    const persistence = useSelector(state => state.persistence.data)
    const [modalVisible, setModalVisible] = useState(false);
    const [number, setNumber] = useState(0)

    const product = products.find(product => product.id === route.params.id)

    const handleAddToCart = () => {
        setModalVisible(true)
    }
    const dispatchAddToCart = () => {
        const payload = {
            item: product,
            quantity: number
        }
        
        persistence === "local" ? insertProductToCartSQL(payload) : addToCartCloud(payload)
        dispatch(addToCart(payload))
        setModalVisible(false)
    }

    const handleNumberSubstract = () => {
        const updateNumber = number - 1
        setNumber(updateNumber)
    }
    const handleNumberAdd = () => {
        const updateNumber = number + 1
        setNumber(updateNumber)
    }

    return (
        <View style={styles.container}>
            {product ? (
                <>
                    <ItemDetail item={product} handleAddToCart={handleAddToCart} />
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Cantidad a agregar:</Text>
                                <InputNumber number={number} handleNumberSubstract={handleNumberSubstract} handleNumberAdd={handleNumberAdd} />
                                <View>
                                    <Button title="Aceptar" onPress={dispatchAddToCart} />
                                    <Button title="Cancelar" onPress={() => setModalVisible(false)} />
                                </View>
                            </View>
                        </View>
                    </Modal>
                </>
            ) : (
                <CustomText myCustomText="Producto no encotrado" />
            )}
        </View>
    )
}

export default ProductDetailScreen