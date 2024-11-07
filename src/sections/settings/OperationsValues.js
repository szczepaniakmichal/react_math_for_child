import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import isEqual from "lodash.isequal";
import { Header } from "components";
import InputField from "components/InputField/InputField";
import { updateSettings } from "sections/settings/settingsSlice";
import { SectionWrapper } from "styles";

function OperationsValues() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { howManyTasks, howManyValues, maximumSingleValue } = useSelector(({ settings }) => ({
        howManyTasks: settings.howManyTasks,
        howManyValues: settings.howManyValues,
        maximumSingleValue: settings.maximumSingleValue,
    }), isEqual)

    const handleInputsChange = ({target}) => {
        const fieldName = target.name || '';
        const value = parseInt(target.value);

        dispatch(updateSettings({fieldName, value}))
    };

    return (
        <SectionWrapper>
            <Header title="Settings"/>
            <InputField title={t('howManyTasks')} value={howManyTasks} name={'howManyTasks'} onChange={handleInputsChange} max={100}/>
            <InputField title={t('howManyValuesToCalculate')} value={howManyValues} name={'howManyValues'}
                        onChange={handleInputsChange} max={5} min={2} />
            <InputField title={t('maximumSingleValue')} value={maximumSingleValue} name={'maximumSingleValue'}
                        onChange={handleInputsChange}
                        max={10000}/>
        </SectionWrapper>
    );
}

export default OperationsValues;