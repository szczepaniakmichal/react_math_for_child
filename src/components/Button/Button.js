import React from 'react';
import { GlassButtonWrapper } from "./styles";

function Button({ label, ...props }) {
    return (
        <GlassButtonWrapper {...props}>
            {label}
        </GlassButtonWrapper>
    );
}

export default Button;