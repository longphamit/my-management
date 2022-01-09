import { configureStore } from '@reduxjs/toolkit';
import appReducers from "../slices/index"
const store = configureStore({
    reducer: {
      ...appReducers,
    },
});
export default store;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;