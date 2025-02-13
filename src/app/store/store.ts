import { configureStore } from "@reduxjs/toolkit";
import activeUserReducer from "./slices/activeUserSlice";

export const store = configureStore({
  reducer: {
    activeUser: activeUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
