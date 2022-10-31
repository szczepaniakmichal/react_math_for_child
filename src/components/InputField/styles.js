import styled from "styled-components";
import { paddingTopBottom, border, borderRadius } from "variables";
import { darkGreen, white } from "colors";
import {pulseLight} from "components/Button/styles";

export const WrapperInputField = styled.div`
  padding: ${paddingTopBottom};
  flex: 1 0 auto;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: ${({horizontalLabel}) => horizontalLabel ? 'row' : 'column'} ;
	color: ${white};
`;

export const LabelField = styled(Label)`
  flex-direction: column;
`;

export const LabelResult = styled(Label)`
  flex-direction: row;
  align-items: center;
  flex: 0 0 auto;
`;

export const Input = styled.input`
  padding: 5px;
  outline: none;
  background-color: ${darkGreen};
  color: ${white};
  border: ${border};
  border-radius: ${borderRadius};
  flex: 0 0 auto;
  
  &:focus {
    animation-name: ${pulseLight};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  &::placeholder {
    color: ${white};
    opacity: .6;
  }
`;