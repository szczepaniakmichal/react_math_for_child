import React from 'react';

import { Input, LabelResult, WrapperInputField } from './styles';

function InputFieldResult({
                              title,
                              value,
                              className,
                              placeholder,
                              horizontalLabel,
                              onChange,
                              isCheckTasksActive,
                              ...props
                          }) {
    return (
        <WrapperInputField>
            <LabelResult>
                <span style={{flex: '1 0 auto'}}>{title}</span>
                <Input
                    {...props}
                    {...{value, className, onChange}}
                    type="number"
                    placeholder={placeholder || title}
                    disabled={isCheckTasksActive}
                />
            </LabelResult>
        </WrapperInputField>
    );
}

export default InputFieldResult;