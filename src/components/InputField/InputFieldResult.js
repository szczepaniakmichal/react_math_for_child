import React from 'react';

import { Input, WrapperInputField, LabelResult } from './styles';

function InputFieldResult({title, value, className, placeholder, horizontalLabel, onChange, isCheckTasksActive,  ...props}) {
    return (
        <WrapperInputField>
            <LabelResult>{title}
                <Input
                    {...props}
                    {...{value, className, onChange}}
                    type="number"
                    placeholder={placeholder  || title}
                    disabled={isCheckTasksActive}
                />
            </LabelResult>
        </WrapperInputField>
    );
}

export default InputFieldResult;