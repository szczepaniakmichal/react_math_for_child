import React from 'react';
import { SubLabel } from "components";

function DatePresenter({title}) {
    if (!title) return null;

    return (
        <SubLabel {...{title}} />
    );
}

export default DatePresenter;