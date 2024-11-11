import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import isEqual from "lodash.isequal";
import { Button, Statistics } from "components";
import { GoToTop } from "sections";
import { BottomSection } from "styles";
import { GroupButtonWrapper } from "components/Button/styles";
import {
    updateChecks,
    updateCorrectDone,
    updateIsCheckTasksActive
} from "components/Statistics/statisticsSlice";
import { calculateDoneTasks } from "utils";

function StatisticsSection() {
    return (
        <BottomSection>
         <Statistics />
        <GroupButtonWrapper>
            <ButtonPresenter />
            <GoToTop />
        </GroupButtonWrapper>
    </BottomSection>
        );
}

export default StatisticsSection;

function ButtonPresenter() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { isCheckTasksActive, tasks } = useSelector(({ statistics, taskList }) =>({
        tasks: taskList.tasks,
        isCheckTasksActive: statistics.isCheckTasksActive,
    }), isEqual);

    const handleCheckTask = () => {
       dispatch(updateIsCheckTasksActive( !isCheckTasksActive));
        if ( !isCheckTasksActive && tasks.length ) {
            dispatch(updateChecks());
            dispatch(updateCorrectDone(calculateDoneTasks(tasks)));
        }
    };

    return (
        <Button label={isCheckTasksActive ? t('editTask') : t('checkTask')}
                backgroundColor='silver'
                onClick={handleCheckTask}
        />
    )
}