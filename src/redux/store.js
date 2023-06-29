import { configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import productSlice from './productSlice'

export default configureStore({
    reducer:{
        cartReducer,
        products: productSlice}
})