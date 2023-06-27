import { configureStore } from '@reduxjs/toolkit'

import categoryReducer from './reducers/categotySlice'
import productReducer from "./reducers/productSlice"
import cartReducer from "./reducers/cartSlice"

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        cart: cartReducer
    }
})