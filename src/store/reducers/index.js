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
        addCategory: (state, action) => {
            const newCategory = {
                title: action.payload,
                id: Date.now().toString()
            }
            state.data.push(newCategory)
        }
    }
})

export const { addCategory } = categorySlice.actions
export default categorySlice.reducer