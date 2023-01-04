import { createSlice } from '@reduxjs/toolkit'

export const taskListSlice = createSlice({
    name: 'taskList',
    initialState: {
        tasks: [],
    },
    reducers: {
        generateTasksReducer: (state, action) => {
            state.tasks = action.payload
        }
    }
});

export const { generateTasksReducer } = taskListSlice.actions;

export default taskListSlice.reducer