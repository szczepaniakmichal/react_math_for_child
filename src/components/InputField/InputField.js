import React from 'react';

import { Label, Input, WrapperInputField } from './styles';

function InputField({title}) {
    return (
        <WrapperInputField>
            <Label>{title}
                <Input type="number" className="input-value how-many-task"
                       placeholder={title} />
            </Label>
        </WrapperInputField>
    );
}

export default InputField;