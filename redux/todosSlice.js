import { createSlice } from "@reduxjs/toolkit";
const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
const initialState = {
    todos: [],
    filter: visibilityFilters.SHOW_ALL,
};
const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log({ action: action.payload });
            state.todos = [...state.todos, { task: action.payload, completed: false }];
        },
        updateTaskStatus: (state, action) => {
            state.todos = state.todos.map(todo => {
                if (todo.task === action.payload.task) {
                    return { ...todo, completed: action.payload.completed };
                }
                return todo;
            });
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter(todo => !todo.completed);
        },
        filterChange: (state, action) => {
            state.filter = action.payload;
        },
    }
});
export const { addTodo, updateTaskStatus, clearCompleted, filterChange } = todoSlice.actions;
export default todoSlice.reducer;
//# sourceMappingURL=todosSlice.js.map