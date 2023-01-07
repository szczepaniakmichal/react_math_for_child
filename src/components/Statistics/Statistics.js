import React from 'react';
import { InformationAboutResultWrapper } from "./style";
import { useSelector } from "react-redux";
import isEqual from "lodash.isequal";
import Header from "../Header/Header";

function Statistics() {
    const statistics = useSelector(({statistics}) => statistics, isEqual)

    return (
        <InformationAboutResultWrapper>
            <p>Your result is:</p>
            <Header title='How mamy time do You check task?' value={statistics.checks} />
            <Header title='Done' value={statistics.done} />
            <Header title='Correctly done' value={statistics.correctDone} />
            <Header title='Left to do' value={statistics.leftToDo} />
            <Header title='Correct left to do' value={statistics.correctToDo} />
        </InformationAboutResultWrapper>
    );
}

export default Statistics;