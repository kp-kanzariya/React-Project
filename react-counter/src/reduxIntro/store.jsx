import { configureStore } from "@reduxjs/toolkit";
import { reducerfun } from "./reducer";

export const storeData = configureStore({
    reducer:{
        xyz:reducerfun
    }
})