import React from 'react';
import { OptionWrapper } from "./styles";

function Option({el, onClick}) {
    const {value, label} = el;

    return (
        <OptionWrapper onClick={() => onClick(value, label)}>
            {label}
        </OptionWrapper>
    );
}

export default Option;