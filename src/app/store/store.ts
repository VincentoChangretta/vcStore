import { configureStore } from "@reduxjs/toolkit";
import activeUserReducer from "./slices/activeUserSlice";
import newUserReducer from "./slices/newUserSlice";

export const store = configureStore({
  reducer: {
    activeUser: activeUserReducer,
    newUser: newUserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
