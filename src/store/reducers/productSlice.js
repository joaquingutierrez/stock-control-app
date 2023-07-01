import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: []
}

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.data = action.payload || []
        },
        addProduct: (state, action) => {
            const newProduct = {
                ...action.payload
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
        },
        deleteAllProductsFromCategory: (state, action) => {
            const categoryId = action.payload.id
            state.data = state.data.filter(product => product.category !== categoryId)
        },
        updateStock: (state, action) => {
            const { id, newStock } = action.payload
            const product = state.data.find(product => product.id === id)
            product.stock = newStock
        },
        updateStockAfterPurchase: (state, action) => {
            const cart = action.payload
            cart.map(item => {
                const updateProductStock = state.data.find(product => product.id === item.id)
                updateProductStock.stock += item.quantity
            })
        }
    }
})

export const { addProduct, editProduct, deleteProduct, deleteAllProductsFromCategory, updateStock, updateStockAfterPurchase, getProducts } = productSlice.actions
export default productSlice.reducer