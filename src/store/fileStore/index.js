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