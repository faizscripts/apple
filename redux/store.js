import {configureStore} from "@reduxjs/toolkit";
import adminReducer from "./features/admin"
import categoriesReducer from './features/categories'

export const store = configureStore({
    reducer: {
        admin: adminReducer,
        categories:categoriesReducer
    }
})