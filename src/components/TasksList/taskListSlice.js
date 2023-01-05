import { createSlice } from '@reduxjs/toolkit';

export const taskListSlice = createSlice({
    name: 'taskList',
    initialState: {
        tasks: [],
    },
    reducers: {
        generateTasksReducer: (state, action) => {
            state.tasks = action.payload
        },
        updateUserAnswer: (state, action) => {
            state.tasks = updateTask(state.tasks, action.payload);
        }
    }
});

const updateTask = (tasks, actionPayload) => {
    const {id, value} = actionPayload;
    return tasks.map(el => el.id === id ?
        {...el, userAnswer: value, done: el.correctResult === value} :
        {...el})
}

export const { generateTasksReducer, updateUserAnswer } = taskListSlice.actions;

export default taskListSlice.reducer