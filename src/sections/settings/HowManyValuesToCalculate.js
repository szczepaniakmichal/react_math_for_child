import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import isEqual from "lodash.isequal";
import { useTranslation } from "react-i18next";
import { InputField } from "components";
import { updateSettings } from "sections/settings/settingsSlice";
import { getCorrectInputsValue } from "utils/getCorrectInputsValue";

function HowManyValuesToCalculate() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const  howManyValues  = useSelector(({ settings }) =>  settings.howManyValues, isEqual)

    const handleInputsChange = ({ target }) => {
        dispatch(updateSettings(getCorrectInputsValue(target, 2, 5)))
    };

    return (
        <InputField title={t('howManyValuesToCalculate')}
                    value={howManyValues} name={'howManyValues'}
                    onChange={handleInputsChange} max={5} min={2} placeholder={`${t('howManyValuesToCalculate')} set from 2 to 5`}/>
    );
}

export default HowManyValuesToCalculate;