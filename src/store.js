import { configureStore } from '@reduxjs/toolkit'
import taskListSlice from "components/TasksList/taskListSlice";


export const store = configureStore({
    reducer: {
        taskList: taskListSlice,
    }
})
