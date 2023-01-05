import React from 'react';
import PropTypes from "prop-types";

import { Input, LabelField, WrapperInputField } from './styles';

InputField.propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
};

InputField.defaultProps = {
    max: 5,
    min: 1,
};

function InputField({title, value, className, placeholder, horizontalLabel, onChange, max, min, ...props}) {
    return (
        <WrapperInputField>
            <LabelField {...{horizontalLabel}}>{title}
                <Input
                    {...props}
                    {...{value, className, onChange, max, min}}
                    type="number"
                    placeholder={placeholder || title}
                />
            </LabelField>
        </WrapperInputField>
    );
}

export default InputField;