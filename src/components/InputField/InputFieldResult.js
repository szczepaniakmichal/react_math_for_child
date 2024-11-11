import React, { useRef } from 'react';
import { useSelector } from "react-redux";
import isEqual from "lodash.isequal";
import { Input, inputStyles, LabelResult, LabelTask, WrapperInputField } from './styles';

function InputFieldResult({ taskToDo, ...props }) {

    return (
        <WrapperInputField>
            <LabelResult>
                <LabelTask>{taskToDo}</LabelTask>
               <InputPresenter {...{taskToDo}} {...props}/>
            </LabelResult>
        </WrapperInputField>
    );
}

export default InputFieldResult;

function InputPresenter({className, onChange, placeholder, taskToDo, isCorrect, ...props}) {
    const ref = useRef(null);

    const isCheckTasksActive = useSelector(({statistics}) =>statistics.isCheckTasksActive, isEqual);

    return (
        <Input
            {...props}
            {...{ className, onChange, ref }}
            type="number"
            placeholder={placeholder || taskToDo}
            disabled={isCheckTasksActive}
            style={inputStyles({ isCorrect, isCheckTasksActive, ref })}
        />
    )
}