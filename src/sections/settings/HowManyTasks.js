import React from 'react';
import InputField from "components/InputField/InputField";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import isEqual from "lodash.isequal";
import { updateSettings } from "sections/settings/settingsSlice";
import { getCorrectInputsValue } from "utils/getCorrectInputsValue";

function HowManyTasks() {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const howManyTasks = useSelector(({ settings }) => settings.howManyTasks, isEqual)

    const handleInputsChange = ({ target }) => {
        dispatch(updateSettings(getCorrectInputsValue(target, 1, 100)))
    };

    return (
        <InputField title={t('howManyTasks')} value={howManyTasks}
                    name={'howManyTasks'} onChange={handleInputsChange}
                    max={1000} placeholder={`${t('howManyTasks')} set from 1 to 1000`}/>
    );
}

export default HowManyTasks;