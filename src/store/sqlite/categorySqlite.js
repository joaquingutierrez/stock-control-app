import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("category.db")

export const initCategories = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS categories (id TEXT PRIMARY KEY NOT NULL, title TEXT NOT NULL)",
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

export const selectCategories = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "SELECT * FROM categories",
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

export const insertCategory = (categoryTitle, categoryId = Date.now().toString()) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "INSERT INTO categories (id, title) VALUES (?,?)",
                [categoryId, categoryTitle ],
                (_, result) => {
                    resolve(categoryId)
                },
                (_, err) => {
                    reject(err)
                }
            )
        })
    })
    return promise
}

export const editCategoryTitleSQL = (payload) => {
    const promise = new Promise((resolve, reject) => {
            const newTitle = payload.newTitle
            const categoryId = payload.id
            db.transaction((tx) => {
                tx.executeSql(
                    "UPDATE categories SET title = ? WHERE id = ?",
                    [newTitle, categoryId],
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

export const deleteCategorySQL =  (categoryId) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                "DELETE FROM categories WHERE id = ?",
                [categoryId],
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