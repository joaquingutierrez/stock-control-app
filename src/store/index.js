import { configureStore, applyMiddleware, getDefaultMiddleware } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import categoryReducer from './reducers/categotySlice'
import productReducer from "./reducers/productSlice"
import cartReducer from "./reducers/cartSlice"
import persistenceReducer from "./reducers/persistenceSlice"

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        product: productReducer,
        cart: cartReducer,
        persistence: persistenceReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false,
        })
}, applyMiddleware(thunk))