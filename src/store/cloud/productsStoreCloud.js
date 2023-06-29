import { URL_API } from "../../constants/data/dataBase"

const userID = "ID_DEL_USUARIO"

export const getAllProductsCloud = async () => {
    try {
        const response = await fetch(`${URL_API}/${userID}/products.json`)
        const data = await response.json()
        if (!data) return
        const products = Object.values(data)
        const ids = Object.keys(data)
        products.map((product, index) => {
            product.id = ids[index]
        })
        return products
    }
    catch (err) {
        console.log(err)
    }
}

export const addProductCloud = async (newProduct) => {
    try {
        const response = await fetch(`${URL_API}/${userID}/products.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct)
        })
        const data = await response.json()
        return data.name
    }
    catch (err) {
        console.log(err)
    }
}

export const editProductCloud = async (productUpdate) => {
    try {
        const productId = productUpdate.id
        const sendProduct = {
            title: productUpdate.title,
            description: productUpdate.description,
            category: productUpdate.category,
            minimum: productUpdate.min,
            stock: productUpdate.stock,
            image: productUpdate.image,
        }
        await fetch(`${URL_API}/${userID}/products/${productId}.json`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sendProduct)
        })
    }
    catch (err) {
        console.log(err)
    }
}

export const deleteProductCloud = async (productId) => {
    try {
        await fetch(`${URL_API}/${userID}/products/${productId}.json`, {
            method: "DELETE",
        })
    }
    catch (err) {
        console.log(err)
    }
}

export const deleteAllProductsFromCategoryCloud = async (products) => {
    try {
        for (let i=0; i<products.length; i++) {
            await fetch(`${URL_API}/${userID}/products/${products[i].id}.json`, {
                method: "DELETE",
            })
        }
    }
    catch (err) {
        console.log(err)
    }
}

export const updateStockCloud = async (productId, newStock) => {
    try {
        const sendUpdate = {
            stock: newStock
        }
        await fetch(`${URL_API}/${userID}/products/${productId}.json`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sendUpdate)
        })
    }
    catch (err) {
        console.log(err)
    }
}

export const updateStockAfterPurchaseCloud = async (cart) => {
    try {
        const products = await getAllProductsCloud()
        for (let i = 0; i < cart.length; i++) {
            const product = products.find(product => product.id === cart[i].id)
            const sendUpdateStock = {
                stock: product.stock + cart[i].quantity
            }
            await fetch(`${URL_API}/${userID}/products/${cart[i].id}.json`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(sendUpdateStock)
            })
        }
    }
    catch (err) {
        console.log(err)
    }
}