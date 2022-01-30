import React from 'react';

import { Label, Input, WrapperInputField } from './styles';

function InputField({title, value, className}) {
    return (
        <WrapperInputField>
            <Label>{title}
                <Input type="number" {...{value, className}}
                       placeholder={title} />
            </Label>
        </WrapperInputField>
    );
}

export default InputField;