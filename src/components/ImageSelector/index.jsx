import { View, Button, Alert } from "react-native"
import { requestCameraPermissionsAsync, launchCameraAsync } from "expo-image-picker"

import { styles } from "./style"

const ImageSelector = ({ onImage }) => {

    const verifyPermissions = async () => {
        const { status } = await requestCameraPermissionsAsync()

        if (status !== "granted") {
            Alert.alert(
                "Permiso denegado", "Necesita permisos para usar la cámara", [{ text: "OK" }]
            )
            return false
        }
        return true
    }

    const onHandlerTakeImage = async () => {
        const isCameraPermission = await verifyPermissions()
        if (!isCameraPermission) return

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.7
        })

        onImage(image.assets[0].uri)
    }


    return (
        <View style={styles.container}>
            <Button title="Tomar Foto" color="blue" onPress={onHandlerTakeImage} />
        </View>
    )
}

export default ImageSelector