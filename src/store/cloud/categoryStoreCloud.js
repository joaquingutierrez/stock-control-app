import { URL_API } from "../../constants/data/dataBase"
import { readUserId } from "../userId"

export const getAllCategoriesCloud = async () => {
    try {
        const userID = await readUserId()
        const response = await fetch(`${URL_API}/${userID}/categories.json`)
        const data = await response.json()
        if (!data) return
        const categories = Object.values(data)
        const ids = Object.keys(data)
        categories.map((category, index) => {
            category.id = ids[index]
        })
        return categories
    }
    catch (err) {
        console.log(err)
    }
}

export const addCategoryCloud = async (category) => {
    try {
        const userID = await readUserId()
        const response = await fetch(`${URL_API}/${userID}/categories.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title: category})
        })
        const data = await response.json()
        return data.name
    }
    catch (err) {
        console.log(err)
    }
}

export const editCategoryTitleCloud = async (payload) => {
    try {
        const userID = await readUserId()
        const newTitle = payload.newTitle
        const categoryId = payload.id
        const sendUpdate = {
            title: newTitle
        }
        await fetch(`${URL_API}/${userID}/categories/${categoryId}.json`, {
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

export const deleteCategoryCloud = async (categoryId) => {
    try {
        const userID = await readUserId()
        await fetch(`${URL_API}/${userID}/categories/${categoryId}.json`, {
            method: "DELETE",
        })
    }
    catch (err) {
        console.log(err)
    }
}