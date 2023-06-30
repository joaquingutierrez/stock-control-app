import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: "local",
}

export const persistenceSlice = createSlice({
    name: "persistence",
    initialState,
    reducers: {
        changePersistence: (state, action) => {
            const persistence = action.payload
            switch (persistence) {
                case "local": state.data = "cloud"
                    break
                case "cloud": state.data = "local"
                    break
                default: state.data = "local"
            }
        },
    }
})

export const { changePersistence } = persistenceSlice.actions
export default persistenceSlice.reducer