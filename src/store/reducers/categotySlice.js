import { createSlice } from '@reduxjs/toolkit'

import { categories } from "../../constants/data/categories"

const initialState = {
    data: categories,
    selected: null
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        getCategories: (state, action) => {
            state.data = action.payload || []
        },
        addCategory: (state, action) => {
            const newCategory = {
                title: action.payload.title,
                id: action.payload.id
            }
            state.data.push(newCategory)
        },
        editCategoryTitle: (state, action) => {
            const { id, newTitle } = action.payload
            const category = state.data.find(category => category.id === id)
            category.title = newTitle
        },
        deleteCategory: (state, action) => {
            const { id } = action.payload
            const index = state.data.findIndex(category => category.id === id)
            state.data.splice(index, 1)
        }
    }
})

export const { addCategory, editCategoryTitle, deleteCategory, getCategories } = categorySlice.actions
export default categorySlice.reducer