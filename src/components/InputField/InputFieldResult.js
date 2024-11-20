import React from 'react';
import { useTranslation } from "react-i18next";
import {
    LabelResult,
    LabelTask,
    WrapperInputField
} from './styles';
import InputPresenter from "components/InputField/InputPresenter";

function InputFieldResult({ taskToDo, ...props }) {
    const { t } = useTranslation();
    return (
        <WrapperInputField>
            <LabelResult>
                <LabelTask>{taskToDo}</LabelTask>
                <InputPresenter {...{ taskToDo }} {...props} placeholder={t('enterTheResult')}/>
            </LabelResult>
        </WrapperInputField>
    );
}

export default InputFieldResult;
