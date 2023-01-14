import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "app/store";

type ModalState = {
  createTask: boolean;
};

const initialState: ModalState = {
  createTask: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    toggleTaskModal: (state) => {
      state.createTask = !state.createTask;
    },
  },
});

export const { toggleTaskModal } = modalsSlice.actions;

export const showTaskModal = (state: RootState) => state.modals.createTask;

export const modalsReducer = modalsSlice.reducer;
