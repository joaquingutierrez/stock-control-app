import { View, Switch } from "react-native"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import { styles } from "./style"
import CustomText from "../../components/CustomText"
import { readUserId, createUserId } from "../../store/userId"
import { changePersistence } from "../../store/reducers/persistenceSlice"
import { getPersistence, savePersistence } from "../../store/fileStore"
import { LabelAndInput } from "../../components"



const AppOptionsScreen = () => {

    const persistence = useSelector(state => state.persistence.data)
    const dispatch = useDispatch()

    const [userId, setUserId] = useState("")
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        let persistenceData
        if (!isEnabled) {
            persistenceData = "cloud"
        } else {
            persistenceData= "local"
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


    return (
        <View style={styles.container}>
            <CustomText myCustomText="AppOptions" />
            <View>
                <CustomText myCustomText="ID de Usuario: " />
                <CustomText myCustomText={userId} />
            </View>
            <View>
                <LabelAndInput />
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