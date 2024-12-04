import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import isEqual from "lodash.isequal";
import { useTranslation } from "react-i18next";
import { SectionWrapper } from "styles";
import { Header } from "components";
import InputMathOperators from "components/InputMathOperators/InputMathOperators";
import updateSettingsHandler from "utils/updateSettingsHandler";

function OperationsTypes() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { typeOfMathOperators, isPositiveResults } = useSelector(({ settings }) => ({
        typeOfMathOperators: settings.typeOfMathOperators,
        isPositiveResults: settings.isPositiveResults,
    }), isEqual);

    const handlePositiveResultsChange = () => updateSettingsHandler(dispatch,'isPositiveResults', !isPositiveResults);

    const handleMathOperatorChange = (e) => {
        const mathOperator = e.target.value;
        const isChecked = e.target.checked;

        const value = isChecked ? [...typeOfMathOperators, mathOperator] : typeOfMathOperators.filter(el => el !== mathOperator);

        updateSettingsHandler(dispatch, 'typeOfMathOperators', value)

        if ( mathOperator === '-' ) {
          updateSettingsHandler(dispatch,'isPositiveResults', false);
        }
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