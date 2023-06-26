import { configureStore } from '@reduxjs/toolkit'

import categoryReducer from './reducers'

export const store = configureStore({
    reducer: {
        category: categoryReducer
    }
})