import { URL_API } from "../../constants/data/dataBase"

const userID = "ID_DEL_USUARIO"

export const getCartCloud = async () => {
    try {
        const response = await fetch(`${URL_API}/${userID}/cart.json`)
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

export const addToCartCloud = async (payload) => {
    try {
        const { item, quantity } = payload
        const sendItem = {
            quantity: quantity
        }
        const response = await fetch(`${URL_API}/${userID}/cart/${item.id}.json`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(sendItem)
        })
        const data = await response.json()
        return data.name
    }
    catch (err) {
        console.log(err)
    }
}

export const completePurchaseCloud = async () => {
    try {
        const response = await fetch(`${URL_API}/${userID}/cart.json`, {
            method: "DELETE",
        })
    }
    catch (err) {
        console.log(err)
    }
}