import { configureStore } from "@reduxjs/toolkit";
import { modalsReducer } from "entities/modals/model/modals";
import { taskReducer } from "entities/tasks";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    modals: modalsReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
