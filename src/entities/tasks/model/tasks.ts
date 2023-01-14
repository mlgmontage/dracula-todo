import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Category, Tag, TaskFilter, Tasks } from "./tasks.types";

type State = {
  list: Tasks;
  filters: TaskFilter;
};

// TODO: Hard-coded data should be deleted later
const initialState: State = {
  list: [
    {
      text: 'Watch "Green elephant"',
      date: new Date().toLocaleString(),
      tags: ["productivity", "health"],
      category: "basic",
    },
    {
      text: 'Read book "Coralina',
      date: new Date().toLocaleString(),
      tags: ["productivity", "education"],
      category: "basic",
    },
    {
      text: "Wash dishes",
      date: new Date().toLocaleString(),
      tags: ["productivity"],
      category: "basic",
    },
    {
      text: "Write code",
      date: new Date().toLocaleString(),
      tags: ["productivity"],
      category: "completed",
    },
    {
      text: "Write code",
      date: new Date().toLocaleString(),
      tags: ["productivity"],
      category: "deleted",
    },
  ],
  filters: {},
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setCategoryFilter: (
      state,
      { payload }: PayloadAction<Category | undefined>
    ) => {
      state.filters.byCategory = payload;
    },
    setTagFilter: (state, { payload }: PayloadAction<Tag | undefined>) => {
      // NOTE: Works like checkbox
      if (state.filters.byTag === payload) {
        state.filters.byTag = undefined;
      } else {
        state.filters.byTag = payload;
      }
    },
  },
});

export const { setCategoryFilter, setTagFilter } = tasksSlice.actions;

export const tasksSelector = (state: RootState) => state.tasks.list;
export const tasksFilterSelector = (state: RootState) => state.tasks.filters;

export const filteredTasksSelector = createSelector(
  [tasksSelector, tasksFilterSelector],
  (tasks, filters): Tasks | undefined => {
    let list: Tasks = tasks;

    // Filtering by category
    if (filters.byCategory) {
      list = list.filter((task) => task.category === filters.byCategory);
    }

    // Filtering by tag
    if (filters.byTag) {
      list = list.filter((task) => task.tags.includes(filters.byTag!));
    }

    return list;
  }
);

export const taskReducer = tasksSlice.reducer;
