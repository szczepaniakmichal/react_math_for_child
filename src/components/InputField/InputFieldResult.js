import React from 'react';

import { Input, LabelResult, WrapperInputField, labelStyles, LabelTask } from './styles';

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
    return (
        <WrapperInputField>
            <LabelResult>
                <LabelTask style={labelStyles({isCorrect, isCheckTasksActive})}>{taskToDo}</LabelTask>
                <Input
                    {...props}
                    {...{className, onChange}}
                    type="text"
                    placeholder={placeholder || taskToDo}
                    disabled={isCheckTasksActive}
                />
            </LabelResult>
        </WrapperInputField>
    );
}

export default InputFieldResult;