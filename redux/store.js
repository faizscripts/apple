import {configureStore} from "@reduxjs/toolkit";
import adminReducer from "./features/admin"
import categoriesReducer from './features/categories'
import cartReducer from './features/cart'
import deliveryPriceReducer from './features/deliveryCost'


export const store = configureStore({
    reducer: {
        admin: adminReducer,
        categories:categoriesReducer,
        cart:cartReducer,
        deliveryPrice:deliveryPriceReducer,
    }
})