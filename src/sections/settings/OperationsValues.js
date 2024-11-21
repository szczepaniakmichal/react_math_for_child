import React from 'react';
import { Header } from "components";
import { SectionWrapper } from "styles";
import HowManyValuesToCalculate
    from "sections/settings/HowManyValuesToCalculate";
import HowManyTasks from "sections/settings/HowManyTasks";
import MaximumSingleValue from "sections/settings/MaximumSingleValue";

function OperationsValues() {
    return (
        <SectionWrapper>
            <Header title="Settings"/>
            <HowManyTasks />
            <HowManyValuesToCalculate />
            <MaximumSingleValue />
        </SectionWrapper>
    );
}

export default OperationsValues;