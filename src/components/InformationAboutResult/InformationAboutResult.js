import React from 'react';
import { InformationAboutResultWrapper } from "./style";
import { green, yellow } from "colors";

function InformationAboutResult({isCorrect}) {
    const color = isCorrect ? green : yellow;

    return (
        <InformationAboutResultWrapper style={{color}}>
            {isCorrect ? 'That\'s right! :)' : 'Try again... :('}
        </InformationAboutResultWrapper>
    );
}

export default InformationAboutResult;