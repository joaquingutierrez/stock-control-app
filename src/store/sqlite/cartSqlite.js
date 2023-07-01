import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("cart.db")

export const initCart = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS cart (id TEXT PRIMARY KEY NOT NULL, title TEXT NOT NULL, category TEXT, quantity NUMBER)",
                [],
                () => {
                    resolve()
                },
                (_, err) => {
                    reject(err)
                }
            )
        })
    })
    return promise
}


export const insertProductToCartSQL = (payload) => {
    const { item, quantity } = payload
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT OR REPLACE INTO cart (id, title, category, quantity) VALUES (?,?,?,?)",
                [item.id, item.title, item.category, quantity],
                (_, result) => {
                    resolve(result)
                },
                (_, err) => {
                    reject(err)
                }
            )
        })
    })
    return promise
}

export const selectCart = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM cart",
                [],
                (_, result) => {
                    resolve(result.rows._array)
                },
                (_, err) => {
                    reject(err)
                }
            )
        })
    })
    return promise
}

export const deleteAfterPurchaseSQL = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM cart",
                [],
                (_, result) => {
                    resolve(result)
                },
                (_, err) => {
                    reject(err)
                }
            )
        })
    })
    return promise
}