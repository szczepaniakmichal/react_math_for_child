import React from 'react';
import PropTypes from 'prop-types';
import { disabledStyles, Input, Label } from './styles';
import { BorderWrapper } from 'styles';

InputMathOperators.prototype = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
};

InputMathOperators.defaultProps = {
    type: undefined,
    disabled: false,
}

function InputMathOperators({ type, disabled, ...props }) {
const style = disabledStyles({ disabled });

    return (
        <BorderWrapper>
            <Label htmlFor={type} {...{ style }} >
                {type}
                <Input {...props}
                       {...{ disabled, style }}
                       type="checkbox"
                       id={type}
                />
            </Label>
        </BorderWrapper>
    );
}

export default InputMathOperators;