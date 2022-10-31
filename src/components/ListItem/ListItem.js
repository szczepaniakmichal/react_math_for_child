import React, { useState } from 'react';
import InputFieldResult from "components/InputField/InputFieldResult";
import InformationAboutResult from 'components/InformationAboutResult/InformationAboutResult'
import { CounterItem, LiWrapper } from "./styles";
var stringMath = require('string-math');

function ListItem({taskToDo, isCheckTasksActive, index}) {
    const [value, setValue] = useState('');
    const correctResult = stringMath(taskToDo)

    const isCorrect = Number(value) === correctResult;

    const handleValueChange = (e) => setValue(e.target.value)

    return (
        <LiWrapper>
            <CounterItem>{index + 1}.</CounterItem>
            <InputFieldResult {...{value, isCheckTasksActive}}
                        title={taskToDo}
                        placeholder='Enter the result'
                        style={{ marginLeft: '10px' }}
                        horizontalLabel
                        onChange={handleValueChange}
            />
          {isCheckTasksActive && value && <InformationAboutResult {...{isCorrect}} />}
        </LiWrapper>
    );
}

export default ListItem;