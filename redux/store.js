import {configureStore} from "@reduxjs/toolkit";
import adminReducer from "./features/admin"


export const store = configureStore({
    reducer: {
        admin: adminReducer
    }
})