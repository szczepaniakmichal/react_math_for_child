import React from 'react';

import { Input, WrapperInputField, LabelResult } from './styles';

function InputFieldResult({title, value, className, placeholder, horizontalLabel, onChange, ...props}) {
    return (
        <WrapperInputField>
            <LabelResult>{title}
                <Input
                    {...props}
                    {...{value, className, onChange}}
                    type="number"
                    placeholder={placeholder  || title} />
            </LabelResult>
        </WrapperInputField>
    );
}

export default InputFieldResult;