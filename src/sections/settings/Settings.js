import React from 'react';
import { GenerateButton, OperationsTypes, OperationsValues } from "sections";

function Settings() {
    return (
        <>
            <OperationsValues/>
            <OperationsTypes/>
            <GenerateButton/>
        </>
    );
}

export default Settings;