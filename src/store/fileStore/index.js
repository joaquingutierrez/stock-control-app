import * as FileSystem from "expo-file-system"

export const deleteFile = async (fileUri) => {
    try {
        await FileSystem.deleteAsync(fileUri);
        console.log('Archivo borrado correctamente.');
    } catch (error) {
        console.error('Error al borrar el archivo:', error);
    }
};

export const moveFile = async (fromUri, TofileUri) => {
    try {
        await FileSystem.moveAsync({
            from: fromUri,
            to: TofileUri
        })
    }
    catch (err) {
        console.log(err)
    }
}

export const getPersistence = async () => {
    const path = FileSystem.documentDirectory + "persistence.json"
    try {
        const persistence = await FileSystem.readAsStringAsync(path)
        console.log("Persistencia obtenida con exito")
        return persistence
    }
    catch (err) {
        console.log(err)
    }
}

export const savePersistence = async (persistence) => {
    const path = FileSystem.documentDirectory + "persistence.json"
    try {
        const fileContent = JSON.stringify({ persistence: persistence })
        await FileSystem.writeAsStringAsync(path, fileContent);
        console.log('Variable guardada exitosamente en el archivo.');
    }
    catch (err) {
        console.log(err)
    }
}