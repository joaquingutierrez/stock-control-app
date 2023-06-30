import * as FileSystem from "expo-file-system"

export const createUserId = async () => {
    const userId = Date.now().toString()
    const path = FileSystem.documentDirectory + "UserId.json"
    try {
        const fileContent = JSON.stringify({ userId: userId })
        await FileSystem.writeAsStringAsync(path, fileContent);
        console.log('Variable guardada exitosamente en el archivo.');
    }
    catch (err) {
        console.log(err)
    }
}

export const readUserId = async () => {
    const path = FileSystem.documentDirectory + "UserId.json"
    try {
        const userId = await FileSystem.readAsStringAsync(path);
        console.log('User ID obtenida con éxito.');
        return userId
    }
    catch (err) {
        console.log(err)
        return null
    }
}

export const deleteUserId = async () => {
    const path = FileSystem.documentDirectory + "UserId.json"
    try {
        await FileSystem.deleteAsync(path);
        console.log('Archivo borrado exitosamente');
    }
    catch (err) {
        console.log(err)
    }
}