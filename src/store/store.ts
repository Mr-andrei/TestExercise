import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { workersSlice } from './reducers';

const rootReducer = combineReducers({
    workerReducer: workersSlice.reducer,
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];