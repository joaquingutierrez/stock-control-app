import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("products.db")

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS products (id TEXT PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT, category TEXT, image TEXT, minimum NUMBER, stock NUMBER)",
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

export const insertProduct = (product, productId) => {
    console.log(product)
    product.id = productId || Date.now().toString()
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO products (id, title, description, category, image, minimum, stock) VALUES (?,?,?,?,?,?,?)",
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

export const editProductByIdSQL = (product) => {
    const { id, title, description, category, image, minimum, stock } = product
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "UPDATE products SET title = ?, description = ?, category = ?, image = ?, minimum = ?, stock = ? WHERE id = ?",
                [title, description, category, image, minimum, stock, id],
                (_, result) => {
                    console.log("Fdf")
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