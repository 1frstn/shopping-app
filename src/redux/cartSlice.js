import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    cart:[]
};

const cartSlice = createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        addCart:(state,action) => {
            state.cart.unshift(action.payload)
        },
        removeCart:(state,action)=>{
            const filteredCArt =  state.cart.filter(
                item => item.id !== action.payload );
            state.cart = filteredCArt;
        }
    }
});

export const {addCart , removeCart} =cartSlice.actions;

export default cartSlice.reducer;