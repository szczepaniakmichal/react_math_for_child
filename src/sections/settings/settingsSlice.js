import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        howManyTasks: 30,
        howManyValues: 2,
        maximumSingleValue: 30,
        typeOfMathOperators: [],
        isPositiveResults: false,
    },
    reducers: {
        updateSettings: (state, action) => {
            return {
                ...state,
                [action.payload.fieldName]: action.payload.value
            };
        },
    }
});


export const { updateSettings } = settingsSlice.actions;

export default settingsSlice.reducer