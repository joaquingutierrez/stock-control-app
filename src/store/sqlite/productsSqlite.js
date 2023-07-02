import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("products.db")

export const initProducts = () => {
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

export const insertProduct = (product, productId = Date.now().toString()) => {
    product.id = productId
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO products (id, title, description, category, image, minimum, stock) VALUES (?,?,?,?,?,?,?)",
                [product.id, product.title, product.description, product.category, product.image, product.minimum, product.stock],
                (_, result) => {
                    resolve(productId)
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

export const selectProductByIdFromSQL = (productId) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM products WHERE id = ?",
                [productId],
                (_, result) => {
                    resolve(result.rows._array[0])
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
                    console.log("Producto editado con éxito")
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

export const deleteProductByIdSQL = (productId) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM products WHERE id = ?",
                [productId],
                (_, result) => {
                    console.log("Producto Borrado con éxito")
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

export const deleteAllProductsFromCategorySQL = (categoryId) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM products WHERE category = ?",
                [categoryId],
                (_, result) => {
                    console.log("Productos Borrados con éxito")
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

export const updateStockSQL = (productId, newStock) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "UPDATE products SET stock = ? WHERE id = ?",
                [newStock, productId],
                (_, result) => {
                    console.log("Stock actualizado")
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