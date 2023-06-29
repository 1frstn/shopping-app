import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import StatusCode from '../utils/StatusCode';

export const getProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json();
    return result;
})


const initialState = {
    data:[],
    status:StatusCode.IDLE
};


const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        /* fetchProducts(state,action){
            state.data = action.payload;
        } */
    },
    extraReducers:(builder) => {
        builder
        .addCase(getProducts.pending, (state,action) =>{
            state.status = StatusCode.LOADING;
        })
        .addCase(getProducts.fulfilled,(state,action) => {
         state.data = action.payload;
         state.status = StatusCode.IDLE
        })
        .addCase(getProducts.rejected, (state,action) =>{
            state.status = StatusCode.ERROR;
        })
     }
});

/*  export const {fetchProducts} =productSlice.actions;
 */ 
export default productSlice.reducer;



/* export function getProducts(){
    return async function getProductsThunk(dispatch,getState){
        const data = await fetch('https://fakestoreapi.com/products')
        const result = await data.json();
        dispatch(fetchProducts(result))
    }
} */


/* gpt==
   

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'your-api-key';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ city }) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default weatherSlice.reducer;
   
 
 
*/