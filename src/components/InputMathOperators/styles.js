import styled from 'styled-components';
import { darkerGreen, green } from 'colors';
import { fontSize, opacity } from "variables";
import { displayItemsSpaceBetween, pulseLightAnimation } from "reusableStyles";

export const Label = styled.label`
     ${displayItemsSpaceBetween};
    font-size: ${fontSize};
    
     &:hover {
         ${pulseLightAnimation}
     }
`;

export const Input = styled.input`
    width: 20px;
    height: 20px;
    visibility: hidden;
    position: relative;

    &:before, &:after {
        content: "✔";
        position: absolute;
        top: -13px;
        font-size: 30px;
    }

    &:before {
        visibility: visible;
        color: ${darkerGreen};
    }

    &:checked {
        &:after {
            visibility: visible;
            color: ${green};
        }
    }

`;

export const disabledStyles = (options = {}) => {
    const { disabled } = options;
    return {
        cursor: disabled && 'not-allowed',
        opacity: disabled && `${opacity}`,
    }
}

Label.displayName = "Label";
Input.displayName = "Input";
