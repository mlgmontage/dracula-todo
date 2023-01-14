import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "entities/tasks";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
