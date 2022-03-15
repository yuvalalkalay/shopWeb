import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    category : '',
    id : '',
    useId : '',
    useName : '',
    SignState : 'Sign In',
    quantity : []
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
        },
        userId : (state, action) => {
            state.useId = action.payload;
        },
        useName : ( state, action) => {
            state.useName = action.payload;
        },
        SignState : (state, action) => {
            state.SignState = action.payload;
        },
        quantity : (state, action) => {
            const obj = action.payload;
            state.quantity.push(obj);
        },
        removeProduct : (state, action) => {
            const id = action.payload;
            const quantityFiltered = state.quantity.filter( product => product.id !== id);
            state.quantity = quantityFiltered;
        },
        removeAllProuct : (state) => {
            state.quantity = [];
        }
    }
})

const store = configureStore({
    reducer : {
        slice : slice.reducer
    },
})

export { store, slice };