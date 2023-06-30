import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("products.db")

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS products (id TEXT PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, category TEXT NOT NULL, image TEXT NOT NULL, minimum NUMBER NOT NULL, stock NUMBER NOT NULL)",
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

export const insertProduct = (product) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO products (id, title, description, category, image, minimum, stock) VALUES (?,?,?,?,?,?,?))",
                [product.id, product.title, product.description, product.category, product.image, product.minimum, product.stock],
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

export const selectProducts = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM products",
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