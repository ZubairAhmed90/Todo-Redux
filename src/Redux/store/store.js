import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../Reducer/todoslicer";

export const store =configureStore({

    reducer:{
        todos :todosReducer,
    }
})