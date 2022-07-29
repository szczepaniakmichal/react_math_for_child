import styled from 'styled-components';

import { orange, white } from 'colors';
import { borderRadius, borderWidth, outlineColor, paddingTopBottom, transition } from "variables";

export const WrapperInputMathOperators = styled.div`
  padding: ${paddingTopBottom};
  border: ${borderWidth} solid transparent;
	border-radius: ${borderRadius};
  transition: ${transition};
  
  &:hover {
    border: ${borderWidth} solid ${white};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px ;
  color: ${white};
`;

export const Input = styled.input`
  width: 20px;
  height: 20px;
  outline-color: ${outlineColor};
`;