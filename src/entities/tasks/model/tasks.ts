import { createSlice } from "@reduxjs/toolkit";
import { Tasks } from "./tasks.types";

// TODO: Hard-coded data should be deleted later
const initialState: Tasks = [
  {
    text: 'Watch "Green elephant"',
    date: Date.now().toLocaleString(),
    tags: ["productivity", "health"],
    type: "basic",
  },
  {
    text: 'Read book "Coralina',
    date: Date.now().toLocaleString(),
    tags: ["productivity", "education"],
    type: "basic",
  },
  {
    text: "Wash dishes",
    date: Date.now().toLocaleString(),
    tags: ["productivity"],
    type: "basic",
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
});

export const taskReducer = tasksSlice.reducer;
