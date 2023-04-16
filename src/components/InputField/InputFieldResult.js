import React, { useRef } from 'react';

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
    const ref = useRef(null);

    return (
        <WrapperInputField>
            <LabelResult>
                <LabelTask style={labelStyles({isCorrect, isCheckTasksActive, ref})} {...{ref}}>{taskToDo}</LabelTask>
                <Input
                    {...props}
                    {...{className, onChange}}
                    type="number"
                    placeholder={placeholder || taskToDo}
                    disabled={isCheckTasksActive}
                />
            </LabelResult>
        </WrapperInputField>
    );
}

export default InputFieldResult;