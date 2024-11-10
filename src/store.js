import { configureStore } from '@reduxjs/toolkit'
import settingsSlice from "sections/settings/settingsSlice";
import taskListSlice from "components/TasksList/taskListSlice";
import statisticsSlice from "components/Statistics/statisticsSlice";


export const store = configureStore({
    reducer: {
        settings: settingsSlice,
        taskList: taskListSlice,
        statistics: statisticsSlice,
    }
})
