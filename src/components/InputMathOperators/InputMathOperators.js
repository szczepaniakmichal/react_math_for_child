import React from 'react';

import { Input, Label, WrapperInputMathOperators } from './styles'

function InputMathOperators({type, value}) {
    return (
        <WrapperInputMathOperators>
            <Label className="math-operation">
                {type}
                <Input type="checkbox"
                       value={value}
                />
            </Label>
        </WrapperInputMathOperators>
    );
}

export default InputMathOperators;