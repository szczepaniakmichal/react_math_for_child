import styled from 'styled-components';

import { white } from 'colors';
import { border, borderRadius, borderWidth, transition, opacity } from "variables";
import { pulseLight } from "components/Button/styles";
import { LabelTask } from "../InputField/styles";

export const WrapperInputMathOperators = styled.div`
  border: ${borderWidth} solid transparent;
  border-radius: ${borderRadius};
  transition: ${transition};
  
  &:hover {
    border: ${border};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px ;
  color: ${white};

  &:hover {
    animation-name: ${pulseLight};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export const Input = styled.input`
  width: 20px;
  height: 20px;
`;

export const disabledStyles = (options = {}) => {
    const { disabled } = options;
    return {
        cursor: disabled && 'not-allowed',
        opacity: disabled && `${opacity}`,
    }
}

WrapperInputMathOperators.displayName = "WrapperInputMathOperators";
Label.displayName = "Label";
Input.displayName = "Input";
