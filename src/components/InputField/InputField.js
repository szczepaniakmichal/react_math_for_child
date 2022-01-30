import React from 'react';

import { Label, Input, WrapperInputField } from './styles';

function InputField({title, value, className, onChange}) {
    return (
        <WrapperInputField>
            <Label>{title}
                <Input type="number" {...{value, className, onChange}}
                       placeholder={title} />
            </Label>
        </WrapperInputField>
    );
}

export default InputField;