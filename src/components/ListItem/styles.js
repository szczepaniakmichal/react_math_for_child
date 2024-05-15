import styled from "styled-components";
import { green,  white } from "colors";
import { borderRadius, boxShadow, opacity } from "variables";

export const LiWrapper = styled.li`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  flex: 1 1 auto;
  padding: 5px;
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
  color: ${white};
  
  &:hover {
    background-color: ${green}40;
    color: black;
    font-weight: 700;
    
    & Input {
      background-color: inherit;
    }
    
    & WrapperInputField {
      color: #000;
    }
  }
`;

export const CounterItem = styled.span`
  color: ${white};
  opacity: ${opacity};
`;

LiWrapper.displayName = 'LiWrapper';
CounterItem.displayName = 'CounterItem';

