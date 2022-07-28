import React from 'react';
import { ButtonWrapper, GlassButtonWrapper } from "./styles";

function Button({label, ...props}) {
    return (
        // <ButtonWrapper {...props}>
        //     {label}
        // </ButtonWrapper>

        <GlassButtonWrapper {...props}>
            {label}
        </GlassButtonWrapper>
    );
}

export default Button;