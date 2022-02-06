import styled from "styled-components";

import { black, orange, white } from "colors";
import { outlineColor, paddingButton, transition } from "variables";

export const Wrapper = styled.button`
  width: max-content;
  padding: ${paddingButton};
  margin: 10px 0;
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : orange };
  color: ${(props) => props.color ? props.color : black};
  font-size: ${(props) => props.fontSize ? props.fontSize : '1.5rem' };
  font-weight: ${(props) => props.isBolder ? 700 : 400};
  text-transform: uppercase;
  border: none;
  outline-color: ${outlineColor};      
  
  &:hover {
    color: ${white};
    transition: ${transition};
  }
`;
