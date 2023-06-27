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
        },
        editProduct: (state, action) => {
            const myProduct = state.data.find(product => product.id === action.payload.id)
            myProduct.title = action.payload.title
            myProduct.description = action.payload.description
            myProduct.category = action.payload.category
            myProduct.minimum = action.payload.minimum
            myProduct.stock = action.payload.stock
            myProduct.image = action.payload.image
        },
        deleteProduct: (state, action) => {
            const myProductIndex = state.data.findIndex(product => product.id === action.payload.id)
            state.data.splice(myProductIndex, 1)
        }
    }
})

export const { addProduct, editProduct, deleteProduct } = productSlice.actions
export default productSlice.reducer