import { configureStore, applyMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import categoryReducer from './reducers/categotySlice'
import productReducer from "./reducers/productSlice"
import cartReducer from "./reducers/cartSlice"

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        })
}, applyMiddleware(thunk))