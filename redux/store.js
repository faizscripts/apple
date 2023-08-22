import {configureStore} from "@reduxjs/toolkit";
import adminReducer from "./features/admin"
import categoriesReducer from './features/categories'
import cartReducer from './features/cart'


export const store = configureStore({
    reducer: {
        admin: adminReducer,
        categories:categoriesReducer,
        cart:cartReducer,
    }
})