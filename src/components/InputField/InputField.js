import React from 'react';

import { Input, LabelField, WrapperInputField } from './styles';

function InputField({title, value, className, placeholder, horizontalLabel, onChange, ...props}) {
    return (
        <WrapperInputField>
            <LabelField {...{horizontalLabel}}>{title}
                <Input
                    {...props}
                    {...{value, className, onChange}}
                    type="number"
                    placeholder={placeholder || title}/>
            </LabelField>
        </WrapperInputField>
    );
}

export default InputField;