import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos:[
        {
            id: '1',
            title: 'Learning Redux'
        }
    ]
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        todoAdded: (state, action)=>{
            state.todos.todos.push(action.payload)
        },
        todoRemoved: (state, action)=>{
            state.todos.todos.filter((todo)=>todo.id !== action.payload)
        }
    }
})

export const {todoAdded, todoRemoved}=todoSlice.actions;
export default todoSlice.reducer;