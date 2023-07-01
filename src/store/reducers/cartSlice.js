import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        getCart: (state, action) => {
            state.data = action.payload || []
        },
        addToCart: (state, action) => {
            const { item, quantity } = action.payload
            const { id, title, category } = item
            const product = state.data.find(product => product.id === id)
            if (!product) {
                state.data.push({
                    id,
                    title,
                    category,
                    quantity: quantity
                })
            } else {
                product.quantity = quantity
            }
        },
        completePurchase: (state, action) => {
            state.data.splice(0, state.data.length)
        }
    }
})

export const { addToCart, completePurchase, getCart } = cartSlice.actions
export default cartSlice.reducer