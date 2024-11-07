import { configureStore } from '@reduxjs/toolkit'
import taskListSlice from "components/TasksList/taskListSlice";
import statisticsSlice from "components/Statistics/statisticsSlice";
import settingsSlice from "sections/settings/settingsSlice";


export const store = configureStore({
    reducer: {
        settings: settingsSlice,
        taskList: taskListSlice,
        statistics: statisticsSlice,
    }
})
