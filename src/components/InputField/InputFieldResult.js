import React from 'react';

import { Input, LabelResult, WrapperInputField, labelStyles, LabelTask } from './styles';

function InputFieldResult({
                              taskToDo,
                              value,
                              className,
                              placeholder,
                              horizontalLabel,
                              onChange,
                              isCheckTasksActive,
                              isCorrect,
                              ...props
                          }) {
    return (
        <WrapperInputField>
            <LabelResult>
                <LabelTask style={labelStyles({isCorrect, isCheckTasksActive})}>{taskToDo}</LabelTask>
                <Input
                    {...props}
                    {...{value, className, onChange}}
                    type="number"
                    placeholder={placeholder || taskToDo}
                    disabled={isCheckTasksActive}
                />
            </LabelResult>
        </WrapperInputField>
    );
}

export default InputFieldResult;