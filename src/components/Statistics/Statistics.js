import React from 'react';
import { InformationAboutResultWrapper } from "./style";
import { useSelector } from "react-redux";
import isEqual from "lodash.isequal";
import Header from "components/Header/Header";
import { msToTime } from "utils";

function Statistics() {
    const statistics = useSelector(({statistics}) => statistics, isEqual);
    const { checks, done, correctDone, leftToDo, correctToDo, startTime, endTime } = statistics;

    const isTaskFinish = startTime && endTime;

    return (
        <InformationAboutResultWrapper>
            <p>Your result is:</p>
            <Header title='How mamy time do You check task?' value={checks} />
            <Header title='Done' value={done} />
            <Header title='Correctly done' value={correctDone} />
            <Header title='Left to do' value={leftToDo} />
            <Header title='Correct left to do' value={correctToDo} />
            {isTaskFinish ? <Header title='Your time' value={msToTime(endTime - startTime)} /> : null}
        </InformationAboutResultWrapper>
    );
}

export default Statistics;