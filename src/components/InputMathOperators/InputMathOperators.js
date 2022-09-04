import React from 'react';

import { Input, Label, WrapperInputMathOperators } from './styles'

function InputMathOperators({type, value}) {
    return (
        <WrapperInputMathOperators>
            <Label htmlFor={type}>
                {type}
                <Input type="checkbox"
                       value={value}
                       id={type}
                />
            </Label>
        </WrapperInputMathOperators>
    );
}

export default InputMathOperators;