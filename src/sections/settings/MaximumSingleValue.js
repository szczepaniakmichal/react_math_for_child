import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import isEqual from "lodash.isequal";
import { updateSettings } from "sections/settings/settingsSlice";
import { InputField } from "components";
import { getCorrectInputsValue } from "utils/getCorrectInputsValue";

function MaximumSingleValue() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const  maximumSingleValue  = useSelector(({ settings }) => settings.maximumSingleValue, isEqual)

    const handleInputsChange = ({ target }) => {
        dispatch(updateSettings(getCorrectInputsValue(target, 1, 10000)))
    };

    return (
        <InputField title={t('maximumSingleValue')}
                    value={maximumSingleValue} name={'maximumSingleValue'}
                    onChange={handleInputsChange}
                    max={10000} placeholder={`${t('maximumSingleValue')} set from 1 to 10000`}/>
    );
}

export default MaximumSingleValue;