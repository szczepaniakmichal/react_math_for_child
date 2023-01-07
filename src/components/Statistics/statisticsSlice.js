import { createSlice } from '@reduxjs/toolkit';

export const statisticsSlice = createSlice({
    name: 'statistics',
    initialState: {
        checks: 0,
        done: 0,
        correctDone: 0,
        leftToDo: 0,
        correctToDo: 0,
    },
    reducers: {
        updateChecks: state => {
            state.checks = state.checks + 1;
        },
        resetChecks: state => {
            state.checks = 0;
        },
        updateCorrectDone: (state, action) => {
            state.correctDone = action.payload.correctDone;
            state.done = action.payload.done;
            state.leftToDo = action.payload.leftToDo;
            state.correctToDo = action.payload.correctToDo;
        },
    }
});



export const { updateChecks, resetChecks, updateCorrectDone } = statisticsSlice.actions;

export default statisticsSlice.reducer