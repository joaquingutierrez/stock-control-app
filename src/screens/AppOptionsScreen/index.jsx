import { View, Switch, Alert, Button } from "react-native"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as Clipboard from 'expo-clipboard';

import { styles } from "./style"
import CustomText from "../../components/CustomText"
import { readUserId, createUserId, updateUserId } from "../../store/userId"
import { changePersistence } from "../../store/reducers/persistenceSlice"
import { getPersistence, savePersistence } from "../../store/fileStore"
import { LabelAndInput } from "../../components"
import { colors } from "../../constants/theme"



const AppOptionsScreen = () => {

    const persistence = useSelector(state => state.persistence.data)
    const dispatch = useDispatch()

    const [userId, setUserId] = useState("")
    const [isEnabled, setIsEnabled] = useState(false);
    const [newUserId, setNewUserId] = useState("")

    const toggleSwitch = () => {
        let persistenceData
        if (!isEnabled) {
            persistenceData = "cloud"
        } else {
            persistenceData = "local"
        }
        savePersistence(persistenceData)
        dispatch(changePersistence(persistenceData))
        setIsEnabled(previousState => !previousState)
    };

    const getUserIdAndPersistence = async () => {
        try {
            let userIdData = await readUserId()
            if (userIdData) {
                userIdData = JSON.parse(userIdData).userId
                setUserId(userIdData)
            } else {
                userIdData = await createUserId()
                userIdData = await readUserId()
                userIdData = JSON.parse(userIdData).userId
                setUserId(userIdData)
            }

            let persistenceData = await getPersistence()
            if (persistenceData) {
                persistenceData = JSON.parse(persistenceData).persistence
                setIsEnabled(persistenceData !== "local")
                dispatch(changePersistence(persistenceData))
            } else {
                persistenceData = await savePersistence(persistence)
                persistenceData = await getPersistence()
                persistenceData = JSON.parse(persistenceData)
                setIsEnabled(false)
            }
        }
        catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        getUserIdAndPersistence()
    }, [])

    const onHandleInput = (e) => {
        setNewUserId(e)
    }
    const handleOnPress = () => {
        Alert.alert("¿Desea confirmar?", "Si pulsa aceptar, el ID de usuario cambiará", [
            {
                text: "Cancelar",
            },
            {
                text: "Confirmar",
                onPress: () => {
                    updateUserId(newUserId)
                    setUserId(newUserId)
                    setNewUserId("")
                }
            }
        ])
    }

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(userId);
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <CustomText myCustomText="AppOptions" textType="title" />
            </View>
            <View style={styles.userIdContainer}>
                <CustomText myCustomText="ID de Usuario: " />
                <CustomText myCustomText={userId} />
                <Button title="Copiar ID" onPress={copyToClipboard} color={colors.ok} />
            </View>
            <View style={styles.inputContainer}>
                <LabelAndInput title="Cambiar ID de usuario: " placeHolder="Nuevo ID..." onHandleInput={onHandleInput} value={newUserId} />
                <View style={styles.buttonContainer}>
                    <Button title="Confirmar" onPress={handleOnPress} color={colors.ok} />
                </View>
            </View>
            <View>
                <CustomText myCustomText="Modo de almacenamiento: " />
                <View style={styles.horizontal}>
                    <CustomText myCustomText="Local" />
                    <Switch
                        trackColor={'#81b0ff'}
                        thumbColor={'#f5dd4b'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <CustomText myCustomText="Nube" />
                </View>
            </View>
        </View>
    )
}

export default AppOptionsScreen