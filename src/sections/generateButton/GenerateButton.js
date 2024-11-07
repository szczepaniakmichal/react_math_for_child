import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import isEqual from "lodash.isequal";
import { useTranslation } from "react-i18next";
import { SectionWrapper } from "styles";
import Button from "components/Button/Button";
import {
    resetChecks, updateEndTime,
    updateStartTime
} from "components/Statistics/statisticsSlice";
import { generateTasksReducer } from "components/TasksList/taskListSlice";
import { createTasks } from "utils";

function GenerateButton() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { taskList } = useSelector(({ taskList }) => ({
        taskList: taskList.tasks,
    }), isEqual);

    const generateTasks = () => {
        const newTask = createTasks({
            // howManyTasks,
            // howManyValues,
            // maximumSingleValue,
            // typeOfMathOperators,
            // isPositiveResults,
        })
        dispatch(generateTasksReducer(newTask));
    }

    const handleGenerateTasks = () => {
        if ( taskList.tasks.length ) {
            const answer = window.confirm("Got a list, want to create a new one?");
            if ( answer ) {
                generateTasks();
                dispatch(resetChecks(0));
                dispatch(updateStartTime(new Date().getTime()));
                dispatch(updateEndTime(0));
                // setIsCheckTasksActive(false);
            }
            return null;
        }
        dispatch(updateStartTime(new Date().getTime()));
        return generateTasks();
    };

    return (
        <SectionWrapper>
            <Button label={t('generateTask')}
                    backgroundColor='silver'
                    onClick={handleGenerateTasks}
            />
        </SectionWrapper>
    );
}

export default GenerateButton;