import {
    resetChecks,
    updateEndTime,
    updateIsCheckTasksActive,
    updateStartTime
} from "components/Statistics/statisticsSlice";
import { createTasks } from "utils/index";
import { generateTasksReducer } from "components/TasksList/taskListSlice";

function generateTasks(dispatch, settings) {
    const newTask = createTasks(settings)
    dispatch(generateTasksReducer(newTask));
}

export function updateTasks(dispatch, tasks, settings) {
    if ( tasks.length ) {
        const answer = window.confirm("Got a list, want to create a new one?");
        if ( answer ) {
            generateTasks(dispatch, settings);
            dispatch(resetChecks(0));
            dispatch(updateStartTime(new Date().getTime()));
            dispatch(updateEndTime(0));
            dispatch(updateIsCheckTasksActive(false));
        }
        return null;
    }
    dispatch(updateStartTime(new Date().getTime()));
    generateTasks(dispatch, settings);
}

