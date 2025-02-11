declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    todo: {
        todos: Array<{
            task: string;
            completed: boolean;
        }>;
        filter: string;
    };
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        todo: {
            todos: Array<{
                task: string;
                completed: boolean;
            }>;
            filter: string;
        };
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export default store;
//# sourceMappingURL=store.d.ts.map