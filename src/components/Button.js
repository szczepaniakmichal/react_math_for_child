import React from 'react';
import { Wrapper } from "./styles";

function Button({label, ...props}) {
    return (
        <Wrapper {...props}>
            {label}
        </Wrapper>
    );
}

export default Button;