import styled from 'styled-components';

import { orange } from 'colors';
import { paddingTopBottom, transition } from "variables";

export const WrapperInputMathOperators = styled.div`
  padding: ${paddingTopBottom};
  border: 1px solid transparent;
  transition: ${transition};
  
  &:hover {
    border: 1px solid ${orange};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 5px ;
`;

export const Input = styled.input`
  width: 20px;
  height: 20px;
`;