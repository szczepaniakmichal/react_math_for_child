import { createSlice } from "@reduxjs/toolkit";
import { getLocalKey } from "utils";

export const progressSlice = createSlice({
    name: "progress",
    initialState: {
        lastWorkDate: getLocalKey('lastWorkDate'),
    },
    reducers: {
        updateLastVisit: (state, action) => {
              state.lastWorkDate = action.payload;
        }
    }
});

export const { updateLastVisit } = progressSlice.actions;

export default progressSlice.reducer;