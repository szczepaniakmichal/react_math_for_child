import React, { memo } from 'react';
import { useDispatch } from "react-redux";
import { InputFieldResult } from "components";
import { CounterItem, LiWrapper } from "./styles";
import { updateUserAnswer } from 'components/TasksList/taskListSlice'

function ListItem({ id, userAnswer, correctDone, ...props }) {
    const dispatch = useDispatch();

    const handleValueChange = (e) => {
        dispatch(updateUserAnswer({ id, value: e.target.value }))
    }

    return (
        <LiWrapper>
            <CounterItemPresenter {...{ id }} />
            <InputFieldResult {...props}
                              value={userAnswer}
                              isCorrect={correctDone}
                              style={{ marginLeft: '10px' }}
                              onChange={handleValueChange}
            />
        </LiWrapper>
    );
}

export default React.memo(ListItem);

const CounterItemPresenter = memo(({ id }) => {
    return <CounterItem>{id + 1}.</CounterItem>
})