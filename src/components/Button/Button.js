import React from 'react';
import { ButtonWrapper } from "./styles";

function Button({label, ...props}) {
    return (
        <ButtonWrapper {...props}>
            {label}
        </ButtonWrapper>
    );
}

export default Button;