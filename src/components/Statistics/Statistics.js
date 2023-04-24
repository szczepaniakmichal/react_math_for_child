import React from 'react';
import { useSelector } from "react-redux";
import isEqual from "lodash.isequal";
import { useTranslation } from "react-i18next";

import Header from "components/Header/Header";
import { msToTime } from "utils";
import { InformationAboutResultWrapper } from "./style";


function Statistics() {
    const { t } = useTranslation();

    const statistics = useSelector(({ statistics }) => statistics, isEqual);
    const { checks, done, correctDone, leftToDo, correctToDo, startTime, endTime } = statistics;

    const isTaskFinish = startTime && endTime;

    return (
        <InformationAboutResultWrapper>
            <p>Your result is:</p>
            <Header title={t('checkCounter')} value={checks}/>
            <Header title={t('done')} value={done}/>
            <Header title={t('correctlyDone')} value={correctDone}/>
            <Header title={t('leftToDo')} value={leftToDo}/>
            <Header title={t('correctLeftToDo')} value={correctToDo}/>
            {isTaskFinish ? <Header title={t('yourTime')} value={msToTime(endTime - startTime)}/> : null}
        </InformationAboutResultWrapper>
    );
}

export default Statistics;