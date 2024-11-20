import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { SectionWrapper } from "styles";
import { Header } from "components";
import InputMathOperators
    from "components/InputMathOperators/InputMathOperators";

function OperationsTypes() {
    const { t } = useTranslation();

    const [isPositiveResults, setIsPositiveResults] = useState(false);
    const [typeOfMathOperators, setTypeOfMathOperators] = useState([]);

    const handlePositiveResultsChange = () => setIsPositiveResults( !isPositiveResults);

    const handleMathOperatorChange = (e) => {
        const mathOperator = e.target.value;
        const isChecked = e.target.checked;

        if ( isChecked ) {
            setTypeOfMathOperators([...typeOfMathOperators, mathOperator])
        } else {
            const newArr = typeOfMathOperators.filter(el => el !== mathOperator)
            setTypeOfMathOperators(newArr);
        }
        if ( mathOperator === '-' ) setIsPositiveResults(false);
    }

    return (
        <SectionWrapper>
            <Header title={t('typeOperations')}/>
            <InputMathOperators type={t('addition')} value='+'
                                onChange={handleMathOperatorChange}/>
            <InputMathOperators type={t('subtraction')} value='-'
                                onChange={handleMathOperatorChange}/>
            <InputMathOperators type={t('multiplication')} value='*'
                                onChange={handleMathOperatorChange}/>
            <InputMathOperators type={t('division')} value='/'
                                onChange={handleMathOperatorChange}/>
            <InputMathOperators type={t('positiveResults')}
                                value={isPositiveResults}
                                onChange={handlePositiveResultsChange}
                                disabled={ !typeOfMathOperators.includes('-')}
                                checked={isPositiveResults}/>
        </SectionWrapper>
    );
}

export default OperationsTypes;