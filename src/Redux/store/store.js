import { configureStore } from "@reduxjs/toolkit";
import todoslicer from "../Reducer/todoslicer";

export const store =configureStore({

    reducer:{
        todos :todoslicer,
    }
})