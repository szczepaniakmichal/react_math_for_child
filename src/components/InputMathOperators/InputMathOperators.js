import React from 'react';
import PropTypes from 'prop-types';

import { Input, Label, WrapperInputMathOperators, disabledStyles } from './styles'

InputMathOperators.prototype = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
};

InputMathOperators.defaultProps = {
    type: undefined,
    disabled: false,
}

function InputMathOperators({type, disabled, ...props}) {

    return (
        <WrapperInputMathOperators>
            <Label htmlFor={type} style={disabledStyles({disabled})}>
                {type}
                <Input {...props}
                    {...{disabled}}
                       type="checkbox"
                       id={type}
                       style={disabledStyles({disabled})}
                />
            </Label>
        </WrapperInputMathOperators>
    );
}

export default InputMathOperators;