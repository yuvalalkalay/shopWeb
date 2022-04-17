import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
    category : '',
    id : '',
    useId : '',
    useName : '',
    SignState : 'Sign In',
    quantity : [],
    user2UpdateId : '',
    product2UpdateId : '',
    adminState : 'invisible',
    search : ''
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
        },
        user2UpdateId : (state, action) =>{
            state.user2UpdateId = action.payload;
        },
        product2UpdateId : (state, action) =>{
            state.product2UpdateId = action.payload;
        },
        adminState : (state, action) => {
            state.adminState = action.payload;
        },
        search : (state, action) => {
            state.search = action.payload;
        }
    }
})

const store = configureStore({
    reducer : {
        slice : slice.reducer
    },
})

export { store, slice };