import React from 'react'
import { createSlice,nanoid } from '@reduxjs/toolkit';

const todoslicer = createSlice({
    name:'todos',
    initialState:{
        todo:[],
    },


   reducers: {
    addTodo:( state,action)=>{
    state.todo.push({
        title: action.payload.title,
        id:nanoid(),

    })},
    edit: (state,action)=>{
        state.todo[action.payload.index].title= action.payload.editval1;
    }
},
        delete: (state,action)=>{
        state.todo.splice(action.payload.index,1);
},

});

export default todoslicer.reducer;
export const {addTodo,delet,edit}=todoslicer.actions;