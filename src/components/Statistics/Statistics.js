import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import isEqual from "lodash.isequal";
import { useTranslation } from "react-i18next";
import { SubHeader, ResultOnChart } from "components";
import {  msToTime, setLocalKey, getDate } from "utils";
import { updateLastVisit } from "sections/user/progress/progressSlice";
import { InformationAboutResultWrapper } from "./style";

function Statistics() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const statistics = useSelector(({ statistics }) => statistics, isEqual);
    const {
        checks,
        done,
        correctDone,
        leftToDo,
        correctToDo,
        startTime,
        endTime,
        isCheckTasksActive,
    } = statistics;

    useEffect(() => {
        if (done.isAllTasksDone) {
            const actualDate = getDate();
            setLocalKey('lastWorkDate', actualDate)
            dispatch(updateLastVisit(actualDate));
        }
    }, [done.isAllTasksDone]);

    if ( !isCheckTasksActive ) return null;

    const isTaskFinish = startTime && endTime;

    const doneValue = `${done.inPercentage} (${done.inDecimals})`
    const correctDoneValue = `${correctDone.inPercentage} (${correctDone.inDecimals})`

    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });

    return (
        <InformationAboutResultWrapper>
            <p>Your result is:</p>
            <SubHeader title={t('checkCounter')} value={checks}/>
            <SubHeader title={t('done')} value={doneValue}/>
            <SubHeader title={t('correctlyDone')} value={correctDoneValue}/>
            <SubHeader title={t('leftToDo')} value={leftToDo}/>
            <SubHeader title={t('correctLeftToDo')} value={correctToDo}/>
            {isTaskFinish ? <SubHeader title={t('yourTime')}
                                    value={msToTime(endTime - startTime)}/> : null}
            <ResultOnChart/>
        </InformationAboutResultWrapper>
    );
}

export default Statistics;