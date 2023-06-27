import { createSlice } from '@reduxjs/toolkit'

import { cart } from "../../constants/data/cart"

const initialState = {
    data: cart
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
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
        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer