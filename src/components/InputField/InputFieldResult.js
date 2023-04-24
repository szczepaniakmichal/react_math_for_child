import React, { useRef } from 'react';

import { Input, inputStyles, LabelResult, LabelTask, WrapperInputField } from './styles';

function InputFieldResult({
                              taskToDo,
                              className,
                              placeholder,
                              horizontalLabel,
                              onChange,
                              isCheckTasksActive,
                              isCorrect,
                              ...props
                          }) {
    const ref = useRef(null);

    return (
        <WrapperInputField>
            <LabelResult>
                <LabelTask>{taskToDo}</LabelTask>
                <Input
                    {...props}
                    {...{ className, onChange, ref }}
                    type="number"
                    placeholder={placeholder || taskToDo}
                    disabled={isCheckTasksActive}
                    style={inputStyles({ isCorrect, isCheckTasksActive, ref })}
                />
            </LabelResult>
        </WrapperInputField>
    );
}

export default InputFieldResult;