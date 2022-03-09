import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    category : ''
}

const slice = createSlice({
    name : 'slice',
    initialState,
    reducers: {
        category : (state, action) => {
            state.category = action.payload;
        },
        id : (state, action) => {
            state.id = action.payload;
        }
    }
})

const store = configureStore({
    reducer : {
        slice : slice.reducer
    },
})

export { store, slice };