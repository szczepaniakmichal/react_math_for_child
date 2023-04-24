import React from 'react';
import { useDispatch } from "react-redux";
import InputFieldResult from "components/InputField/InputFieldResult";
import { CounterItem, LiWrapper } from "./styles";
import { updateUserAnswer } from 'components/TasksList/taskListSlice'
import { useTranslation } from "react-i18next";

function ListItem({ id, userAnswer, correctDone, ...props }) {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const handleValueChange = (e) => {
        dispatch(updateUserAnswer({ id, value: e.target.value }))
    }

    return (
        <LiWrapper>
            <CounterItem>{id + 1}.</CounterItem>
            <InputFieldResult {...props}
                              value={userAnswer}
                              isCorrect={correctDone}
                              placeholder={t('enterTheResult')}
                              style={{ marginLeft: '10px' }}
                              horizontalLabel
                              onChange={handleValueChange}
            />
        </LiWrapper>
    );
}

export default ListItem;