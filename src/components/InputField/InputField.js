import React from 'react';

import { Label, Input, WrapperInputField } from './styles';

function InputField({title, value, className, placeholder, horizontalLabel, onChange, ...props}) {
    return (
        <WrapperInputField>
            <Label {...{horizontalLabel}}>{title}
                <Input
                    {...props}
                    {...{value, className, onChange}}
                    type="number"
                    placeholder={placeholder  || title} />
            </Label>
        </WrapperInputField>
    );
}

export default InputField;