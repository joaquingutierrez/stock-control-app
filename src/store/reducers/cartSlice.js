import { createSlice } from '@reduxjs/toolkit'

import { cart } from "../../constants/data/cart"

const initialState = {
    data: cart
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        
    }
})

export const {  } = cartSlice.actions
export default cartSlice.reducer