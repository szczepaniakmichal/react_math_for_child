import React from 'react';
import { InformationAboutResultWrapper } from "./style";

function InformationAboutResult({isCorrect}) {
    return (
        <InformationAboutResultWrapper>
            {isCorrect ? 'That\'s right! :)' : 'Try again...'}
        </InformationAboutResultWrapper>
    );
}

export default InformationAboutResult;