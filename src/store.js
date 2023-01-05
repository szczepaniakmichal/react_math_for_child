import { configureStore } from '@reduxjs/toolkit'
import taskListSlice from "components/TasksList/taskListSlice";
import statisticsSlice from "components/Statistics/statisticsSlice";


export const store = configureStore({
    reducer: {
        taskList: taskListSlice,
        statistics: statisticsSlice,
    }
})
