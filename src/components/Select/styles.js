import styled from "styled-components";
import { darkerGreen, darkGreen, white } from "colors";
import { border, transition } from "variables";
import { CounterItem } from "../ListItem/styles";

export const SelectWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 150px;
  box-sizing: content-box;
`;

export const Trigger = styled.div`
  width: 100%;
  background-color: ${darkGreen};
  height: 30px;
  border: ${border};
  color: ${white};
  
  div {
    padding: 5px 10px;
  }
`;

export const OptionsWrapper = styled.div`
  border: ${border};
  position: absolute;
  top: 32px;
  width: 150px;
`;

export const OptionWrapper = styled.div`
  padding: 5px 10px;
  background-color: ${darkGreen};
  color: ${white};
  transition: ${transition};
  
  &:hover {
    background-color: ${darkerGreen};
  }
`;

SelectWrapper.displayName = 'SelectWrapper';
Trigger.displayName = 'Trigger';
OptionsWrapper.displayName = 'OptionsWrapper';
OptionWrapper.displayName = 'OptionWrapper';
