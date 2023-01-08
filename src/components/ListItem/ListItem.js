import React from 'react';
import { useDispatch } from "react-redux";
import InputFieldResult from "components/InputField/InputFieldResult";
import { CounterItem, LiWrapper } from "./styles";
import { updateUserAnswer } from 'components/TasksList/taskListSlice'

function ListItem({ id, userAnswer, correctDone, ...props}) {
    const dispatch = useDispatch();

    const handleValueChange = (e) => {
        dispatch(updateUserAnswer({id, value: e.target.value}))
    }

    return (
        <LiWrapper>
            <CounterItem>{id + 1}.</CounterItem>
            <InputFieldResult {...props}
                              value={userAnswer}
                              isCorrect={correctDone}
                              placeholder='Enter the result'
                              style={{marginLeft: '10px'}}
                              horizontalLabel
                              onChange={handleValueChange}
            />
        </LiWrapper>
    );
}

export default ListItem;