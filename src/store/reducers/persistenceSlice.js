import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: "local",
}

export const persistenceSlice = createSlice({
    name: "persistence",
    initialState,
    reducers: {
        changePersistence: (state, action) => {
            switch (action.payload) {
                case "local": state.data = "local"
                    break
                case "cloud": state.data = "cloud"
                    break
                default: state.data = "local"
            }
        },
    }
})

export const { changePersistence } = persistenceSlice.actions
export default persistenceSlice.reducer