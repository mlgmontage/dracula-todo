import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Tasks } from "./tasks.types";

// TODO: Hard-coded data should be deleted later
const initialState: Tasks = [
  {
    text: 'Watch "Green elephant"',
    date: new Date().toLocaleString(),
    tags: ["productivity", "health"],
    type: "basic",
  },
  {
    text: 'Read book "Coralina',
    date: new Date().toLocaleString(),
    tags: ["productivity", "education"],
    type: "basic",
  },
  {
    text: "Wash dishes",
    date: new Date().toLocaleString(),
    tags: ["productivity"],
    type: "basic",
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const tasksSelector = (state: RootState) => state.tasks;

export const taskReducer = tasksSlice.reducer;
