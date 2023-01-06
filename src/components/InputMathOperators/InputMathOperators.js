import React from 'react';

import { Input, Label, WrapperInputMathOperators, disabledStyles } from './styles'

function InputMathOperators({type, value, disabled, checked, onChange}) {

    return (
        <WrapperInputMathOperators>
            <Label htmlFor={type} style={disabledStyles({disabled})}>
                {type}
                <Input {...{value, disabled, checked}}
                       type="checkbox"
                       id={type}
                       onChange={onChange}
                       style={disabledStyles({disabled})}
                />
            </Label>
        </WrapperInputMathOperators>
    );
}

export default InputMathOperators;