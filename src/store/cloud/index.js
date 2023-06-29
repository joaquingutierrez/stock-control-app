import { URL_API } from "../../constants/data/dataBase"

const userID = "ID_DEL_USUARIO"

export const getAllProductsCloud = async () => {
    try {
        const response = await fetch(`${URL_API}/${userID}/products.json`)
        const data = await response.json()
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
            category: productUpdate.category.id,
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