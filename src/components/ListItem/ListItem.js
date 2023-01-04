import React from 'react';
import { useDispatch } from "react-redux";
import InputFieldResult from "components/InputField/InputFieldResult";
import { CounterItem, LiWrapper } from "./styles";
import { updateUserAnswer } from 'components/TasksList/taskListSlice'

function ListItem({taskToDo, isCheckTasksActive, id, correctResult, userAnswer}) {
    const dispatch = useDispatch();

    const isCorrect = userAnswer === correctResult;

    const handleValueChange = (e) => {
        dispatch(updateUserAnswer({id, value: e.target.value}))
    }

    return (
        <LiWrapper>
            <CounterItem>{id + 1}.</CounterItem>
            <InputFieldResult {...{isCheckTasksActive, taskToDo, isCorrect}}
                              value={userAnswer}
                              placeholder='Enter the result'
                              style={{marginLeft: '10px'}}
                              horizontalLabel
                              onChange={handleValueChange}
            />
        </LiWrapper>
    );
}

export default ListItem;