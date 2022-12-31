import { createSlice } from '@reduxjs/toolkit'

export const taskListSlice = createSlice({
    name: 'taskList',
    initialState: {
        taskList: [],
    },
    reducers: {}
});

export const { } = taskListSlice.actions;

export default taskListSlice.reducer