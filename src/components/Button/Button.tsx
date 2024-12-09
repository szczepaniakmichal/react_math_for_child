import React from 'react';
import { GlassButtonWrapper } from "./styles";

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    label: string,
} 

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
    return (
        <GlassButtonWrapper {...props}>
            {label}
        </GlassButtonWrapper>
    );
}

export default Button;