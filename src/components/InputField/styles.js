import styled from "styled-components";
import { outlineColor, paddingTopBottom } from "variables";
import { white } from "colors";

export const WrapperInputField = styled.div`
  padding: ${paddingTopBottom};
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
	color: ${white};
`;

export const Input = styled.input`
  padding: 5px;
  outline-color: ${outlineColor};
`;