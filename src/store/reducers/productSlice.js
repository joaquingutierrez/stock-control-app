import { createSlice } from '@reduxjs/toolkit'

import { products } from "../../constants/data/products"

const initialState = {
    data: products,
    selected: null
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newProduct = {
                ...action.payload,
                id: Date.now().toString()
            }
            state.data.push(newProduct)
            console.log(newProduct)
        }
    }
})

export const { addProduct } = productSlice.actions
export default productSlice.reducer