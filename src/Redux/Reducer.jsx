import { createSlece } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlece({
  name: 'addTodo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      return state;
    }
  }
})

export const { addTodo } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;