import { configureStore } from '@reduxjs/toolkit'
import settingsSlice from "sections/settings/settingsSlice";
import taskListSlice from "components/TasksList/taskListSlice";
import statisticsSlice from "components/Statistics/statisticsSlice";
import userSlice from "sections/user/userSlice";


export const store = configureStore({
    reducer: {
        user: userSlice,
        settings: settingsSlice,
        taskList: taskListSlice,
        statistics: statisticsSlice,
    }
})
