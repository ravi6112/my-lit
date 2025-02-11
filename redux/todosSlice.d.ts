export declare const addTodo: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "todos/addTodo">, updateTaskStatus: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "todos/updateTaskStatus">, clearCompleted: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"todos/clearCompleted">, filterChange: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, "todos/filterChange">;
declare const _default: import("redux").Reducer<{
    todos: Array<{
        task: string;
        completed: boolean;
    }>;
    filter: string;
}>;
export default _default;
//# sourceMappingURL=todosSlice.d.ts.map